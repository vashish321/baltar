import { buildMetadata } from '@/lib/seo';
import PageContent from './PageContent';

export const metadata = buildMetadata({
  title: 'Baltar Consulting — Structural & Civil Engineering | Canada',
  description: 'Baltar Consulting provides structural engineering, construction project management, and civil design consulting for commercial and residential projects across Canada.',
  path: '/consulting/baltar-engineering',
});

export default function Page() {
  return <PageContent />;
}
