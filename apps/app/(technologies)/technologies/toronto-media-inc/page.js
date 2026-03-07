import { buildMetadata } from '@/lib/seo';
import FrontendWebDesignPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Toronto Media Inc — Web Design & Digital Solutions',
  description: 'Premium frontend web design, AI audits, SEO reporting, and subscription maintenance for modern businesses.',
  path: '/technologies/toronto-media-inc',
});

export default function Page(props) {
  return <FrontendWebDesignPage {...props} />;
}
