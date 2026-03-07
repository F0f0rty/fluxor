import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex flex-col bg-white overflow-hidden pt-[63px] md:pt-[71px]">
      {/* Navy decorative block — right */}
      <div className="absolute top-0 right-0 w-[42%] h-full bg-[#0B2D4E] hidden lg:block">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-0 w-[3px] h-full bg-[#1464F4]" />
      </div>

      <div className="container relative z-10 flex-1 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 w-full min-h-[calc(100vh-71px)]">

          {/* Left: content */}
          <div className="lg:col-span-7 flex flex-col justify-center py-16 lg:py-24 lg:pr-16">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[2px] bg-[#1464F4]" />
              <span className="section-label">{t('label')}</span>
            </div>

            {/* Headline */}
            <h1
              className="display text-[2.2rem] md:text-[3rem] lg:text-[3.4rem] text-[#0B2D4E] mb-7 max-w-xl"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              {t('tagline')}
            </h1>

            {/* Description */}
            <p className="text-[15px] text-[#64748B] leading-relaxed max-w-lg mb-10">
              {t('description')}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#0B2D4E] text-white text-[12px] font-semibold px-8 py-3.5 hover:bg-[#1464F4] transition-colors uppercase tracking-[0.1em]"
              >
                {t('cta')}
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 7h10M7 2l5 5-5 5" />
                </svg>
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border border-[#DDE3EC] text-[#0B2D4E] text-[12px] font-semibold px-8 py-3.5 hover:border-[#0B2D4E] transition-colors uppercase tracking-[0.1em]"
              >
                {t('learnMore')}
              </a>
            </div>

            {/* Stats */}
            <div className="mt-14 pt-8 border-t border-[#DDE3EC] grid grid-cols-3 gap-6">
              {[
                { value: '10+', label: t('stat1') },
                { value: '4', label: t('stat2') },
                { value: 'AI+', label: t('stat3') },
              ].map((s, i) => (
                <div key={i}>
                  <p
                    className="text-2xl md:text-3xl font-semibold text-[#0B2D4E]"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[11px] text-[#64748B] mt-1 leading-snug">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: navy block */}
          <div className="hidden lg:col-span-5 lg:flex flex-col justify-between p-12 pb-16 pt-20 relative">
            {/* Top: industries */}
            {/* Bottom: slogan */}
            <div className="mt-auto">
              <div className="w-8 h-[2px] bg-[#1464F4] mb-6" />
              <p className="text-white/30 text-[10px] font-semibold uppercase tracking-[0.2em] mb-4">
                Fluxor Consulting
              </p>
              <p
                className="text-white text-[1.35rem] leading-snug max-w-xs"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                &ldquo;{t('sideQuote')}&rdquo;
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
