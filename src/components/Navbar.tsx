'use client';

import Link from 'next/link';
import NavButton from './ui/navButton';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onMenuStateChange?: (isOpen: boolean) => void;
}

const Navbar = ({ onMenuStateChange }: NavbarProps) => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Notify parent component if needed when mobile menu opens/closes
  useEffect(() => {
    if (onMenuStateChange) {
      onMenuStateChange(isMobileMenuOpen);
    }
  }, [isMobileMenuOpen, onMenuStateChange]);

  // Ensure activeSection is not reset to empty string when page loads
  useEffect(() => {
    if (activeSection === '') {
      setActiveSection('home');
    }
  }, [activeSection]);

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'services', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id !== '') {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0
      }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  const navWrapperClass = 'fixed top-4 md:top-8 left-1/2 -translate-x-1/2 z-50 w-[95%] md:w-[85%] max-w-5xl transition-all duration-300';
  const navInnerClass = 'bg-darker/60 md:bg-transparent backdrop-blur-xl rounded-3xl md:rounded-full shadow-lg border border-cream/20 px-4 py-3 md:px-1 md:py-1 transition-all duration-300';

  return (
    <header className={navWrapperClass}>
      <nav className={navInnerClass}>
        {/* Mobile Header View */}
        <div className="flex items-center justify-between md:hidden">
            <Link href="#home" className="shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
                <h1 className="font-cursive text-2xl text-rust font-bold pl-2">Tohamy</h1>
            </Link>
            <button 
                className="text-cream p-2 focus:outline-none transition-transform hover:scale-110 active:scale-95"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
            </button>
        </div>

        {/* Mobile Dropdown Options */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-[300px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col gap-1 pb-2">
                <Link href="#services" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavButton name="Services" isActive={activeSection === 'services'} />
                </Link>
                <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavButton name="Skills" isActive={activeSection === 'skills'} />
                </Link>
                <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavButton name="Projects" isActive={activeSection === 'projects'} />
                </Link>
                <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                    <NavButton name="Contact" isActive={activeSection === 'contact'} />
                </Link>
            </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Left section */}
          <div className="flex items-center gap-4">
            <Link href="#services">
              <NavButton name="Services" isActive={activeSection === 'services'} />
            </Link>
            <Link href="#skills">
              <NavButton name="Skills" isActive={activeSection === 'skills'} />
            </Link>
          </div>

          {/* Center Logo */}
          <Link href="#home" className="shrink-0">
              <NavButton name="Tohamy" className="font-cursive text-2xl text-rust" isActive={activeSection === 'home'} />
          </Link>

          {/* Right section */}
          <div className="flex items-center gap-4">
            <Link href="#projects">
              <NavButton name="Projects" isActive={activeSection === 'projects'} />
            </Link>
            <Link href="#contact">
              <NavButton name="Contact" isActive={activeSection === 'contact'} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
