import { buildMetadata } from '@/lib/seo';
import PrivacyPolicyPage from './PageContent';

export const metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'Privacy Policy for Baltar Inc.',
  path: '/privacy-policy',
  robots: 'noindex, nofollow',
});

export default function Page(props) {
  return <PrivacyPolicyPage {...props} />;
}
