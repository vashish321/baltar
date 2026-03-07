import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import PollingSection from '@/components/ConsumerPulseComponent/PollingComponent/PollingSection';
import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Live Polling — Consumer Pulse',
  description: 'Participate in live polls and see real-time consumer sentiment on Consumer Pulse.',
  path: '/media/consumer-pulse/polling',
});


export default function PollingPage() {
  return (
    <>
      <HeaderComponent />
      <PollingSection />
      <Footer />
    </>
  );
}
