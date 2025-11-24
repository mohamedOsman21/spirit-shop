import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const isDev = process.env.NODE_ENV === "development"

export const ORIGIN_URL = isDev? "http://localhost:3000": 'https://spirit-shop.vercel.app';

export const metadata: Metadata = {
  title: "spirit shop",
  description: "open source spirit shop - discover magical potions brewed from the powers of popular open-source tools",
  metadataBase: new URL(ORIGIN_URL),
  alternates: {
    canonical: ORIGIN_URL,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >

        <div className="container mx-auto px-4 py-8 capitalize overflow-hidden">
          <Navigation />
          <main className="min-h-screen p-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
