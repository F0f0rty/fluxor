'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLocale = () => {
    const next = locale === 'en' ? 'ru' : 'en';
    const segments = pathname.split('/');
    segments[1] = next;
    router.push(segments.join('/') || `/${next}`);
  };

  const navLinks = [
    { href: '#about', label: t('about') },
    { href: '#services', label: t('services') },
    { href: '#news', label: t('news') },
    { href: '#contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Blue accent bar — Big4 signature element */}
      <div className="h-[3px] bg-[#1464F4]" />

      <div
        className={`transition-all duration-200 ${
          scrolled || menuOpen
            ? 'bg-white shadow-[0_1px_0_0_#DDE3EC]'
            : 'bg-white/96 backdrop-blur-sm'
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-[60px] md:h-[68px]">

            {/* Logo */}
            <Link href={`/${locale}`} className="flex items-center flex-shrink-0">
              <Image
                src="/logo.jpg"
                alt="Fluxor Consulting"
                width={140}
                height={40}
                className="h-9 w-auto object-contain"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-[13px] text-[#64748B] hover:text-[#0B2D4E] transition-colors font-medium tracking-wide"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={switchLocale}
                className="text-[11px] font-semibold text-[#64748B] hover:text-[#0B2D4E] transition-colors uppercase tracking-[0.12em]"
              >
                {locale === 'en' ? 'RU' : 'EN'}
              </button>
              <a
                href="#contact"
                className="text-[11px] font-semibold bg-[#0B2D4E] text-white px-5 py-2.5 hover:bg-[#1464F4] transition-colors uppercase tracking-[0.1em]"
              >
                {t('contact')}
              </a>
            </div>

            {/* Mobile */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={switchLocale}
                className="text-[11px] font-semibold text-[#64748B] uppercase tracking-widest"
              >
                {locale === 'en' ? 'RU' : 'EN'}
              </button>
              <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
                {menuOpen ? (
                  <svg width="20" height="20" fill="none" stroke="#0B2D4E" strokeWidth="1.5">
                    <path d="M5 15L15 5M5 5l10 10" />
                  </svg>
                ) : (
                  <svg width="20" height="20" fill="none" stroke="#0B2D4E" strokeWidth="1.5">
                    <path d="M2.5 10h15M2.5 5h15M2.5 15h15" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#DDE3EC] bg-white">
            <nav className="container py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-[#0B2D4E] py-2.5 border-b border-[#F0F4F8] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 inline-flex items-center justify-center text-[11px] font-semibold bg-[#0B2D4E] text-white px-5 py-3 uppercase tracking-[0.1em]"
              >
                {t('contact')}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
