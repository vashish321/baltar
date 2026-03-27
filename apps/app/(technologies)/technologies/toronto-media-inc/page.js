import { buildMetadata } from '@/lib/seo';
import FrontendWebDesignPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Toronto Media Inc — Web Design Agency Toronto | Baltar Inc',
  description: 'Toronto Media Inc builds high-performance websites, landing pages, and web apps for Canadian businesses. Custom web design, SEO, AI audits, and ongoing site maintenance from Toronto.',
  path: '/technologies/toronto-media-inc',
  ogImage: 'https://baltar.ca/og-default.png',
});

export default function Page(props) {
  return <FrontendWebDesignPage {...props} />;
}
