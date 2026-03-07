import { buildMetadata } from '@/lib/seo';
import CareersComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Careers — Coming Soon',
  description: 'Exciting career opportunities at Baltar Inc are coming soon.',
  path: '/careers-comingsoon',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <CareersComingSoonPage {...props} />;
}
