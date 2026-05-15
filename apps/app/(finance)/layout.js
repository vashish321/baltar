import MetaHeader from '@/components/MetaStyleComponents/MetaHeader';

export default function FinanceLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-white text-black font-sans min-h-screen flex flex-col">
      <MetaHeader light />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
