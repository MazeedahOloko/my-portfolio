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
    <html lang="en" className="bg-[#0a192f]">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0a192f]`}>
        {/* Header with forced overlap */}
        <header className="fixed w-full flex items-center p-6 z-50 bg-[#0a192f] border-none shadow-none outline-none">
          <div className="flex items-center gap-6 w-full">
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
            
            {/* Your name */}
            <div className="text-[#64ffda] font-bold text-xl">
              Mazeedah O
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6 ml-auto">
              <Link href="#about" className="text-[#e6f1ff] hover:text-[#64ffda]">About</Link>
              <Link href="#skills" className="text-[#e6f1ff] hover:text-[#64ffda]">Skills</Link>
              <Link href="#projects" className="text-[#e6f1ff] hover:text-[#64ffda]">Projects</Link>
              <Link href="#contact" className="text-[#e6f1ff] hover:text-[#64ffda]">Contact</Link>
            </nav>
          </div>
        </header>

        {/* Main Content with forced background overlap */}
        <main className="pt-20 bg-[#0a192f] relative -top-px">
          {children}
        </main>
      </body>
    </html>
  );
}