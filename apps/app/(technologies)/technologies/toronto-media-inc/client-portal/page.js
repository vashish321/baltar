import { buildMetadata } from '@/lib/seo';
import ClientPortalPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Client Portal — Toronto Media Inc',
  description: 'Access your project dashboard, reports, and invoices.',
  path: '/technologies/toronto-media-inc/client-portal',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <ClientPortalPage {...props} />;
}
