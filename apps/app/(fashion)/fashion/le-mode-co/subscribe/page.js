import { buildMetadata } from '@/lib/seo';
import SubscribePage from './PageContent';

export const metadata = buildMetadata({
  title: 'Subscribe — Le Mode Co',
  description: 'Subscribe to Le Mode Co for exclusive collections, early access, and fashion insights.',
  path: '/fashion/le-mode-co/subscribe',
});

export default function Page(props) {
  return <SubscribePage {...props} />;
}
