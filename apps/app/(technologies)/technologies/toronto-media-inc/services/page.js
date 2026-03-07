import { buildMetadata } from '@/lib/seo';
import ServicesPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Services — Toronto Media Inc',
  description: 'Explore our web design, development, AI audit, and digital consulting services.',
  path: '/technologies/toronto-media-inc/services',
});

export default function Page(props) {
  return <ServicesPage {...props} />;
}
