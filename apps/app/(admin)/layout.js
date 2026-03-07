export default function AdminLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-gray-950 text-white">
      <main className="w-full">{children}</main>
    </div>
  );
}
