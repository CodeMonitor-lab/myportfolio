import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { Navbar, Footer, Taskbar } from "@/components/layout";
import { Subscribe } from "@/components/common";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CodeMonitor-lab - Modern Cyberpunk Portfolio ",
  description: "Modern Next.js Portfolio",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/favicon_2.ico",
    shortcut: "/favicon_2.ico",
    apple: "/favicon_2.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
          min-h-screen
          flex
          flex-col
          bg-white text-slate-900
          dark:bg-slate-950 dark:text-slate-100
          transition-colors duration-300
        `}
      >
        {/* Analytics */}
        <Analytics />

        {/* Theme Provider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Navbar */}
          <Navbar />

          {/* Main Content */}
          <main className="flex-1 scroll-pt-24">
            {children}
          </main>

          {/* Footer */}
          <Footer />

          {/* Taskbar */}
          <div className="relative">

          <Taskbar />
          <Subscribe />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}