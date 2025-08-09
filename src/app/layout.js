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
        {/* Header - Only appears ONCE at the top */}
        <header className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a192f]">
          {/* Left side - Only your name */}
          <div className="text-[#64ffda] font-bold text-xl">
            Mazeedah O
          </div>

          {/* Right side - Either desktop nav OR mobile menu (never both) */}
          <div className="flex items-center">
            {/* Desktop Navigation (hidden on mobile) */}
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-[#e6f1ff] hover:text-[#64ffda]">About</Link>
              <Link href="#skills" className="text-[#e6f1ff] hover:text-[#64ffda]">Skills</Link>
              <Link href="#projects" className="text-[#e6f1ff] hover:text-[#64ffda]">Projects</Link>
              <Link href="#contact" className="text-[#e6f1ff] hover:text-[#64ffda]">Contact</Link>
            </nav>

            {/* Mobile Menu Button (hidden on desktop) */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}