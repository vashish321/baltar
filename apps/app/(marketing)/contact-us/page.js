import { buildMetadata } from '@/lib/seo';
import ContactUsPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Contact Us',
  description: 'Get in touch with Baltar Inc.',
  path: '/contact-us',
});

export default function Page(props) {
  return <ContactUsPage {...props} />;
}
