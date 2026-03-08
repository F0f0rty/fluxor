import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section bg-[#F7F8FA]">
      <div className="container">

        {/* Top: label + title + text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left col */}
          <div className="lg:col-span-5">
            <p className="section-label mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-[#0B2D4E] leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
          </div>

          {/* Right col — approach list */}
          <div className="lg:col-span-7 lg:pt-2">
            <p className="text-[15px] text-[#0B2D4E] font-semibold mb-4">{t('subtitle')}</p>
            <ul className="space-y-3 mb-6">
              {Array.from({ length: 5 }, (_, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-[#1464F4] flex-shrink-0 mt-[7px]" />
                  <span className="text-[15px] text-[#64748B] leading-relaxed">{t(`points.${i}`)}</span>
                </li>
              ))}
            </ul>
            <p className="text-[15px] text-[#0B2D4E] font-medium italic">{t('closing')}</p>
          </div>
        </div>

        {/* Advantages band */}
        <div className="mt-14 bg-white border border-[#DDE3EC] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE3EC]">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i} className="px-8 py-7 flex flex-col gap-1">
              <p
                className="text-[1.1rem] text-[#0B2D4E] font-semibold leading-snug"
              >
                {t(`advantages.${i}.title`)}
              </p>
              <p className="text-[13px] text-[#64748B] mt-1">{t(`advantages.${i}.description`)}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
