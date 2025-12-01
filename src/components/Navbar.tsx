'use client';

import Link from 'next/link';
import Image from 'next/image';
import NavButton from './ui/navButton';
import BubbleMenu from './ui/BubbleMenu';
import useMobile from '@/lib/useMobile';
import { useState, useEffect } from 'react';

interface NavbarProps {
  onMenuStateChange?: (isOpen: boolean) => void;
}

const Navbar = ({ onMenuStateChange }: NavbarProps) => {
  const { isMobile, ready, select } = useMobile({ mobileBreakpoint: 768 });
  const [activeSection, setActiveSection] = useState<string>('');

  // Ensure activeSection is not reset to empty string when page loads
  useEffect(() => {
    if (activeSection === '') {
        // eslint-disable-next-line react-hooks/set-state-in-effect
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

  const navWrapperClass = select({
    mobile: 'top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl',
    tablet: 'fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl',
    desktop: 'fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[85%] max-w-5xl'
  });

  const navInnerClass = [
    'bg-transparent',
    'backdrop-blur-md',
    'rounded-full',
    'shadow-lg',
    'border border-cream/20',
    select({
      mobile: 'px-6 py-2',
      tablet: 'px-8 py-2',
      desktop: 'px-1 py-1'
    })
  ].join(' ');

  // Menu items for BubbleMenu  
  const menuItems = [
    {
      label: 'skills',
      href: '#skills',
      ariaLabel: 'Skills',
      rotation: -5,
      hoverStyles: { bgColor: '#09474b', textColor: '#ffffff' }
    },
    {
      label: 'services',
      href: '#services',
      ariaLabel: 'Services',
      rotation: 3,
      hoverStyles: { bgColor: '#09474b', textColor: '#ffffff' }
    },
    {
      label: 'projects',
      href: '#projects',
      ariaLabel: 'Projects',
      rotation: 5,
      hoverStyles: { bgColor: '#09474b', textColor: '#ffffff' }
    },
    {
      label: 'contact',
      href: '#contact',
      ariaLabel: 'Contact',
      rotation: -3,
      hoverStyles: { bgColor: '#09474b', textColor: '#ffffff' }
    }
  ];

  // Show BubbleMenu on mobile (only after client-side hydration)
  if (!ready) {
    // Return desktop navbar during SSR to avoid hydration mismatch
    return (
      <header className={navWrapperClass}>
        <nav className={navInnerClass}>
          <div className='flex items-center justify-between gap-4'>
            <div className='flex items-center gap-4'>
              <Link href='#services'>
                <NavButton name="Services" />
              </Link>
              <Link href='#skills'>
                <NavButton name="Skills" />
              </Link>
            </div>
            <Link href='#home' className='shrink-0'>
              <h1 className='font-cursive text-2xl text-cream'>Tohamy</h1>
            </Link>
            <div className='flex items-center gap-4'>
              <Link href='#projects'>
                <NavButton name="Projects" />
              </Link>
              <Link href='#contact'>
                <NavButton name="Contact" />
              </Link>
            </div>
          </div>
        </nav>
      </header>
    );
  }

  if (isMobile) {
    return (
      <BubbleMenu
        logo={<span style={{ fontWeight: 700 }}>The Clinic</span>}
        items={menuItems}
        menuAriaLabel="Toggle navigation"
        menuBg="#d4cec4"
        menuContentColor="#333333"
        useFixedPosition={false}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.12}
        onMenuClick={onMenuStateChange}
      />
    );
  }

  // Show regular navbar on desktop
  return (
    <header className={navWrapperClass}>
      <nav className={navInnerClass}>
        <div className='flex items-center justify-between gap-4'>
          {/* Left section */}
          <div className='flex items-center gap-4'>
            <Link href='#services'>
              <NavButton name="Services" isActive={activeSection === 'services'} />
            </Link>
            <Link href='#skills'>
              <NavButton name="Skills" isActive={activeSection === 'skills'} />
            </Link>
          </div>

          {/* Center Logo */}
          <Link href='#home' className='shrink-0'>
              <NavButton name="Tohamy" className='font-cursive text-2xl text-rust' isActive={activeSection === 'home'} />
          </Link>

          {/* Right section */}
          <div className='flex items-center gap-4'>
            <Link href='#projects'>
              <NavButton name="Projects" isActive={activeSection === 'projects'} />
            </Link>
            <Link href='#contact'>
              <NavButton name="Contact" isActive={activeSection === 'contact'} />
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
