"use client";
import React, { useState, useEffect } from "react";
import { Menu, ShoppingBag, Search, X } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

import SearchOverlay from "./SearchOverlay";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "About", href: "/about" },
    { name: "Our Story", href: "#story" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
          isScrolled || isMobileMenuOpen
            ? "bg-white backdrop-blur-md shadow-sm py-4 text-nature-dark"
            : "bg-transparent py-6 text-white"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* ... existing mobile menu button ... */}

          {/* Logo */}
          <div className="flex-1 md:flex-none text-center md:text-left">
            <Link
              href="/"
              className="font-serif text-3xl font-bold tracking-wider"
            >
              ORALEO
              {/* <Image
                src={"/images/logo-without.png"}
                alt="logo of the brand"
                width={150}
                height={50}
                className="h-12 w-auto object-contain"
              /> */}
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm uppercase tracking-widest hover:text-oraleo-600 transition-colors font-medium"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex space-x-6 items-center">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="hover:text-oraleo-600 transition-colors"
            >
              <Search size={20} />
            </button>
            <Link
              href="/cart"
              className="hover:text-oraleo-600 transition-colors relative"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-2 bg-oraleo-600 text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-oraleo-50 shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col py-6 px-6 space-y-4 text-nature-dark">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-serif hover:text-oraleo-600 border-b border-oraleo-200 pb-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 text-sm text-center text-oraleo-600">
              Sign In / Register
            </div>
          </div>
        </div>
      </nav>
      <SearchOverlay
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
    </>
  );
};

export default Navbar;
