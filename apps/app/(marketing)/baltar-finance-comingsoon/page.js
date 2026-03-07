import { buildMetadata } from '@/lib/seo';
import BaltarFinanceComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Baltar Finance — Coming Soon',
  description: 'Baltar Finance is launching soon.',
  path: '/baltar-finance-comingsoon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <BaltarFinanceComingSoonPage {...props} />;
}
