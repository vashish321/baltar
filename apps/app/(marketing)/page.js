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
    heading: 'Build. Scale. Grow.',
    sub: 'From custom web experiences to seamless digital payments — Toronto Media Inc., Frontend Media Inc., and Transac are redefining how Canadian businesses connect with their customers.',
    imgSrc: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center',
    primaryCta: { label: 'Explore Technologies', href: '/technologies/toronto-media-inc' },
    secondaryCta: { label: 'Transac Inc.', href: '/finance/transac' },
    dark: true,
  },
  {
    label: 'Baltar Hospitality',
    heading: 'Crafted Moments, Exceptional Experiences.',
    sub: 'Savour & Sip brings luxury catering and event hospitality to Toronto and the GTA — where every detail is designed to delight.',
    imgSrc: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center top',
    primaryCta: { label: 'Visit Savour & Sip', href: '/hospitality/savour-and-sip' },
    secondaryCta: { label: 'Book Services', href: '/hospitality/savour-and-sip/pricing' },
    dark: true,
  },
  {
    label: 'Baltar Fashion',
    heading: 'Where Innovation Meets Elegance.',
    sub: 'VR is reimagining luxury eyewear and wearable fashion technology — for those who refuse to choose between art and function.',
    imgSrc: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1920&q=80',
    imgPosition: 'center 30%',
    primaryCta: { label: 'Discover VR', href: '/fashion/vr' },
    secondaryCta: { label: 'Explore Fashion', href: '/fashion/vr' },
    dark: true,
  },
  {
    label: 'Baltar Consultancy',
    heading: 'Strategic Vision. Global Reach.',
    sub: 'Baltar Consulting and Baltar International Consultancy deliver expert advisory services across engineering, infrastructure, and international markets.',
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
