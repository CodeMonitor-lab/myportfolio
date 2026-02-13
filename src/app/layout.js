import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/custom/Header";
import Footer from "@/components/custom/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Modern Next.js Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"suppressHydrationWarning >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />

        <main className="bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
