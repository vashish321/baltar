import MetaHeader from '@/components/MetaStyleComponents/MetaHeader';

export default function MarketingLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden bg-black text-white font-sans min-h-screen flex flex-col">
      <MetaHeader />
      <main className="flex-1 w-full">{children}</main>
    </div>
  );
}
