import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const year = new Date().getFullYear();

  const links = ['About', 'Services', 'Insights', 'Contact'];

  return (
    <footer className="bg-[#071e35] text-white">
      {/* Blue top accent */}
      <div className="h-[3px] bg-[#1464F4]" />

      <div className="container py-12 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-5 h-5 bg-white/10 flex items-center justify-center">
                <div className="w-2 h-2 border border-white/60" />
              </div>
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
              Navigation
            </p>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l}>
                  <a
                    href={`#${l.toLowerCase()}`}
                    className="text-[13px] text-white/50 hover:text-white transition-colors"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold text-white/30 uppercase tracking-[0.2em] mb-4">
              Contact
            </p>
            <a
              href="mailto:hello@fluxorconsulting.com"
              className="text-[13px] text-white/50 hover:text-white transition-colors block mb-2"
            >
              hello@fluxorconsulting.com
            </a>
            <p className="text-[13px] text-white/30">Moscow, Russia</p>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <p className="text-[11px] text-white/25">
            © {year} {t('company')}. {t('rights')}
          </p>
          <p className="text-[11px] text-white/20">
            All advisory services are subject to engagement terms.
          </p>
        </div>
      </div>
    </footer>
  );
}
