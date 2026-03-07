import Navbar from '@/components/NavBarComponent/Navbar';
import Footer from '@/components/FooterComponent/Footer';

export default function ConsultingLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">{children}</main>
      <Footer />
    </div>
  );
}
