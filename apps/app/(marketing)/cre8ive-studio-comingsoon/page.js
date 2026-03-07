import { buildMetadata } from '@/lib/seo';
import Cre8iveStudioComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Cre8ive Studio — Coming Soon',
  description: 'Baltar Cre8ive Studio is launching soon.',
  path: '/cre8ive-studio-comingsoon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <Cre8iveStudioComingSoonPage {...props} />;
}
