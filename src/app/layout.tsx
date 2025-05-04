import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md Zahid Hasan | Portfolio",
  description: "Personal portfolio website of Md Zahid Hasan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <header className="w-full px-8 py-4 flex items-center justify-between bg-gray-950/80 backdrop-blur-md shadow-lg fixed top-0 left-0 z-50">
            <div className="font-bold text-xl tracking-wide">Md Zahid Hasan</div>
            <nav className="space-x-6 text-sm uppercase font-semibold">
              <a href="#home" className="hover:text-yellow-400 transition">Home</a>
              <a href="#about" className="hover:text-yellow-400 transition">About</a>
              <a href="#resume" className="hover:text-yellow-400 transition">Resume</a>
              <a href="#portfolio" className="hover:text-yellow-400 transition">Portfolio</a>
              <a href="#blog" className="hover:text-yellow-400 transition">Blog</a>
              <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
            </nav>
            <div className="text-yellow-400 font-semibold text-sm hidden md:block">+8801740444059</div>
          </header>
          <div className="pt-24">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
