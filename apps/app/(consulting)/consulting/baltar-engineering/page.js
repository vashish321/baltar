import { buildMetadata } from '@/lib/seo';
import ArchonEngineeringComingSoonPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Baltar Engineering — Construction & Engineering Consulting',
  description: 'Expert construction project management and engineering consulting services across Canada.',
  path: '/consulting/baltar-engineering',
});

export default function Page(props) {
  return <ArchonEngineeringComingSoonPage {...props} />;
}
