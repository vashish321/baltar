export default function AuthLayout({ children }) {
  return (
    <div className="w-full min-h-screen bg-black text-white flex items-center justify-center">
      <main className="w-full">{children}</main>
    </div>
  );
}
