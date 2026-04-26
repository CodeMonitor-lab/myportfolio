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
  title: {
    default: "CodeMonitor Lab - Cyberpunk Developer Portfolio",
    template: "%s | CodeMonitor Lab",
  },

  description:
    "CodeMonitor Lab is a modern developer portfolio and cyberpunk-inspired platform built with Next.js. Showcasing projects, UI experiments, and performance-focused web development.",

  keywords: [
    "Next.js portfolio",
    "developer portfolio",
    "cyberpunk UI",
    "React developer",
    "CodeMonitor",
    "web performance",
  ],

  metadataBase: new URL("https://codemonitor.online"),

  openGraph: {
    title: "CodeMonitor Lab - Cyberpunk Developer Portfolio",
    description:
      "Modern Next.js developer portfolio showcasing projects and UI experiments.",
    url: "https://codemonitor.online",
    siteName: "CodeMonitor Lab",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://codemonitor.online",
  },

  icons: {
    icon: "/favicon_2.ico",
    shortcut: "/favicon_2.ico",
    apple: "/favicon_2.ico",
  },

  manifest: "/manifest.webmanifest",

  verification: {
    google: "lTAu0Zu1DtcB2oaP3pASmoDlHXtUE5xXbIp8pu0pcDQ",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
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

          {/* UI Components */}
          <div className="relative">
            <Taskbar />
            <Subscribe />
          </div>

          {/* Analytics (placed at end for better performance) */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}