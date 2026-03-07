import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';
import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import NewsSection from '@/components/ConsumerPulseComponent/NewsComponent/NewsSection';
import SidebarComponent from '@/components/ConsumerPulseComponent/SideBarComponent/SidebarComponent';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Consumer Pulse — Real-Time News & Market Intelligence',
  description: 'Consumer Pulse delivers real-time news aggregation, live polling, and market intelligence for informed decision-making.',
  path: '/media/consumer-pulse',
});


export default function TransacPage() {
  return (
    <>
      <HeaderComponent />
      <SidebarComponent />
      <NewsSection/>
      <Footer/>
    </>
  );
}
