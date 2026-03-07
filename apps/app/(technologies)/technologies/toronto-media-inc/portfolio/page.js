import { buildMetadata } from '@/lib/seo';
import PortfolioPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Portfolio — Toronto Media Inc',
  description: 'Browse our portfolio of web design and digital projects.',
  path: '/technologies/toronto-media-inc/portfolio',
});

export default function Page(props) {
  return <PortfolioPage {...props} />;
}
