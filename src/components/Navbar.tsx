"use client"
import React, { useState, useEffect } from 'react';
import { Menu, ShoppingBag, Search, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Collections', href: '#collections' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'About', href: '#about' },
    { name: 'Journal', href: '#journal' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled || isMobileMenuOpen
          ? 'bg-oraleo-50/90 backdrop-blur-md shadow-sm py-4 text-nature-dark'
          : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="flex-1 md:flex-none text-center md:text-left">
          <a href="#" className="font-serif text-3xl font-bold tracking-wider">
            ORALEO
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest hover:text-oraleo-600 transition-colors font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex space-x-6 items-center">
          <button className="hover:text-oraleo-600 transition-colors">
            <Search size={20} />
          </button>
          <button className="hover:text-oraleo-600 transition-colors relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-2 bg-oraleo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
              2
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-oraleo-50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col py-6 px-6 space-y-4 text-nature-dark">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif hover:text-oraleo-600 border-b border-oraleo-200 pb-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 text-sm text-center text-oraleo-600">
            Sign In / Register
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;