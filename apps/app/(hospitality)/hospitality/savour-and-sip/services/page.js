import { buildMetadata } from '@/lib/seo';
import ServicesPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Services — Savour & Sip',
  description: 'Explore our catering, bar service, and event hospitality offerings.',
  path: '/hospitality/savour-and-sip/services',
});

export default function Page(props) {
  return <ServicesPage {...props} />;
}
