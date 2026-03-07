import VRSection from '@/components/VRComponent/HeroSectionComponent/VRCmponent';
import Footer from '@/components/VRComponent/FooterComponent/FooterComponent';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'VR — Luxury Eyewear & Fashion Technology',
  description: 'VR by Baltar Inc merges luxury eyewear design with immersive fashion technology experiences.',
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
