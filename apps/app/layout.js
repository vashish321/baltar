import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata = {
  title: {
    default: "Baltar Inc",
    template: "%s | Baltar Inc",
  },
  description:
    "A modern multi-vertical ecosystem — technology, hospitality, consulting, finance, fashion, and media.",
  metadataBase: new URL("https://baltar.ca"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body style={{ overflowX: "hidden", width: "100%" }}>
        {children}
      </body>
    </html>
  );
}
