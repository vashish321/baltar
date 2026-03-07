import LeModeCoPageComingSoon from '@/components/LeModeCoComponent/ComingSoonComponent/ComingSoon';
import FooterComponent from '@/components/LeModeCoComponent/FooterComponent/Footer';
import HeaderComponent from '@/components/LeModeCoComponent/HeaderComponent/Header';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Le Mode Co — Coming Soon',
  description: 'Le Mode Co is launching soon.',
  path: '/fashion/le-mode-co/coming-soon',
  robots: 'noindex, nofollow',
});



export default function LeModeCoPage() {
  return (
    <>
    <HeaderComponent/>
      <LeModeCoPageComingSoon />
      <FooterComponent/>
        </>
  );
}

