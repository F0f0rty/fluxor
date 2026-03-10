'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const switchTo = (lang: string) => {
    const segments = pathname.split('/');
    segments[1] = lang;
    router.push(segments.join('/') || `/${lang}`);
    setLangOpen(false);
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#solutions', label: t('solutions') },
    { href: '#experience', label: t('experience') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'backdrop-blur-xl bg-[#0c182a]/80 border-b border-white/10 shadow-sm py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-1 flex-shrink-0">
            <span className="text-2xl font-bold tracking-tight text-white transition-colors">
              FLUXOR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/80 hover:text-white transition-colors drop-shadow-sm"
              >
                {link.label}
              </a>
            ))}

            {/* Language Globe Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 text-white/70 hover:text-white transition-colors"
                aria-label="Language"
              >
                <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
                <span className="text-xs font-semibold uppercase tracking-wide">
                  {locale.toUpperCase()}
                </span>
                <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className={`transition-transform ${langOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              {langOpen && (
                <div className="absolute top-full right-0 mt-2 py-1 rounded-xl bg-[#0c182a]/95 backdrop-blur-xl border border-white/10 shadow-2xl min-w-[120px] overflow-hidden">
                  <button
                    onClick={() => switchTo('ru')}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      locale === 'ru' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    Русский
                  </button>
                  <button
                    onClick={() => switchTo('en')}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                      locale === 'en' ? 'text-white bg-white/10' : 'text-white/60 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    English
                  </button>
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="px-6 py-2.5 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#1e3a5f]/90 transition-all shadow-md font-semibold"
            >
              {t('connect')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-4">
            <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
              {menuOpen ? (
                <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5">
                  <path d="M5 17L17 5M5 5l12 12" />
                </svg>
              ) : (
                <svg width="22" height="22" fill="none" stroke="#fff" strokeWidth="1.5">
                  <path d="M3 11h16M3 5.5h16M3 16.5h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#0c182a]/95 backdrop-blur-xl border-b border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-white py-2 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}

            {/* Mobile language switcher */}
            <div className="flex gap-3 py-2 border-b border-white/10">
              <button
                onClick={() => { switchTo('ru'); setMenuOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === 'ru' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                Русский
              </button>
              <button
                onClick={() => { switchTo('en'); setMenuOpen(false); }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  locale === 'en' ? 'bg-white/10 text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                English
              </button>
            </div>

            <a
              href="#contact"
              className="mt-2 px-6 py-3 bg-[#1e3a5f] text-white rounded-xl hover:bg-[#1e3a5f]/90 transition-all shadow-md font-semibold text-center text-lg"
              onClick={() => setMenuOpen(false)}
            >
              {t('connect')}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
