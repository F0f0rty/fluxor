import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="min-h-screen py-24 sm:py-32 bg-transparent relative overflow-hidden text-white flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10">
        <div className="mb-12 sm:mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight">
            {t('heading')}
          </h2>
          <p className="text-white/60 text-lg sm:text-xl font-light max-w-2xl mx-auto px-4 sm:px-0">
            {t('headingSubtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-6">
          {/* Main text block */}
          <div className="md:col-span-7 p-6 sm:p-10 md:p-14 rounded-3xl sm:rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-xl flex flex-col justify-center relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-[#1e3a5f]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <h3 className="text-2xl sm:text-3xl font-medium mb-4 sm:mb-6 text-white relative z-10">
              {t('title')}
            </h3>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light relative z-10">
              {t('subtitle')}
            </p>
            <ul className="space-y-3 mb-4 sm:mb-6 relative z-10">
              {Array.from({ length: 5 }, (_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-white/40 rounded-full flex-shrink-0 mt-[7px]" />
                  <span className="text-white/60 text-sm leading-relaxed">{t(`points.${i}`)}</span>
                </li>
              ))}
            </ul>
            <p className="text-white/70 text-base sm:text-lg leading-relaxed font-light italic relative z-10">
              {t('closing')}
            </p>
          </div>

          {/* Image Block */}
          <div className="md:col-span-5 min-h-[350px] sm:min-h-[400px] md:min-h-0 rounded-3xl sm:rounded-[2.5rem] overflow-hidden relative border border-white/10 shadow-2xl group">
            <img
              src="/about.jpg"
              alt="Fluxor Consulting — глобальное присутствие"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 rounded-2xl sm:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
              <p className="text-white font-medium text-base sm:text-lg mb-1">
                {t('imageOverlayTitle')}
              </p>
              <p className="text-white/70 text-xs sm:text-sm font-light">
                {t('imageOverlayText')}
              </p>
            </div>
          </div>

          {/* Stat Blocks — 4 in a row */}
          {Array.from({ length: 4 }, (_, i) => (
            <div
              key={i}
              className={`group relative md:col-span-3 p-6 sm:p-8 rounded-3xl sm:rounded-[2rem] ${
                i === 0
                  ? 'bg-gradient-to-br from-[#1e3a5f]/30 to-white/5'
                  : 'bg-white/5'
              } border border-white/10 backdrop-blur-xl hover:-translate-y-1 hover:bg-white/[0.1] hover:border-white/[0.2] hover:shadow-lg hover:shadow-white/[0.03] transition-all duration-300 shadow-xl overflow-hidden`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3">
                {t(`advantages.${i}.title`)}
              </div>
              <div className="text-white/60 text-xs sm:text-sm font-medium leading-snug">
                {t(`advantages.${i}.description`)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
