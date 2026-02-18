'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FiMenu, FiX, FiPhone } from 'react-icons/fi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/pricing', label: 'Pricing' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/faq', label: 'FAQ' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-yellow-500">
          S.U.GROUP
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} className={`font-medium transition-colors ${isScrolled ? 'text-gray-800 hover:text-yellow-500' : 'text-white hover:text-yellow-300'}`}>
              {link.label}
            </Link>
          ))}
          <a href="tel:+918623038373" className="flex items-center gap-2 bg-yellow-500 text-black px-6 py-2 rounded-full font-bold hover:bg-yellow-400 transition-all">
            <FiPhone /> Call Now
          </a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl text-yellow-500">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg border-t">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="flex flex-col gap-4">
              {navLinks.map(link => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-800 font-medium hover:text-yellow-500 py-2">
                  {link.label}
                </Link>
              ))}
              <a href="tel:+918623038373" className="flex items-center justify-center gap-2 bg-yellow-500 text-black px-6 py-3 rounded-full font-bold">
                <FiPhone /> Call Now
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
