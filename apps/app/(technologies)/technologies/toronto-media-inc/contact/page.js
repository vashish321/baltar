import ContactUs from '@/components/FrontendWebDesign/ContactUsComponent/ContactUs';

import { buildMetadata } from '@/lib/seo';

export const metadata = buildMetadata({
  title: 'Contact — Toronto Media Inc',
  description: 'Get in touch with the Toronto Media Inc team.',
  path: '/technologies/toronto-media-inc/contact',
});


export default function ContactPage() {
  return <ContactUs />;
}
