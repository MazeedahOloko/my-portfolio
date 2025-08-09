import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileMenu from './components/MobileMenu'; // Add this import
import Link from 'next/link'; // Add this import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mazeedah's Portfolio", // Changed from default
  description: "Professional portfolio", // Changed from default
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Added header with mobile menu */}
        <header className="fixed w-full flex justify-between items-center p-6 z-50 bg-[#0a192f]">
          {/* Left side - Hamburger (mobile only) */}
         <div className="md:hidden">
         <MobileMenu />
         </div>
          
          {/* Right side - Desktop nav (hidden on mobile) */}
            <nav className="hidden md:flex gap-6">
            <Link href="#about">About</Link>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#contact">Contact</Link>
            </nav>
            </header>

        {/* Main content */}
        <main className="pt-20"> {/* Added padding to prevent content hiding under fixed header */}
          {children}
        </main>
      </body>
    </html>
  );
}