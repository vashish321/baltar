import { buildMetadata } from '@/lib/seo';
import ComingSoon from './PageContent';

export const metadata = buildMetadata({
  title: 'Toronto Media Inc — Coming Soon',
  description: 'Toronto Media Inc is launching soon.',
  path: '/technologies/toronto-media-inc/coming-soon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <ComingSoon {...props} />;
}
