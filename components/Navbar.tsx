"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "About Us",
    href: "/#about",
    hasDropdown: true,
    dropdownItems: [
      { label: "About Royal Star", href: "#about" },
      { label: "Production Capacity", href: "/about/production-capacity" },
      { label: "Certificates", href: "/about/certificates" },
      { label: "Our Promoter", href: "/about/our-promoter" },
    ],
  },
  { label: "Our Products", href: "/products" },
  {
    label: "Process Section",
    href: "/#process",
    hasDropdown: true,
    dropdownItems: [
      { label: "Primary Section", href: "/process/primary-section" },
      { label: "Secondary Section", href: "/process/secondary-section" },
      { label: "Final Screen", href: "/process/final-screen" },
    ],
  },
  { label: "Equipment", href: "/equipments" },
  { label: "Our Blog", href: "/blogs" },
  { label: "Contact Us", href: "/contact" },
];

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

// Dropdown menu component
function DropdownMenu({ items, isOpen }: { items: { label: string; href: string }[]; isOpen: boolean }) {
  return (
    <div
      className={`absolute top-full left-0 z-50 min-w-[200px] bg-[#1a3c6e] shadow-lg transition-all duration-200 ${
        isOpen
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-2 pointer-events-none"
      }`}
    >
      {/* Triangle pointer */}
      <div className="absolute -top-2 left-6 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#1a3c6e]" />

      <ul className="py-1">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block px-5 py-3 text-sm font-medium text-white border-b border-white/10 last:border-b-0 hover:bg-[#e53935] transition-colors duration-150"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Nav item with optional dropdown
function NavItem({ link }: { link: typeof navLinks[number] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!link.hasDropdown) {
    return (
      <li>
        <Link
          href={link.href}
          className="flex items-center gap-1 px-4 py-4 text-sm font-medium text-white hover:text-white/80 hover:bg-black/10 transition-all duration-200"
        >
          {link.label}
        </Link>
      </li>
    );
  }

  return (
    <li ref={ref} className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="flex items-center gap-1 px-4 py-4 text-sm font-medium text-white hover:text-white/80 hover:bg-black/10 transition-all duration-200 cursor-pointer"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {link.label}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Invisible bridge so mouse can travel from button into dropdown without closing */}
      {open && (
        <div
          className="absolute top-full left-0 w-full h-2"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
      )}

      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <DropdownMenu items={link.dropdownItems} isOpen={open} />
      </div>
    </li>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Track which mobile accordion is open
  const [mobileOpenIndex, setMobileOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      {/* Top bar */}
      <div className="bg-[#1a3c6e] text-white text-sm py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-2">
          <span className="font-medium tracking-wide">
            Welcome to our{" "}
            <span className="text-[#e53935] font-bold">ROYAL STAR</span>{" "}
            CRUSHER LLC
          </span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Clock size={14} />
              We&apos;re Open: Mon - Sat 6:00 - 6:00
            </span>
            <div className="w-px h-4 bg-white/30" />
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                className="hover:opacity-70 transition-opacity"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="hover:opacity-70 transition-opacity"
              >
                <LinkedInIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Logo / contact row */}
      <div className="bg-white border-b border-gray-200 py-2 px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between gap-4">
          <Link href="/">
            <Image
              src="/assets/logo.png"
              alt="Royal Star Crusher LLC"
              width={170}
              height={110}
              className="object-contain"
              style={{ height: 'auto' }}
              priority
            />
          </Link>

          <div className="hidden md:flex items-start gap-8 text-sm text-gray-700">
            {/* Call Us */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 border-2 border-[#e53935] flex items-center justify-center shrink-0">
                <Phone size={16} className="text-[#e53935]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">
                  Call Us For Help!
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="tel:+971501535566"
                    className="hover:text-[#e53935] transition-colors whitespace-nowrap"
                  >
                    +971 50 153 5566
                  </a>
                  <span className="text-gray-300">|</span>
                  <a
                    href="tel:+971506332977"
                    className="hover:text-[#e53935] transition-colors whitespace-nowrap"
                  >
                    +971 50 633 2977
                  </a>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 border-2 border-[#e53935] flex items-center justify-center shrink-0">
                <MapPin size={16} className="text-[#e53935]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">
                  Address
                </p>
                <span className="whitespace-nowrap">UNITED ARAB EMIRATES</span>
              </div>
            </div>

            {/* Mail Us */}
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 border-2 border-[#e53935] flex items-center justify-center shrink-0">
                <Mail size={16} className="text-[#e53935]" />
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-xs uppercase tracking-wide mb-1">
                  Mail Us
                </p>
                <a
                  href="mailto:royalstarcrusheruae@gmail.com"
                  className="hover:text-[#e53935] transition-colors"
                >
                  royalstarcrusheruae@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nav links */}
      <nav className="bg-[#e53935] px-4">
        <div className="container mx-auto flex items-center justify-between">
          {/* Desktop nav */}
          <ul className="hidden md:flex items-center">
            {navLinks.map((link) => (
              <NavItem key={link.href} link={link} />
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden ml-auto py-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/20">
            <ul className="flex flex-col">
              {navLinks.map((link, index) => (
                <li key={link.href}>
                  {link.hasDropdown ? (
                    <>
                      {/* Accordion trigger */}
                      <button
                        onClick={() =>
                          setMobileOpenIndex(
                            mobileOpenIndex === index ? null : index
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-black/10 transition-colors border-b border-white/10"
                      >
                        {link.label}
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-200 ${
                            mobileOpenIndex === index ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Accordion content */}
                      {mobileOpenIndex === index && (
                        <ul className="bg-[#1a3c6e]">
                          {link.dropdownItems.map((item) => (
                            <li key={item.href}>
                              <Link
                                href={item.href}
                                onClick={() => {
                                  setMenuOpen(false);
                                  setMobileOpenIndex(null);
                                }}
                                className="block px-7 py-3 text-sm text-white border-b border-white/10 hover:bg-[#e53935] transition-colors"
                              >
                                {item.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 text-sm font-medium text-white hover:bg-black/10 transition-colors border-b border-white/10"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}