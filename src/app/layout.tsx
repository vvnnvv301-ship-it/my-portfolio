import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import StructuredData from "@/components/structured-data";
import { SkipToContent } from "@/components/skip-to-content";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dilmurod Yusupov | AI Specialist & Digital Producer",
  description: "Portfolio of Dilmurod Yusupov - AI Specialist, Prompt Engineer, and Digital Media Producer specializing in AgroTech startups and AI solutions.",
  keywords: ["AI Specialist", "Prompt Engineering", "Digital Media Producer", "AgroTech", "Generative AI", "Uzbekistan", "Machine Learning", "AI Bots", "Startup", "Agriculture Technology"],
  authors: [{ name: "Dilmurod Yusupov" }],
  creator: "Dilmurod Yusupov",
  publisher: "Dilmurod Yusupov",
  metadataBase: new URL('https://dilmurod-yusupov.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'uz': '/uz',
      'en': '/en',
      'ru': '/ru',
    },
  },
  openGraph: {
    title: "Dilmurod Yusupov | AI Specialist & Digital Producer",
    description: "Professional portfolio showcasing AI expertise, Prompt Engineering skills, and AgroTech innovation projects.",
    type: "website",
    locale: "uz_UZ",
    url: 'https://dilmurod-yusupov.vercel.app',
    siteName: 'Dilmurod Yusupov Portfolio',
    images: [
      {
        url: '/assets/images/profile-photo-new.png',
        width: 1200,
        height: 630,
        alt: 'Dilmurod Yusupov - AI Specialist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dilmurod Yusupov | AI Specialist & Digital Producer",
    description: "AI Specialist, Prompt Engineer, and Digital Media Producer specializing in AgroTech startups.",
    images: ['/assets/images/profile-photo-new.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SkipToContent />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
