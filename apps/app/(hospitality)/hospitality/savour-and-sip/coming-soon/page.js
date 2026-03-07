import { buildMetadata } from '@/lib/seo';
import ComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Savour & Sip — Coming Soon',
  description: 'Savour & Sip is launching soon.',
  path: '/hospitality/savour-and-sip/coming-soon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <ComingSoonPage {...props} />;
}
