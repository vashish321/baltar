import { buildMetadata } from '@/lib/seo';
import CookiesPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Cookie Policy',
  description: 'Cookie Policy for Baltar Inc.',
  path: '/cookies',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <CookiesPage {...props} />;
}
