import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import { PT_Sans } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // normal + bold
});

export const metadata: Metadata = {
  title: "Voxi AI",
  description: "Voice-first AI agents website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ptSans.className} antialiased bg-white text-gray-900`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
