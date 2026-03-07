import { buildMetadata } from '@/lib/seo';
import TermsOfServicePage from './PageContent';

export const metadata = buildMetadata({
  title: 'Terms of Service',
  description: 'Terms of Service for Baltar Inc.',
  path: '/terms-of-service',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <TermsOfServicePage {...props} />;
}
