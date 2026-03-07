import { buildMetadata } from '@/lib/seo';
import TransacComingSoon from './PageContent';

export const metadata = buildMetadata({
  title: 'Transac — Coming Soon',
  description: 'Transac is launching soon.',
  path: '/finance/transac/coming-soon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <TransacComingSoon {...props} />;
}
