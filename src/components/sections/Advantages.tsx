import { useTranslations } from 'next-intl';

const icons = [
  // Clock / experience
  <svg key="0" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>,
  // Settings / flexible
  <svg key="1" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z"/><path d="M8 12h8M12 8v8"/>
  </svg>,
  // Team / people
  <svg key="2" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
];

export default function Advantages() {
  const t = useTranslations('advantages');

  const items = Array.from({ length: 3 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    icon: icons[i],
  }));

  return (
    <section id="advantages" className="section bg-[#0B2D4E]">
      <div className="container">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14">
          <div className="lg:col-span-5">
            <p className="section-label text-[#1464F4] mb-3">{t('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {t('title')}
            </h2>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[#0B2D4E] p-8 group hover:bg-[#1464F4]/10 transition-colors duration-300"
            >
              {/* Number + icon */}
              <div className="flex items-start justify-between mb-6">
                <span
                  className="text-[3rem] leading-none text-white/10"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="text-[#1464F4]">{item.icon}</div>
              </div>

              {/* Title */}
              <h3
                className="text-[1.1rem] text-white mb-3 leading-snug"
                style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-[13px] text-white/50 leading-relaxed">
                {item.description}
              </p>

              {/* Bottom accent line */}
              <div className="mt-6 w-0 group-hover:w-8 h-[2px] bg-[#1464F4] transition-all duration-300" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
