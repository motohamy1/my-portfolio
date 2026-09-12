import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Mahmoud Eltohamy — Full-Stack Web & Mobile Developer",
    template: "%s — Mahmoud Eltohamy",
  },
  description:
    "Portfolio of Mahmoud Eltohamy: full-stack web and mobile development with React, Next.js, Node.js, and React Native. Selected projects, services, and contact.",
  applicationName: "Hippocamp",
  authors: [{ name: "Mahmoud Eltohamy", url: "https://github.com/motohamy1" }],
  keywords: [
    "Mahmoud Eltohamy",
    "full-stack developer",
    "frontend developer",
    "React",
    "Next.js",
    "React Native",
    "portfolio",
  ],
  openGraph: {
    type: "website",
    title: "Mahmoud Eltohamy — Full-Stack Web & Mobile Developer",
    description:
      "A memory vault of shipped work: web apps, mobile apps, and interfaces built with React, Next.js, and React Native.",
    siteName: "Mahmoud Eltohamy — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Mahmoud Eltohamy — Full-Stack Web & Mobile Developer",
    description:
      "Portfolio of Mahmoud Eltohamy: full-stack web and mobile development.",
  },
  icons: {
    icon: "/images/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#030306",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: browser extensions (Trancy, quote tools) and the
    // impeccable live picker mutate attributes on <html> before hydration.
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      {/* impeccable-live-start */}
<script src="http://localhost:8400/live.js"></script>
{/* impeccable-live-end */}
</body>
    </html>
  );
}
