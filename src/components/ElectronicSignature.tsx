import { useEffect, useRef, useState } from "react";
import SignaturePad from "signature_pad";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ElectronicSignatureProps {
  shipmentId: string;
  onSignatureComplete: () => void;
}

export function ElectronicSignature({ shipmentId, onSignatureComplete }: ElectronicSignatureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sigPad, setSigPad] = useState<SignaturePad | null>(null);
  const [isSigning, setIsSigning] = useState(false);

useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // High-DPI scaling for crisp lines
    const ratio = Math.max(window.devicePixelRatio || 1, 1);
    canvas.width = 400 * ratio;
    canvas.height = 200 * ratio;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.scale(ratio, ratio);

    canvas.style.width = '400px';
    canvas.style.height = '200px';

    const pad = new SignaturePad(canvas, {
      penColor: '#000000',
      backgroundColor: 'rgba(255,255,255,1)',
      minWidth: 0.5,
      maxWidth: 2.5,
    });

    setSigPad(pad);

    return () => {
      pad.clear();
      setSigPad(null);
    };
  }, []);

const handleClear = () => {
    if (!sigPad) return;
    sigPad.clear();
  };

const handleSave = async () => {
    if (!sigPad) return;
    if (sigPad.isEmpty()) {
      toast.error('Veuillez signer avant de confirmer');
      return;
    }

    setIsSigning(true);
    try {
      const dataURL = sigPad.toDataURL('image/png');

      const response = await fetch(dataURL);
      const blob = await response.blob();

      const fileName = `signature-${shipmentId}-${Date.now()}.png`;

      const { error: uploadError } = await supabase.storage
        .from('shipment-photos')
        .upload(fileName, blob, {
          contentType: 'image/png',
          upsert: true,
        });
      if (uploadError) throw uploadError;

      const { data: urlData } = supabase.storage
        .from('shipment-photos')
        .getPublicUrl(fileName);

      const { error: dbError } = await supabase
        .from('shipment_photos')
        .insert({
          shipment_id: shipmentId,
          photo_url: urlData.publicUrl,
          photo_type: 'signature',
          description: 'Electronic signature for delivery proof',
          uploaded_by: null,
        });
      if (dbError) throw dbError;

      toast.success('Signature enregistrée avec succès!');
      onSignatureComplete();
    } catch (error) {
      console.error('Error saving signature:', error);
      toast.error("Erreur lors de l'enregistrement de la signature");
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Signature électronique</CardTitle>
        <CardDescription>
          Signez ci-dessous pour confirmer la réception du colis
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="border border-border rounded-lg p-2 bg-background">
          <canvas 
            ref={canvasRef} 
            className="w-full h-auto border border-muted rounded"
          />
        </div>
        
        <div className="flex gap-2 justify-between">
          <Button variant="outline" onClick={handleClear}>
            Effacer
          </Button>
          <Button 
            onClick={handleSave} 
            disabled={isSigning}
            className="flex-1"
          >
            {isSigning ? "Enregistrement..." : "Confirmer signature"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}