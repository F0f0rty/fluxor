import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const contact = useTranslations('contact');
  const year = new Date().getFullYear();

  const links = [
    { href: '#about', label: nav('about') },
    { href: '#services', label: nav('services') },
    { href: '#contact', label: nav('contact') },
  ];

  return (
    <footer className="relative z-10 bg-[#071e35] text-white pt-10 md:pt-14">
      <div className="container py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[13px] font-semibold tracking-[0.06em] uppercase text-white">
                Fluxor
              </span>
              <span className="text-[13px] font-normal tracking-[0.06em] uppercase text-white/40">
                Consulting
              </span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed max-w-xs">
              {t('tagline')}
            </p>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3">
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              {t('navigation')}
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              {nav('contact')}
            </p>
            <a
              href={`mailto:${contact('info.email')}`}
              className="text-[13px] text-white/50 hover:text-white transition-colors block mb-2"
            >
              {contact('info.email')}
            </a>
            <p className="text-[13px] text-white/30">{contact('info.location')}</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[11px] text-white/25">
            © {year} {t('company')}. {t('rights')}
          </p>
          <p className="text-[11px] text-white/20">
            {t('disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}
