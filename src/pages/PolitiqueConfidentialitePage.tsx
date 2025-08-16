import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, UserCheck, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

interface PolitiqueConfidentialitePageProps {
  onNavigate: (page: string) => void;
}

export function PolitiqueConfidentialitePage({ onNavigate }: PolitiqueConfidentialitePageProps) {
  const { t } = useLanguage();

  const sections = [
    {
      title: "1. Collecte des données personnelles",
      icon: <UserCheck className="h-5 w-5 text-primary" />,
      content: `Nous collectons les données personnelles suivantes :
      
      • Données d'identification : nom, prénom, adresse, téléphone, email
      • Données professionnelles : entreprise, fonction, secteur d'activité
      • Données de transport : adresses de collecte/livraison, nature des marchandises
      • Données de navigation : cookies, adresse IP, données de connexion
      • Données de facturation : informations bancaires, historique des paiements
      
      Ces données sont collectées directement lors de vos interactions avec nos services.`
    },
    {
      title: "2. Finalités du traitement",
      icon: <Eye className="h-5 w-5 text-primary" />,
      content: `Vos données personnelles sont utilisées pour :
      
      • Exécuter nos prestations de transport et logistique
      • Gérer la relation commerciale et les commandes
      • Assurer le suivi et la traçabilité des envois
      • Établir la facturation et gérer les paiements
      • Répondre à vos demandes et réclamations
      • Améliorer nos services et votre expérience client
      • Respecter nos obligations légales et réglementaires
      • Vous informer de nos nouveaux services (avec votre accord)`
    },
    {
      title: "3. Base légale du traitement",
      icon: <Shield className="h-5 w-5 text-primary" />,
      content: `Le traitement de vos données repose sur :
      
      • L'exécution du contrat de transport (prestations commandées)
      • Le respect d'obligations légales (comptabilité, douanes, sécurité)
      • Notre intérêt légitime (amélioration des services, sécurité)
      • Votre consentement (communications marketing, cookies non essentiels)
      
      Vous pouvez retirer votre consentement à tout moment sans affecter les traitements basés sur d'autres fondements légaux.`
    },
    {
      title: "4. Partage des données",
      icon: <UserCheck className="h-5 w-5 text-primary" />,
      content: `Vos données peuvent être transmises à :
      
      • Nos sous-traitants techniques (hébergement, maintenance informatique)
      • Nos partenaires transport (transporteurs, agents à l'étranger)
      • Les autorités compétentes (douanes, administrations)
      • Nos prestataires de services (assurance, facturation)
      
      Nous nous assurons que tous nos partenaires respectent le même niveau de protection de vos données et signons des accords de confidentialité appropriés.`
    },
    {
      title: "5. Durée de conservation",
      icon: <Lock className="h-5 w-5 text-primary" />,
      content: `Nous conservons vos données selon les durées suivantes :
      
      • Données clients actifs : pendant toute la durée de la relation commerciale
      • Données de facturation : 10 ans (obligation comptable)
      • Données de transport : 5 ans (convention CMR)
      • Données de prospection : 3 ans après le dernier contact
      • Données de navigation : 13 mois maximum
      
      À l'issue de ces délais, vos données sont supprimées ou anonymisées.`
    },
    {
      title: "6. Vos droits",
      icon: <UserCheck className="h-5 w-5 text-primary" />,
      content: `Conformément au RGPD, vous disposez des droits suivants :
      
      • Droit d'accès : connaître les données que nous détenons sur vous
      • Droit de rectification : corriger les données inexactes
      • Droit d'effacement : demander la suppression de vos données
      • Droit d'opposition : vous opposer au traitement pour motif légitime
      • Droit à la portabilité : récupérer vos données dans un format lisible
      • Droit de limitation : restreindre l'utilisation de vos données
      
      Pour exercer ces droits, contactez-nous à privacy@logicy-transport.com`
    },
    {
      title: "7. Sécurité des données",
      icon: <Lock className="h-5 w-5 text-primary" />,
      content: `Nous mettons en place des mesures de sécurité appropriées :
      
      • Chiffrement des données sensibles (SSL/TLS)
      • Contrôle d'accès strict aux données
      • Sauvegarde régulière et sécurisée
      • Formation du personnel à la protection des données
      • Audit de sécurité régulier
      • Plan de continuité et de récupération des données
      
      En cas de violation de données, nous nous engageons à vous informer dans les 72 heures.`
    },
    {
      title: "8. Cookies et traceurs",
      icon: <Eye className="h-5 w-5 text-primary" />,
      content: `Notre site utilise différents types de cookies :
      
      • Cookies essentiels : nécessaires au fonctionnement du site
      • Cookies de performance : mesure d'audience et optimisation
      • Cookies fonctionnels : amélioration de votre expérience
      • Cookies publicitaires : personnalisation des annonces (avec consentement)
      
      Vous pouvez gérer vos préférences de cookies via le bandeau dédié ou les paramètres de votre navigateur.`
    },
    {
      title: "9. Transferts internationaux",
      icon: <Shield className="h-5 w-5 text-primary" />,
      content: `Dans le cadre de nos activités internationales, vos données peuvent être transférées hors de l'UE :
      
      • Vers des pays disposant d'une décision d'adéquation
      • Via des clauses contractuelles types approuvées par la Commission européenne
      • Avec votre consentement explicite
      
      Nous nous assurons toujours que vos données bénéficient d'un niveau de protection équivalent à celui de l'UE.`
    },
    {
      title: "10. Contact et réclamations",
      icon: <Phone className="h-5 w-5 text-primary" />,
      content: `Pour toute question relative à cette politique :
      
      • Email : privacy@logicy-transport.com
      • Courrier : DPO - LOGICY TRANSPORT, 123 Avenue de la Logistique, 75001 Paris
      • Téléphone : +33 1 23 45 67 89
      
      Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr) si vous estimez que vos droits ne sont pas respectés.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Politique de Confidentialité
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Protection et traitement de vos données personnelles - RGPD
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>Notre engagement</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              LOGICY TRANSPORT s'engage à protéger votre vie privée et vos données personnelles. 
              Cette politique de confidentialité vous informe de la manière dont nous collectons, 
              utilisons et protégeons vos informations personnelles dans le respect du Règlement 
              Général sur la Protection des Données (RGPD) et de la loi française.
            </p>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-lg">
                  {section.icon}
                  <span>{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-muted-foreground whitespace-pre-line">
                  {section.content}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mise à jour */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="font-medium mb-2">Dernière mise à jour : 15 janvier 2024</p>
              <p>
                Cette politique de confidentialité peut être modifiée pour refléter les changements 
                dans nos pratiques de données. Nous vous informerons de toute modification significative.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact pour questions */}
        <Card className="mt-8 bg-gradient-hero">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              Questions sur vos données ?
            </h3>
            <p className="text-white/90 mb-6">
              Notre Délégué à la Protection des Données est à votre écoute
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
                DPO Email
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}