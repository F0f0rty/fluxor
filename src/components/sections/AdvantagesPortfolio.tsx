import { useTranslations } from 'next-intl';

const advantageIcons = [
  <svg key="0" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
  </svg>,
  <svg key="1" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>,
  <svg key="2" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>,
];

const sectorIcons = [
  <svg key="it" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
  </svg>,
  <svg key="fin" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
  </svg>,
  <svg key="edu" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
  </svg>,
];

export default function AdvantagesPortfolio() {
  const ta = useTranslations('advantages');
  const tp = useTranslations('portfolio');

  const advantages = Array.from({ length: 3 }, (_, i) => ({
    title: ta(`items.${i}.title`),
    description: ta(`items.${i}.description`),
    icon: advantageIcons[i],
  }));

  const sectors = Array.from({ length: 3 }, (_, s) => {
    const count = s === 2 ? 3 : 5;
    return {
      name: tp(`sectors.${s}.name`),
      items: Array.from({ length: count }, (_, i) => tp(`sectors.${s}.items.${i}`)),
      icon: sectorIcons[s],
    };
  });

  return (
    <section id="advantages" className="bg-[#0B2D4E]">

      {/* ── Part 1: Advantages ── */}
      <div className="section pb-0">
        <div className="container">

          {/* Header */}
          <div className="mb-12">
            <p className="section-label text-[#1464F4] mb-3">{ta('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {ta('title')}
            </h2>
          </div>

          {/* Advantage cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {advantages.map((item, i) => (
              <div key={i} className="bg-[#0B2D4E] p-8 group hover:bg-[#1464F4]/10 transition-colors duration-300">
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-[3rem] leading-none text-white/10"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="text-[#1464F4]">{item.icon}</div>
                </div>
                <h3
                  className="text-[1.05rem] text-white mb-3"
                  style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-white/75 leading-relaxed">{item.description}</p>
                <div className="mt-5 w-0 group-hover:w-8 h-[2px] bg-[#1464F4] transition-all duration-300" />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div className="container">
        <div className="border-t border-white/10 mt-14" />
      </div>

      {/* ── Part 2: Portfolio ── */}
      <div className="section pt-14">
        <div className="container">

          {/* Header */}
          <div className="mb-12">
            <p className="section-label text-[#1464F4] mb-3">{tp('label')}</p>
            <div className="rule" />
            <h2
              className="text-[2rem] md:text-[2.6rem] text-white leading-tight"
              style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
            >
              {tp('title')}
            </h2>
          </div>

          {/* Sector blocks */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sectors.map((sector, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-8 hover:bg-white/8 transition-colors duration-200">
                {/* Icon + sector name */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#1464F4]/15 flex items-center justify-center text-[#1464F4] flex-shrink-0">
                    {sector.icon}
                  </div>
                  <h3
                    className="text-[1.1rem] text-white"
                    style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
                  >
                    {sector.name}
                  </h3>
                </div>

                {/* Project list */}
                <ul className="space-y-3">
                  {sector.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-[#1464F4] flex-shrink-0 mt-[7px]" />
                      <span className="text-[13px] text-white/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
