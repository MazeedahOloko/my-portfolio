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
        {/* Fixed Header */}
        <header className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a192f]">
          {/* Left side - Name (desktop) / Hamburger (mobile) */}
          <div className="flex items-center">
            {/* Show name on desktop */}
            <span className="hidden md:block text-[#64ffda] font-bold text-xl">
              Mazeedah O
            </span>
            
            {/* Show hamburger on mobile */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>

          {/* Right side - Desktop nav (hidden on mobile) */}
          <nav className="hidden md:flex gap-6 text-[#e6f1ff]">
            <Link href="#about" className="hover:text-[#64ffda] transition-colors">About</Link>
            <Link href="#skills" className="hover:text-[#64ffda] transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-[#64ffda] transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-[#64ffda] transition-colors">Contact</Link>
          </nav>
        </header>

        {/* Main content */}
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}