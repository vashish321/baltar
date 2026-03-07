import { buildMetadata } from '@/lib/seo';
import AboutPage from './PageContent';

export const metadata = buildMetadata({
  title: 'About — Toronto Media Inc',
  description: 'Learn about Toronto Media Inc, our mission, and our team of design and technology professionals.',
  path: '/technologies/toronto-media-inc/about',
});

export default function Page(props) {
  return <AboutPage {...props} />;
}
