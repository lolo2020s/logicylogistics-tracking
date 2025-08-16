import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface ConditionsGeneralesPageProps {
  onNavigate: (page: string) => void;
}

export function ConditionsGeneralesPage({ onNavigate }: ConditionsGeneralesPageProps) {
  const { t } = useLanguage();

  const sections = [
    {
      title: "1. Objet et champ d'application",
      content: `Les présentes conditions générales s'appliquent à tous les services de transport et de logistique fournis par LOGICY TRANSPORT. Elles régissent les relations contractuelles entre LOGICY TRANSPORT et ses clients pour tous types de prestations : transport routier, aérien, maritime, stockage et manutention.`
    },
    {
      title: "2. Acceptation des commandes",
      content: `Toute commande implique l'acceptation pleine et entière des présentes conditions générales. Les commandes ne sont définitives qu'après confirmation écrite de LOGICY TRANSPORT. Les prix sont établis selon les tarifs en vigueur au moment de la commande.`
    },
    {
      title: "3. Obligations du client",
      content: `Le client s'engage à :
      • Fournir des informations exactes sur la marchandise (nature, poids, dimensions, valeur)
      • Emballer correctement les marchandises selon les normes en vigueur
      • Respecter les réglementations douanières et sanitaires
      • Être présent ou représenté aux lieux de collecte et de livraison
      • Régler les factures dans les délais convenus`
    },
    {
      title: "4. Obligations de LOGICY TRANSPORT",
      content: `LOGICY TRANSPORT s'engage à :
      • Acheminer les marchandises dans les meilleures conditions
      • Respecter les délais convenus dans la mesure du possible
      • Informer le client en cas de retard ou d'incident
      • Assurer la marchandise selon les conditions du contrat
      • Maintenir la confidentialité des informations clients`
    },
    {
      title: "5. Délais de livraison",
      content: `Les délais indiqués sont donnés à titre indicatif et ne constituent pas un engagement ferme. LOGICY TRANSPORT met tout en œuvre pour respecter ces délais mais ne peut être tenue responsable des retards dus à des causes indépendantes de sa volonté (conditions météorologiques, grèves, contrôles douaniers, etc.).`
    },
    {
      title: "6. Responsabilité et assurance",
      content: `La responsabilité de LOGICY TRANSPORT est limitée aux conventions internationales applicables selon le mode de transport :
      • Transport routier : Convention CMR
      • Transport aérien : Convention de Montréal
      • Transport maritime : Règles de La Haye-Visby
      
      Une assurance complémentaire peut être souscrite sur demande du client.`
    },
    {
      title: "7. Réclamations",
      content: `Toute réclamation doit être formulée par écrit dans les délais légaux :
      • Transport routier : 21 jours pour les dommages apparents, 7 jours pour les dommages non apparents
      • Transport aérien : 14 jours pour les dommages, 21 jours pour les retards
      • Transport maritime : 3 jours pour les dommages apparents, dans un délai raisonnable pour les dommages non apparents`
    },
    {
      title: "8. Facturation et paiement",
      content: `Les factures sont payables à 30 jours net sauf conditions particulières convenues. En cas de retard de paiement, des intérêts de retard au taux légal majoré de 10 points seront automatiquement appliqués. Une indemnité forfaitaire de 40€ pour frais de recouvrement sera facturée.`
    },
    {
      title: "9. Marchandises interdites",
      content: `LOGICY TRANSPORT se réserve le droit de refuser le transport de marchandises dangereuses, illégales ou non déclarées. Le client est responsable de la conformité de ses envois avec les réglementations en vigueur.`
    },
    {
      title: "10. Protection des données",
      content: `LOGICY TRANSPORT s'engage à protéger les données personnelles de ses clients conformément au RGPD. Les données collectées sont utilisées uniquement dans le cadre de l'exécution des prestations et ne sont pas transmises à des tiers sans autorisation.`
    },
    {
      title: "11. Droit applicable et juridiction",
      content: `Les présentes conditions générales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents. Toutefois, nous privilégions toujours la résolution amiable des différends.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Conditions Générales
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Conditions générales de vente et de transport - LOGICY TRANSPORT
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Informations légales */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-primary" />
              <span>Informations légales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">LOGICY TRANSPORT</h4>
                <p className="text-sm text-muted-foreground">
                  Société de transport et logistique<br/>
                  SIRET : 123 456 789 00012<br/>
                  Numéro de transporteur : 2023-001<br/>
                  Assurance RCP : AXA France
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Siège social</h4>
                <p className="text-sm text-muted-foreground">
                  123 Avenue de la Logistique<br/>
                  75001 Paris, France<br/>
                  Tél : +33 1 23 45 67 89<br/>
                  Email : contact@logicy-transport.com
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conditions générales */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{section.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Dernière mise à jour */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p>Dernière mise à jour : 15 janvier 2024</p>
              <p className="mt-2">
                Ces conditions générales peuvent être modifiées à tout moment. 
                La version applicable est celle en vigueur au moment de la commande.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact pour questions */}
        <Card className="mt-8 bg-gradient-hero">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Des questions sur nos conditions ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre équipe juridique est à votre disposition pour tout éclaircissement
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-primary hover:bg-white/90"
              >
                <Phone className="h-4 w-4 mr-2" />
                Nous Contacter
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4 mr-2" />
                Email Juridique
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}