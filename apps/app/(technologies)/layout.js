import FrontendHeader from '@/components/FrontendWebDesign/HeaderComponent/HeaderComponent';

export default function TechnologiesLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <FrontendHeader />
      <main className="w-full">{children}</main>
    </div>
  );
}
