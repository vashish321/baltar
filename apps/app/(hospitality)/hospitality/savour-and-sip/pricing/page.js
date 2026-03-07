import { buildMetadata } from '@/lib/seo';
import PricingPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Pricing — Savour & Sip',
  description: 'View transparent pricing for catering and hospitality packages.',
  path: '/hospitality/savour-and-sip/pricing',
});

export default function Page(props) {
  return <PricingPage {...props} />;
}
