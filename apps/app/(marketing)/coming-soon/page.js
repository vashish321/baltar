import { buildMetadata } from '@/lib/seo';
import ComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Coming Soon',
  description: 'Something exciting is on the way from Baltar Inc.',
  path: '/coming-soon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <ComingSoonPage {...props} />;
}
