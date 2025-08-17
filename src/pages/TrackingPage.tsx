import { TrackingSearch } from '@/components/TrackingSearch';
import { useTranslation } from '@/hooks/useTranslation';
import { PageLayout } from '@/components/PageLayout';

export function TrackingPage() {
  const { t, currentLanguage } = useTranslation();
  
  console.log('TrackingPage currentLanguage:', currentLanguage);
  console.log('TrackingPage tracking.title:', t('tracking.title'));

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

          {/* Help Section */}
          <div className="bg-gradient-dark rounded-xl p-6 shadow-premium animate-scale-in mx-4">
            <h3 className="font-semibold mb-3 text-white">{t('tracking.help')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium mb-1 text-white">{t('tracking.format')}</p>
                <p className="text-white/80">{t('tracking.formatExample')}</p>
              </div>
              <div>
                <p className="font-medium mb-1 text-white">{t('tracking.testCodes')}</p>
                <p className="text-white/80">{t('tracking.testCodesExample')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}