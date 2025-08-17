import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Shield, Eye, Lock, UserCheck, Phone, Mail } from 'lucide-react';
import { useTranslation } from '@/hooks/useTranslation';

interface PolitiqueConfidentialitePageProps {
  onNavigate: (page: string) => void;
}

export function PolitiqueConfidentialitePage({ onNavigate }: PolitiqueConfidentialitePageProps) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-surface">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-center py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('privacy.title')}
          </h1>
          <p className="text-xl text-white/90 mb-8">
            {t('privacy.subtitle')}
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Introduction */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-primary" />
              <span>{t('privacy.commitment')}</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              {t('privacy.commitmentDescription')}
            </p>
          </CardContent>
        </Card>

        {/* Sections */}
        <div className="space-y-6">
          {Object.entries(t('privacy.sections')).map(([key, section]: [string, any], index) => {
            const iconMap: Record<string, JSX.Element> = {
              s1: <UserCheck className="h-5 w-5 text-primary" />,
              s2: <Eye className="h-5 w-5 text-primary" />,
              s3: <Shield className="h-5 w-5 text-primary" />,
              s4: <UserCheck className="h-5 w-5 text-primary" />,
              s5: <Lock className="h-5 w-5 text-primary" />,
              s6: <UserCheck className="h-5 w-5 text-primary" />,
              s7: <Lock className="h-5 w-5 text-primary" />,
              s8: <Eye className="h-5 w-5 text-primary" />,
              s9: <Shield className="h-5 w-5 text-primary" />,
              s10: <Phone className="h-5 w-5 text-primary" />,
            };

            return (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-lg">
                    {iconMap[key]}
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground whitespace-pre-line">
                    {section.content}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mise à jour */}
        <Card className="mt-8">
          <CardContent className="pt-6">
            <div className="text-center text-sm text-muted-foreground">
              <p className="font-medium mb-2">{t('privacy.lastUpdate')}</p>
              <p>
                {t('privacy.updateNote')}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact pour questions */}
        <Card className="mt-8 bg-gradient-hero">
          <CardContent className="pt-6 text-center">
            <h3 className="text-xl font-bold text-white mb-4">
              {t('privacy.questionsTitle')}
            </h3>
            <p className="text-white/90 mb-6">
              {t('privacy.questionsDescription')}
            </p>
            <div className="space-x-4">
              <Button 
                onClick={() => onNavigate('contact')}
                className="bg-white text-primary hover:bg-white/90"
              >
                <Phone className="h-4 w-4 mr-2" />
                {t('privacy.contactUs')}
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                <Mail className="h-4 w-4 mr-2" />
                {t('privacy.dpoEmail')}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}