import Footer from '@/components/LeModeCoComponent/FooterComponent/Footer';  
import Header from '@/components/LeModeCoComponent/HeaderComponent/Header';  
import HeroSection from '@/components/LeModeCoComponent/HeroSectionComponent/HeroSection';  
import InfluencerPartnerships from '@/components/LeModeCoComponent/InfluencerPartnershipComponent/InfluencerPartnerships';
import LookbookSection from '@/components/LeModeCoComponent/LookBookComponent/LookBookSection';
import SubsriptionSection from '@/components/LeModeCoComponent/SubscriptionComponent/SubscriptionBoxes';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Le Mode Co — Premium Contemporary Fashion | Canada',
  description: 'Le Mode Co is a premium Canadian fashion label offering curated looks, exclusive subscription boxes, and influencer-driven style. Shop the lookbook and subscribe to the Le Mode Co experience.',
  path: '/fashion/le-mode-co',
});




export default function HomePage() {  
  return (  
    <div>  
      <Header />  
      <HeroSection/>
      <LookbookSection/>
      <SubsriptionSection/>
      <InfluencerPartnerships/>
      <Footer/>
    </div>  
  );  
}  