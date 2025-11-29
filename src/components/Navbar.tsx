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

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ['home', 'services', 'skills', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
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
    'bg-darker/80',
    'backdrop-blur-md',
    'rounded-full',
    'shadow-lg',
    'border border-cream/20',
    select({
      mobile: 'px-6 py-2',
      tablet: 'px-8 py-2',
      desktop: 'px-8 py-1'
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
              <Image
                src='/images/logo.png'
                alt='Logo'
                width={65}
                height={65}
                className='hover:scale-115 transition-transform rounded-3xl'
              />
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
            <Image
              src='/images/logo.png'
              alt='Logo'
              width={65}
              height={65}
              className='hover:scale-115 transition-transform rounded-2xl'
            />
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
