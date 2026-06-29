import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Farhan Javed Awan — Social Media Manager & Marketer",
  description: "Creative and results-oriented Social Media Manager & Marketer with hands-on experience in Meta Ads management, content creation, and brand growth.",
  keywords: ["Social Media Manager", "Digital Marketing", "Meta Ads", "Content Creation", "Brand Development", "E-commerce Marketing"],
  authors: [{ name: "Farhan Javed Awan" }],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
  openGraph: {
    title: "Farhan Javed Awan — Portfolio",
    description: "Social Media Manager & Marketer Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Farhan Javed Awan — Portfolio",
    description: "Social Media Manager & Marketer Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
