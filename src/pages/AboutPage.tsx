import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Award, Users, MapPin, TrendingUp } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation();

  const stats = [
    { icon: Award, value: '17+', label: 'Années d\'expérience' },
    { icon: Users, value: '500+', label: 'Clients satisfaits' },
    { icon: MapPin, value: '50+', label: 'Pays desservis' },
    { icon: TrendingUp, value: '10K+', label: 'Envois réalisés' },
  ];

  const timeline = [
    { year: '2007', title: 'Création de LOGICY TRANSPORT', description: 'Fondation de l\'entreprise avec une vision claire : révolutionner le transport logistique.' },
    { year: '2010', title: 'Expansion européenne', description: 'Ouverture de nos services dans toute l\'Europe avec des partenaires de confiance.' },
    { year: '2015', title: 'Transport aérien', description: 'Lancement de nos services de transport aérien pour les envois express.' },
    { year: '2018', title: 'Solutions maritimes', description: 'Développement de notre offre maritime pour les cargaisons volumineuses.' },
    { year: '2020', title: 'Digitalisation', description: 'Mise en place du système de suivi en temps réel et digitalisation complète.' },
    { year: '2024', title: 'Innovation continue', description: 'Aujourd\'hui, nous continuons d\'innover pour offrir les meilleures solutions.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-surface">
      <div className="space-y-16 relative">
        {/* Header */}
        <div className="bg-gradient-hero text-center py-16 px-4 -mx-4 animate-fade-in">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
            {t('about.title')}
          </h1>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            {t('about.story.content')}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-premium transition-smooth hover:-translate-y-2 bg-gradient-surface border-0 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardContent className="space-y-3 p-0">
                <div className="mx-auto w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center shadow-premium">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mission & Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
          <Card className="p-8 shadow-premium bg-gradient-surface border-0 animate-scale-in">
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Notre Mission</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t('about.mission.content')}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Nous nous engageons à fournir des solutions de transport innovantes, 
            en mettant la satisfaction client au cœur de nos préoccupations.
          </p>
        </Card>

          <Card className="p-8 shadow-premium bg-gradient-surface border-0 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <h3 className="text-xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Nos Engagements</h3>
          <p className="text-muted-foreground leading-relaxed mb-4">
            {t('about.values.reliability')}
          </p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              Traçabilité complète de vos envois
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              Service client réactif 24h/24
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 bg-primary rounded-full mr-3" />
              Respect de l'environnement
            </li>
          </ul>
        </Card>
      </div>

      {/* Timeline */}
      <section className="bg-gradient-accent rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
          Notre Histoire
        </h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex items-start space-x-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                {item.year}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

        {/* CTA */}
        <div className="text-center bg-gradient-dark rounded-2xl p-8 shadow-premium animate-scale-in mx-4">
          <h2 className="text-2xl font-bold mb-4 text-white">Rejoignez nos clients satisfaits</h2>
          <p className="text-white/80 mb-6">
            Découvrez pourquoi des centaines d'entreprises nous font confiance
          </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            onClick={() => onNavigate('services')}
            size="lg"
            className="bg-gradient-primary hover:opacity-90"
          >
            Découvrir nos services
          </Button>
          <Button 
            onClick={() => onNavigate('contact')}
            variant="outline"
            size="lg"
          >
            Nous contacter
          </Button>
        </div>
        </div>
      </div>
    </div>
  );
}