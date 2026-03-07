import { buildMetadata } from '@/lib/seo';
import AboutPage from './PageContent';

export const metadata = buildMetadata({
  title: 'About — Savour & Sip',
  description: 'Learn about the Savour & Sip team, our story, and our commitment to hospitality excellence.',
  path: '/hospitality/savour-and-sip/about',
});

export default function Page(props) {
  return <AboutPage {...props} />;
}
