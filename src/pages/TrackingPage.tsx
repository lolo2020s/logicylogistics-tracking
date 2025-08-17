import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { TrackingSearch } from '@/components/TrackingSearch';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLayout } from '@/components/PageLayout';
import { useLanguageContext } from '@/context/LanguageContext';
import { extractLanguageFromPath } from '@/utils/routeUtils';

export function TrackingPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const { setLanguage } = useLanguageContext();

  useEffect(() => {
    // Extract and set language from URL
    const { language } = extractLanguageFromPath(location.pathname);
    setLanguage(language);
  }, [location.pathname, setLanguage]);

  return (
    <PageLayout currentPage="tracking">
      <div className="min-h-screen bg-gradient-surface">
        <div className="max-w-4xl mx-auto space-y-8 relative">
          <div className="bg-gradient-hero text-center py-16 px-4 -mx-4 animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              {t('tracking.title')}
            </h1>
            <p className="text-lg text-white/90">
              {t('tracking.description')}
            </p>
          </div>

          <div className="px-4">
            <TrackingSearch />
          </div>

        </div>
      </div>
    </PageLayout>
  );
}