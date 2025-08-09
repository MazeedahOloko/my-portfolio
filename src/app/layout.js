import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileMenu from './components/MobileMenu';
import Link from 'next/link';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mazeedah's Portfolio",
  description: "Professional portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a192f]">
          {/* Left side - Only shows name (always visible) */}
          <div className="text-[#64ffda] font-bold text-xl">
            Mazeedah O
          </div>

          {/* Right side - Desktop nav OR mobile menu (never both) */}
          <div className="flex items-center">
            {/* Desktop Navigation (hidden on mobile) */}
            <nav className="hidden md:flex gap-6 mr-4">
              <Link href="#about" className="text-[#e6f1ff] hover:text-[#64ffda] transition-colors">About</Link>
              <Link href="#skills" className="text-[#e6f1ff] hover:text-[#64ffda] transition-colors">Skills</Link>
              <Link href="#projects" className="text-[#e6f1ff] hover:text-[#64ffda] transition-colors">Projects</Link>
              <Link href="#contact" className="text-[#e6f1ff] hover:text-[#64ffda] transition-colors">Contact</Link>
            </nav>

            {/* Mobile Menu Button (hidden on desktop) */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>

        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}