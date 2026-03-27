import { buildMetadata } from '@/lib/seo';
import ContactUsPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Contact Baltar Inc — Get in Touch | Canada',
  description: 'Reach out to Baltar Inc for partnerships, service inquiries, media requests, or general information. We operate across technology, hospitality, engineering, finance, fashion, and media.',
  path: '/contact-us',
});

export default function Page(props) {
  return <ContactUsPage {...props} />;
}
