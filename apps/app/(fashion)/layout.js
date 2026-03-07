// Le Mode Co and VR render their own brand headers/footers
// within their page components — no global chrome at the group level.
export default function FashionLayout({ children }) {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="w-full">{children}</main>
    </div>
  );
}
