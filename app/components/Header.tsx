"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "소개", href: "#about" },
  { label: "커리큘럼", href: "#curriculum" },
  { label: "관리시스템", href: "#management" },
  { label: "오시는 길", href: "#location" },
  { label: "상담문의", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl">🍀</span>
            <span className="font-bold text-lg text-brand-text tracking-tight leading-tight">
              올티칭<br className="hidden" />
              <span className="text-primary"> 영어교습소</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-brand-subtext hover:text-primary transition-colors rounded-md hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:010-6546-1706"
              className="ml-3 flex items-center gap-1.5 bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary-dark transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Phone size={14} />
              전화 상담
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 text-brand-text hover:text-primary transition-colors"
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="py-3 text-base font-medium text-brand-text hover:text-primary transition-colors border-b border-gray-50 last:border-0"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-3">
              <a
                href="tel:010-6546-1706"
                onClick={handleNavClick}
                className="flex-1 flex items-center justify-center gap-1.5 bg-primary text-white py-3 rounded-xl font-semibold text-sm"
              >
                <Phone size={14} />
                전화 상담
              </a>
              <a
                href="https://pf.kakao.com/_vzfPX"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClick}
                className="flex-1 flex items-center justify-center gap-1.5 bg-kakao text-brand-text py-3 rounded-xl font-semibold text-sm"
              >
                💬 카카오톡
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
