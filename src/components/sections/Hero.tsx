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
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0c182a]/85 via-[#1e3a5f]/65 to-transparent" />

        {/* Mobile: stronger overlay */}
        <div className="absolute inset-0 bg-[#0c182a]/40 lg:hidden" />

        {/* Content with parallax + fade-in */}
        <HeroParallax>
          <div className="relative z-10 h-screen flex items-center pt-[64px] md:pt-[72px]">
            <div className="max-w-7xl mx-auto w-full px-4 sm:px-6">
              <div className="max-w-3xl">

                {/* Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-tight tracking-tight">
                  {t('tagline')}
                </h1>

                {/* Description */}
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-10 md:mb-12 font-light max-w-2xl">
                  {t('description')}
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="w-full sm:w-auto px-8 py-4 bg-[#1e3a5f] text-white font-medium rounded-xl hover:bg-[#1e3a5f]/90 transition-all shadow-lg hover:shadow-xl text-center"
                  >
                    {t('cta')}
                  </a>
                  <a
                    href="#solutions"
                    className="w-full sm:w-auto px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium rounded-xl hover:bg-white/20 hover:border-white/30 transition-all text-center"
                  >
                    {t('learnMore')}
                  </a>
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
