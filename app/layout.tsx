import type { Metadata } from "next";
import { Geist, Geist_Mono,Agdasima } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const agdasima=Agdasima({
  weight:"700",
  subsets:["latin"]
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Liteesh Reddy",
  description: "Welcome to Liteesh's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${agdasima}  h-full antialiased bg-white`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
