import { buildMetadata } from '@/lib/seo';
import MenuPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Menu — Savour & Sip',
  description: 'Browse the Savour & Sip curated food and beverage menus.',
  path: '/hospitality/savour-and-sip/menu',
});

export default function Page(props) {
  return <MenuPage {...props} />;
}
