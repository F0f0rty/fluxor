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
    <footer className="border-t border-white/10 px-4 sm:px-6 py-12 sm:py-16 bg-transparent relative z-10 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-12 sm:mb-16">

          {/* Brand */}
          <div className="col-span-1 sm:col-span-2 md:col-span-1">
            <div className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 tracking-tight text-white uppercase">FLUXOR</div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-sm">
              {t('tagline')}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 sm:mb-6 font-semibold text-base sm:text-lg text-white">{t('navigation')}</h4>
            <ul className="space-y-3 sm:space-y-4">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-white/60 hover:text-white transition-colors text-sm font-medium"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 sm:mb-6 font-semibold text-base sm:text-lg text-white">{t('resources')}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">{t('blog')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">{t('cases')}</a></li>
              <li><a href="#" className="text-white/60 hover:text-white transition-colors text-sm font-medium">{t('analytics')}</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 sm:mb-6 font-semibold text-base sm:text-lg text-white">{nav('contact')}</h4>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a
                  href={`mailto:${contact('info.email')}`}
                  className="text-white/60 hover:text-white transition-colors text-sm font-medium break-all"
                >
                  {contact('info.email')}
                </a>
              </li>
              <li className="text-white/60 text-sm font-medium">
                {contact('info.location')}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 text-center sm:text-left text-white/40 text-xs sm:text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {year} {t('company')}. {t('rights')}</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#" className="hover:text-white transition-colors">{t('privacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
