'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button - Only icon */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#64ffda] text-2xl p-1"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      
      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#112240] rounded-md shadow-xl z-50 border border-[#64ffda]/30">
          <Link href="#about" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10">About</Link>
          <Link href="#skills" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10">Skills</Link>
          <Link href="#projects" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10">Projects</Link>
          <Link href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10">Contact</Link>
        </div>
      )}
    </div>
  );
}