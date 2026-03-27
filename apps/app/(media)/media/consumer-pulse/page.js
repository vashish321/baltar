import Footer from '@/components/ConsumerPulseComponent/FooterComponent/Footer';
import HeaderComponent from '@/components/ConsumerPulseComponent/HeaderComponent/HeaderComponent';
import NewsSection from '@/components/ConsumerPulseComponent/NewsComponent/NewsSection';
import SidebarComponent from '@/components/ConsumerPulseComponent/SideBarComponent/SidebarComponent';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Consumer Pulse — Live Global News, Polls & Market Insights | Baltar Inc',
  description: 'Consumer Pulse aggregates breaking news from global sources in real time, with live polling and audience sentiment tools. Stay ahead of the market with data-driven insights.',
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
