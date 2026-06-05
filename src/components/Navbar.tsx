'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-sm">
              <img
                src="/synco_icons/favicon_synco.svg"
                alt="Synco Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-foreground">Synco</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-lg">
              <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                À propos
              </Link>
              <Link href="/services" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Services
              </Link>
              <Link href="/solutions" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Solutions
              </Link>
              <Link href="/contact" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Link href="/contact" className="btn btn-primary">
                Nous contacter
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-sm rounded-md hover:bg-muted transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="container">
              <div className="flex flex-col gap-md py-md">
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accueil
                </Link>
                <Link
                  href="/about"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  À propos
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  href="/solutions"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-sm"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </Link>
                <div className="pt-md border-t border-border">
                  <Link
                    href="/contact"
                    className="btn btn-primary w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Nous contacter
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}
