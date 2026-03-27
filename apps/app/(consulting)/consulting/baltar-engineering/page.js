import { buildMetadata } from '@/lib/seo';
import ArchonEngineeringComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Archon Engineering — Structural & Civil Engineering Consulting | Canada',
  description: 'Archon Engineering by Baltar Inc provides structural engineering, construction project management, and civil design consulting for commercial and residential projects across Canada.',
  path: '/consulting/baltar-engineering',
});

export default function Page(props) {
  return <ArchonEngineeringComingSoonPage {...props} />;
}
