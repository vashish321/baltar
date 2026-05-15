import { buildMetadata } from '@/lib/seo';
import PageContent from './PageContent';

export const metadata = buildMetadata({
  title: 'Baltar International — Global Advisory & Cross-Border Consulting',
  description: 'Baltar International provides global market entry strategy, cross-border M&A advisory, regulatory navigation, and international trade consulting across 40+ markets.',
  path: '/consulting/baltar-international',
});

export default function BaltarInternationalPage() {
  return <PageContent />;
}
