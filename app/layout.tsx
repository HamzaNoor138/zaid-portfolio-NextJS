import type { Metadata } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const description =
  "Full-stack developer crafting performant, elegant web applications. Available for freelance and contract work.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Zaid | Portfolio",
    template: "%s · Zaid",
  },
  description,
  keywords: ["Zaid", "Full Stack Developer", "Next.js Developer", "React Developer", "Freelance Web Development"],
  authors: [{ name: "Zaid" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Zaid",
    title: "Zaid | Portfolio",
    description,
    images: [{ url: "/z.jpg", width: 1062, height: 1008, alt: "Zaid" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaid | Portfolio",
    description,
    images: ["/z.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <head>
        {/* Preload the profile photo so the browser fetches it immediately */}
        <link rel="preload" as="image" href="/z.jpg" />
      </head>
      <body className="bg-[#0a0a0a] text-[#ededed] antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
