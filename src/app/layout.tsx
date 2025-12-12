import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Dilmurod Yusupov | AI Specialist & Digital Producer",
  description: "Portfolio of Dilmurod Yusupov - AI Specialist, Prompt Engineer, and Digital Media Producer.",
  keywords: ["AI", "Prompt Engineer", "Digital Media", "Uzbekistan", "Portfolio"],
  openGraph: {
    title: "Dilmurod Yusupov | AI Specialist",
    description: "Professional portfolio showcasing AI and Digital Media projects.",
    type: "website",
    locale: "uz_UZ",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
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
