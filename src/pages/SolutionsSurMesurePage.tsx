import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Settings, Users, Lightbulb, Target, CheckCircle, Phone, Calendar, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import heroImage from '@/assets/hero-premium.jpg';

interface SolutionsSurMesurePageProps {
  onNavigate: (page: string) => void;
}

export function SolutionsSurMesurePage({ onNavigate }: SolutionsSurMesurePageProps) {
  const { t } = useLanguage();

  const solutions = [
    {
      title: "Logistique Industrielle",
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      description: "Solutions dédiées aux besoins industriels spécifiques",
      features: [
        "Gestion des flux de production",
        "Transport de machines industrielles", 
        "Livraisons en juste-à-temps",
        "Stockage temporaire sécurisé",
        "Planning synchronisé avec la production"
      ],
      clients: "Manufacturiers, Usines, Groupes industriels"
    },
    {
      title: "Distribution E-commerce",
      icon: <Target className="h-8 w-8 text-green-500" />,
      description: "Infrastructure logistique complète pour la vente en ligne",
      features: [
        "Intégration API avec votre boutique",
        "Gestion des retours automatisée",
        "Emballage personnalisé à votre marque",
        "Livraison express et écologique",
        "Tableau de bord en temps réel"
      ],
      clients: "E-commerçants, Marketplaces, Start-ups"
    },
    {
      title: "Événementiel & Salons",
      icon: <Calendar className="h-8 w-8 text-purple-500" />,
      description: "Logistique complète pour vos événements professionnels",
      features: [
        "Transport de matériel événementiel",
        "Montage/démontage sur site",
        "Stockage inter-salons",
        "Coordination multi-sites",
        "Planning serré respecté"
      ],
      clients: "Organisateurs d'événements, Exposants, Agences"
    },
    {
      title: "Secteur Médical",
      icon: <Users className="h-8 w-8 text-red-500" />,
      description: "Transport sécurisé pour le secteur de la santé",
      features: [
        "Respect de la chaîne du froid",
        "Transport de produits pharmaceutiques",
        "Équipements médicaux sensibles",
        "Traçabilité pharmaceutique GDP",
        "Urgences médicales 24/7"
      ],
      clients: "Laboratoires, Hôpitaux, Pharmacies"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse de vos Besoins",
      description: "Étude approfondie de vos processus et contraintes spécifiques",
      icon: <Lightbulb className="h-6 w-6 text-primary" />
    },
    {
      step: "2", 
      title: "Conception de la Solution",
      description: "Élaboration d'une solution logistique sur mesure",
      icon: <Settings className="h-6 w-6 text-primary" />
    },
    {
      step: "3",
      title: "Test et Validation",
      description: "Phase pilote pour valider l'efficacité de la solution",
      icon: <Target className="h-6 w-6 text-primary" />
    },
    {
      step: "4",
      title: "Déploiement et Suivi",
      description: "Mise en place complète avec accompagnement continu",
      icon: <Users className="h-6 w-6 text-primary" />
    }
  ];

  const advantages = [
    "Économies d'échelle significatives",
    "Réduction des délais de livraison",
    "Optimisation des coûts logistiques",
    "Amélioration de la satisfaction client",
    "Accompagnement expert dédié",
    "Évolutivité selon votre croissance",
    "Reporting et KPIs personnalisés",
    "Support technique prioritaire"
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center py-24 px-6"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            <Settings className="h-3 w-3 mr-1" />
            Solutions Personnalisées
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Solutions Sur-Mesure
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Développement de solutions logistiques personnalisées pour répondre précisément à vos besoins métier et optimiser vos flux.
          </p>
          <Button 
            onClick={() => onNavigate('contact')}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
          >
            <Users className="h-4 w-4 mr-2" />
            Consulter un Expert
          </Button>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 py-16 space-y-16">
        {/* Solutions Sectorielles */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Solutions par Secteur d'Activité</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-4">
                    {solution.icon}
                    <div>
                      <CardTitle className="text-xl">{solution.title}</CardTitle>
                      <CardDescription>{solution.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-3">Fonctionnalités incluses :</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-xs text-muted-foreground">
                      <strong>Clients types :</strong> {solution.clients}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Processus de Développement */}
        <section>
          <h2 className="text-3xl font-bold text-center mb-12">Notre Méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <Card key={index} className="text-center relative">
                <CardHeader>
                  <div className="mx-auto mb-4 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </CardContent>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Avantages et CTA */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Pourquoi Choisir une Solution Sur-Mesure ?</h2>
              <div className="space-y-3">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span>{advantage}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 space-y-4">
                <Button 
                  onClick={() => onNavigate('contact')}
                  className="bg-primary hover:bg-primary/90 text-white mr-4"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Prendre RDV
                </Button>
                <Button 
                  onClick={() => onNavigate('quote')}
                  variant="outline"
                >
                  Étude Gratuite
                </Button>
              </div>
            </div>

            <Card className="p-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Target className="h-6 w-6 text-primary" />
                  <span>Exemples de Réalisations</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-4">
                    <h4 className="font-medium">Groupe Automobile</h4>
                    <p className="text-sm text-muted-foreground">
                      Optimisation de la supply chain avec réduction de 30% des coûts de transport
                    </p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-medium">E-commerce Mode</h4>
                    <p className="text-sm text-muted-foreground">
                      Infrastructure complète avec 99.8% de livraisons réussies
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium">Laboratoire Pharma</h4>
                    <p className="text-sm text-muted-foreground">
                      Solution GDP complète pour produits thermosensibles
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <h4 className="font-medium mb-2">Secteurs d'expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Industrie", "E-commerce", "Médical", "Événementiel", "Automotive", "Luxe"].map((sector) => (
                      <Badge key={sector} variant="outline" className="text-xs">
                        {sector}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <Card className="bg-gradient-hero">
            <CardContent className="pt-6 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Discutons de Votre Projet
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Nos experts logistique analysent gratuitement vos besoins et vous proposent 
                une solution personnalisée dans les 48h.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="bg-white/10 rounded-lg p-4">
                  <Users className="h-6 w-6 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">Équipe Dédiée</p>
                  <p className="text-white/80 text-sm">Expert attitré à votre projet</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Calendar className="h-6 w-6 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">Planning Flexible</p>
                  <p className="text-white/80 text-sm">Adaptation selon vos contraintes</p>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <Target className="h-6 w-6 text-white mx-auto mb-2" />
                  <p className="text-white font-medium">ROI Mesurable</p>
                  <p className="text-white/80 text-sm">Indicateurs de performance clairs</p>
                </div>
              </div>
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-primary hover:bg-white/90"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contactez un Expert
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}