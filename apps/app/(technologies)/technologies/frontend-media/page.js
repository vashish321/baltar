import { buildMetadata } from '@/lib/seo';
import FrontendMediaPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Frontend Media Inc — Modern Web Development | Baltar Inc',
  description: 'Frontend Media Inc delivers cutting-edge React, Next.js, and modern web applications for startups and enterprises. Performance-first development from Toronto.',
  path: '/technologies/frontend-media',
  ogImage: 'https://baltar.ca/og-default.png',
});

export default function Page(props) {
  return <FrontendMediaPage {...props} />;
}
