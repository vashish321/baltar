// Consumer Pulse renders its own brand header within page components —
// no global chrome at the group level.
export default function MediaLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="w-full">{children}</main>
    </div>
  );
}
