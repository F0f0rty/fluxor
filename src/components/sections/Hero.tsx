import { useTranslations } from 'next-intl';
import HeroParallax from './HeroParallax';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <>
      {/* Hero — stays fixed, page scrolls over it */}
      <section
        className="fixed inset-0 w-full h-screen z-0"
        style={{
          backgroundImage: 'url(/hero.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center right',
        }}
      >
        {/* Dark overlay for left side text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e33]/90 via-[#0a1e33]/70 to-transparent" />

        {/* Mobile: stronger overlay */}
        <div className="absolute inset-0 bg-[#0a1e33]/40 lg:hidden" />

        {/* Content with parallax + fade-in */}
        <HeroParallax>
          <div className="relative z-10 h-screen flex items-center pt-[60px] md:pt-[68px]">
            <div className="container">
              <div className="max-w-xl lg:max-w-lg">

                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-[2px] bg-[#1464F4]" />
                  <span className="text-[10px] font-semibold text-[#1464F4] uppercase tracking-[0.18em]">
                    {t('label')}
                  </span>
                </div>

                {/* Headline */}
                <h1
                  className="text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] text-white mb-7 leading-tight"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                >
                  {t('tagline')}
                </h1>

                {/* Description */}
                <p className="text-[15px] text-white/60 leading-relaxed max-w-lg mb-10">
                  {t('description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 bg-[#1464F4] text-white text-[12px] font-semibold px-8 py-3.5 hover:bg-[#1a75ff] transition-colors uppercase tracking-[0.1em]"
                  >
                    {t('cta')}
                    <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M2 7h10M7 2l5 5-5 5" />
                    </svg>
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white text-[12px] font-semibold px-8 py-3.5 hover:border-white/50 transition-colors uppercase tracking-[0.1em]"
                  >
                    {t('learnMore')}
                  </a>
                </div>

                {/* Stats */}
                <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
                  {[
                    { value: '10+', label: t('stat1') },
                    { value: '4', label: t('stat2') },
                    { value: '2', label: t('stat3') },
                  ].map((s, i) => (
                    <div key={i}>
                      <p
                        className="text-2xl md:text-3xl font-semibold text-white"
                        style={{ fontFamily: 'var(--font-serif)' }}
                      >
                        {s.value}
                      </p>
                      <p className="text-[11px] text-white/40 mt-1 leading-snug">{s.label}</p>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </HeroParallax>
      </section>

      {/* Spacer — pushes content below hero height */}
      <div className="h-screen" />
    </>
  );
}
