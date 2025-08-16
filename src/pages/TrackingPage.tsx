import { TrackingSearch } from '@/components/TrackingSearch';
import { useLanguage } from '@/hooks/useLanguage';

export function TrackingPage() {
  const { t } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          {t.tracking.title}
        </h1>
        <p className="text-lg text-muted-foreground">
          Entrez votre code de suivi pour connaître l'état de votre envoi en temps réel
        </p>
      </div>

      <TrackingSearch />

      {/* Help Section */}
      <div className="bg-gradient-accent rounded-xl p-6">
        <h3 className="font-semibold mb-3">Besoin d'aide ?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-medium mb-1">Format du code de suivi :</p>
            <p className="text-muted-foreground">LOG + 9 chiffres (ex: LOG123456789)</p>
          </div>
          <div>
            <p className="font-medium mb-1">Codes de test :</p>
            <p className="text-muted-foreground">LOG123456789, LOG987654321</p>
          </div>
        </div>
      </div>
    </div>
  );
}