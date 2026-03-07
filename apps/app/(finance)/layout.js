import TransacHeader from '@/components/Transac/HeaderComponent/TransacHeader';

export default function FinanceLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen">
      <TransacHeader />
      <main className="w-full">{children}</main>
    </div>
  );
}
