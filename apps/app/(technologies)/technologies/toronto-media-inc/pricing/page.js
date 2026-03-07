import { buildMetadata } from '@/lib/seo';
import PricingPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Pricing — Toronto Media Inc',
  description: 'Transparent pricing for web design, maintenance, and SEO packages.',
  path: '/technologies/toronto-media-inc/pricing',
});

export default function Page(props) {
  return <PricingPage {...props} />;
}
