import { buildMetadata } from '@/lib/seo';
import ZeitgeistMediaComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Zeitgeist Media — Coming Soon',
  description: 'Zeitgeist Media by Baltar Inc is launching soon.',
  path: '/zeitgeist-media-comingsoon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <ZeitgeistMediaComingSoonPage {...props} />;
}
