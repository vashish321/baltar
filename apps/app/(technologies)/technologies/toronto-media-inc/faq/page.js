import { buildMetadata } from '@/lib/seo';
import FAQPage from './PageContent';

export const metadata = buildMetadata({
  title: 'FAQ — Toronto Media Inc',
  description: 'Frequently asked questions about Toronto Media Inc services and processes.',
  path: '/technologies/toronto-media-inc/faq',
});

export default function Page(props) {
  return <FAQPage {...props} />;
}
