'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Hamburger Button - Only icon (no name) */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-[#64ffda] text-2xl p-1"
        aria-label="Toggle menu"
      >
        ☰
      </button>
      
      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-[#112240] rounded-md shadow-xl z-50 border border-[#64ffda]/30 backdrop-blur-sm">
          {/* Menu Header with Name */}
          <div className="px-4 py-3 border-b border-[#64ffda]/20">
            <span className="font-bold text-[#64ffda]">Mazeedah O</span>
          </div>
          
          {/* Menu Items */}
          <Link 
            href="#about" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-all"
          >
            About
          </Link>
          <Link 
            href="#skills" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-all"
          >
            Skills
          </Link>
          <Link 
            href="#projects" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-all"
          >
            Projects
          </Link>
          <Link 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block px-4 py-3 text-[#e6f1ff] hover:bg-[#64ffda]/10 hover:text-[#64ffda] transition-all rounded-b-md"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}