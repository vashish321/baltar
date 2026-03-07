// Savour & Sip and other hospitality brands render their own brand headers/footers
// within their page components — no global chrome injected at the group level.
export default function HospitalityLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="w-full">{children}</main>
    </div>
  );
}
