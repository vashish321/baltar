import TransacHero from '@/components/Transac/TransacHero';
import TransacValueProps from '@/components/Transac/TransacValueProps/TransacValueProps';
import ProductDemo from '@/components/Transac/ProductDemo/ProductDemo';
import PricingTable from '@/components/Transac/PricingTable/PricingTable';
import Testimonials from '@/components/Transac/Testimonials/Testimonials';
import AppDownload from '@/components/Transac/AppDownload/AppDownload';
import Footer from '@/components/Transac/FooterComponent/Footer';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Transac — Modern Payment & Wealth Management',
  description: 'Transac by Baltar Inc is a modern fintech platform for seamless payments, wealth management, and financial planning.',
  path: '/finance/transac',
});



export default function TransacPage() {
  return (
    <>
      <TransacHero />
      <TransacValueProps />
      <ProductDemo />
      <PricingTable />
      <Testimonials/>
      <AppDownload/>
      <Footer/>


      {/* continue with other sections */}
    </>
  );
}
