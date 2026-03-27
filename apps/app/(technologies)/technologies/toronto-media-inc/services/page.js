import { buildMetadata } from '@/lib/seo';
import ServicesPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Web Design & Development Services — Toronto Media Inc',
  description: 'Full-stack web design, Next.js development, SEO optimization, AI-powered site audits, and monthly maintenance plans. Toronto Media Inc serves businesses across Canada.',
  path: '/technologies/toronto-media-inc/services',
});

export default function Page(props) {
  return <ServicesPage {...props} />;
}
