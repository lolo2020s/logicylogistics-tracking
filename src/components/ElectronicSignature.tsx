import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas } from "fabric";
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
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [isSigning, setIsSigning] = useState(false);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 400,
      height: 200,
      backgroundColor: "#ffffff",
      isDrawingMode: true,
    });

    // Configure brush for signature
    canvas.freeDrawingBrush.color = "#000000";
    canvas.freeDrawingBrush.width = 2;

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#ffffff";
    fabricCanvas.renderAll();
  };

  const handleSave = async () => {
    if (!fabricCanvas) return;

    setIsSigning(true);
    
    try {
      // Convert canvas to blob
      const dataURL = fabricCanvas.toDataURL({
        format: 'png',
        quality: 1.0,
        multiplier: 1,
      });

      // Convert data URL to blob
      const response = await fetch(dataURL);
      const blob = await response.blob();

      // Generate unique filename
      const fileName = `signature-${shipmentId}-${Date.now()}.png`;

      // Upload to Supabase storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('shipment-photos')
        .upload(fileName, blob, {
          contentType: 'image/png',
        });

      if (uploadError) throw uploadError;

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('shipment-photos')
        .getPublicUrl(fileName);

      // Save signature record to database
      const { error: dbError } = await supabase
        .from('shipment_photos')
        .insert({
          shipment_id: shipmentId,
          photo_url: urlData.publicUrl,
          photo_type: 'signature',
          description: 'Electronic signature for delivery proof',
          uploaded_by: null, // Anonymous signature
        });

      if (dbError) throw dbError;

      toast.success("Signature enregistrée avec succès!");
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