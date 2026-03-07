import { buildMetadata } from '@/lib/seo';
import AboutComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'About — Coming Soon',
  description: 'The Baltar Inc About page is coming soon.',
  path: '/about-comingsoon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <AboutComingSoonPage {...props} />;
}
