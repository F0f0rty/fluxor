import { useTranslations } from 'next-intl';

export default function Results() {
  const t = useTranslations('results');

  const items = Array.from({ length: 3 }, (_, i) => ({
    value: t(`items.${i}.value`),
    label: t(`items.${i}.label`),
    description: t(`items.${i}.description`),
  }));

  return (
    <section id="results" className="section bg-[#F7F8FA]">
      <div className="container">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-end">
          <div className="lg:col-span-6">
            <p className="section-label mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-[#0B2D4E] leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="text-[15px] text-[#64748B] leading-relaxed">{t('description')}</p>
          </div>
        </div>

        {/* Result cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <div key={i} className="bg-white border border-[#DDE3EC] p-8 relative overflow-hidden group hover:border-[#1464F4] transition-colors duration-300">
              {/* Big number background */}
              <div
                className="absolute -top-4 -right-2 text-[6rem] leading-none text-[#F0F4F8] select-none pointer-events-none transition-colors duration-300 group-hover:text-[#EBF2FF]"
                style={{ fontFamily: 'var(--font-serif)' }}
                aria-hidden
              >
                {item.value}
              </div>

              {/* Content */}
              <div className="relative z-10">
                {/* Blue accent top bar */}
                <div className="w-8 h-[3px] bg-[#1464F4] mb-6" />

                <p
                  className="text-[2.8rem] md:text-[3.2rem] text-[#0B2D4E] leading-none mb-2"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                >
                  {item.value}
                </p>

                <p className="text-[13px] font-semibold text-[#0B2D4E] uppercase tracking-[0.1em] mb-3">
                  {item.label}
                </p>

                <p className="text-[13px] text-[#64748B] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
