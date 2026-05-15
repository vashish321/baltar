import HeroSection from '@/components/HeroSection/HeroSection';
import DivisionSection from '@/components/BaltarSections/DivisionSection';
import MetaFooter from '@/components/MetaStyleComponents/MetaFooter';

export const metadata = {
  title: 'Baltar Inc — One Company. Limitless Services. | Canada',
  description:
    'Baltar Inc is a Canadian multi-division firm operating across technology, hospitality, fashion, and consultancy. One integrated network serving startups, enterprises, and professionals.',
  keywords: 'Baltar Inc, Canadian business, web design Toronto, hospitality Canada, fintech Canada, fashion tech, consulting Canada, multi-division firm',
  alternates: { canonical: 'https://baltar.ca' },
  openGraph: {
    title: 'Baltar Inc — One Company. Limitless Services.',
    description:
      'A Canadian multi-division firm operating across technology, hospitality, fashion, and consultancy.',
    url: 'https://baltar.ca',
    siteName: 'Baltar Inc',
    type: 'website',
    images: [{ url: 'https://baltar.ca/og-default.png', width: 1200, height: 630, alt: 'Baltar Inc' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Baltar Inc — One Company. Limitless Services.',
    description: 'A Canadian multi-division firm operating across technology, hospitality, fashion, and consultancy.',
  },
};

const divisions = [
  {
    label: 'Baltar Technologies',
    heading: 'Built to perform. Designed to convert.',
    sub: 'Toronto Media Inc., Frontend Media Inc., and Transac give Canadian businesses the digital infrastructure to compete — fast websites, clean code, and payments that actually work.',
    imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center',
    primaryCta: { label: 'See Our Work', href: '/technologies/toronto-media-inc' },
    secondaryCta: { label: 'Transac Payments', href: '/finance/transac' },
    dark: true,
  },
  {
    label: 'Baltar Hospitality',
    heading: 'The kind of event people talk about afterward.',
    sub: 'Savour & Sip handles the food, the bar, and everything in between — so you can actually be present at your own event. Serving Toronto and the GTA.',
    imgSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center top',
    primaryCta: { label: 'Savour & Sip', href: '/hospitality/savour-and-sip' },
    secondaryCta: { label: 'Enquire', href: '/hospitality/savour-and-sip' },
    dark: true,
  },
  {
    label: 'Baltar Fashion',
    heading: 'Eyewear for people who look closely at everything.',
    sub: 'VR is a luxury eyewear and wearable tech label. Each frame is engineered with precision and finished by hand — because the details are the product.',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center 30%',
    primaryCta: { label: 'Explore VR', href: '/fashion/vr' },
    secondaryCta: { label: 'View Collections', href: '/fashion/vr' },
    dark: true,
  },
  {
    label: 'Baltar Consultancy',
    heading: 'Clear thinking for complex problems.',
    sub: 'Baltar Consulting handles structural engineering and project management. Baltar International advises on cross-border markets, M&A, and global operations.',
    imgSrc: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center 40%',
    primaryCta: { label: 'Baltar Consulting', href: '/consulting/baltar-engineering' },
    secondaryCta: { label: 'Baltar International', href: '/consulting/baltar-international' },
    dark: true,
  },
];

export default function Home() {
  return (
    <>
      <HeroSection />
      <div id="divisions">
        {divisions.map((div) => (
          <DivisionSection key={div.label} {...div} />
        ))}
      </div>
      <MetaFooter />
    </>
  );
}
