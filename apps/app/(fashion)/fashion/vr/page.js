import VRSection from '@/components/VRComponent/HeroSectionComponent/VRCmponent';
import Footer from '@/components/VRComponent/FooterComponent/FooterComponent';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'VR — Luxury Eyewear & Wearable Fashion Tech | Baltar Inc',
  description: 'VR by Baltar Inc is a luxury eyewear and fashion technology label that fuses bespoke craftsmanship with immersive AR/VR experiences. Explore exclusive collections and wearable tech.',
  path: '/fashion/vr',
});



export default function VRPage() {
  return (
    <>
      <VRSection />
      <Footer/>
         </>
  );
}
