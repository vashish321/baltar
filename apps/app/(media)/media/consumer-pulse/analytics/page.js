import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import AnalyticsDashboard from '@/components/ConsumerPulseComponent/AnalyticsComponent/AnalyticsDashboard';
import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Analytics — Consumer Pulse',
  description: 'Deep market analytics and consumer trend insights from Consumer Pulse.',
  path: '/media/consumer-pulse/analytics',
  robots: 'noindex, nofollow',
});


export default function AnalyticsPage() {
  return (
    <>
      <HeaderComponent />
      <AnalyticsDashboard />
      <Footer />
    </>
  );
}
