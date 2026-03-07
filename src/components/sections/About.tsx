import { useTranslations } from 'next-intl';

export default function About() {
  const t = useTranslations('about');

  const stats = [
    { value: t('stat1Value'), label: t('stat1Label') },
    { value: t('stat2Value'), label: t('stat2Label') },
    { value: t('stat3Value'), label: t('stat3Label') },
  ];

  return (
    <section id="about" className="section bg-[#F7F8FA]">
      <div className="container">

        {/* Top: label + title + text in columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left col — label + title */}
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

          {/* Right col — body text */}
          <div className="lg:col-span-7 space-y-4 lg:pt-2">
            <p className="text-[15px] text-[#64748B] leading-relaxed">{t('p1')}</p>
            <p className="text-[15px] text-[#64748B] leading-relaxed">{t('p2')}</p>
          </div>
        </div>

        {/* Stats band */}
        <div className="mt-14 bg-white border border-[#DDE3EC] grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DDE3EC]">
          {stats.map((stat, i) => (
            <div key={i} className="px-8 py-7 flex flex-col gap-1">
              <p
                className="text-[2.4rem] md:text-[3rem] text-[#0B2D4E] leading-none"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                {stat.value}
              </p>
              <div className="w-6 h-[2px] bg-[#1464F4] my-2" />
              <p className="text-[13px] text-[#64748B]">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
