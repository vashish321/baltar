import ContactUs from '@/components/LeModeCoComponent/ContactUsComponent/ContactUs';
import HeaderComponent from '@/components/LeModeCoComponent/HeaderComponent/Header';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact — Le Mode Co',
  description: 'Get in touch with Le Mode Co for inquiries, collaborations, and press.',
  path: '/fashion/le-mode-co/contact',
});



export default function LeModeCoPage() {
  return (
    <>
    <HeaderComponent/>
    <ContactUs/>
        </>
  );
}

