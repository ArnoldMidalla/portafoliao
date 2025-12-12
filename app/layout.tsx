import type { Metadata } from "next";
import { DM_Sans, Geist, Geist_Mono, Grand_Hotel } from "next/font/google";
import "./globals.css";
import Nav from "./components/navbar";
import Cursor from "./components/cursor";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
})

const grand = Grand_Hotel({
  variable: "--font-grand-hotel",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Arnold's Portfolio",
  description: "Hire this guy. He's really good",
  icons: {
    icon: "/thumb-v2.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dmSans.variable} ${grand.variable} antialiased select-none`}
      >
        <Nav/>
        <Cursor/>
        <Toaster richColors/>
        {children}
      </body>
    </html>
  );
}
