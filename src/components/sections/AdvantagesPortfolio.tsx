import { useTranslations } from 'next-intl';

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

export default function Portfolio() {
  const tp = useTranslations('portfolio');

  const sectors = Array.from({ length: 3 }, (_, s) => {
    const count = s === 2 ? 3 : 5;
    return {
      name: tp(`sectors.${s}.name`),
      items: Array.from({ length: count }, (_, i) => tp(`sectors.${s}.items.${i}`)),
      icon: sectorIcons[s],
    };
  });

  return (
    <section id="portfolio" className="section bg-white">
      <div className="container">

        {/* Header */}
        <div className="mb-12">
          <p className="section-label mb-3">{tp('label')}</p>
          <div className="rule" />
          <h2
            className="text-[2rem] md:text-[2.6rem] text-[#0B2D4E] leading-tight"
            style={{ fontFamily: 'var(--font-serif)', fontWeight: 500 }}
          >
            {tp('title')}
          </h2>
        </div>

        {/* Sector blocks */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sectors.map((sector, i) => (
            <div key={i} className="bg-[#F7F8FA] border border-[#DDE3EC] p-8 hover:border-[#1464F4] transition-colors duration-200">
              {/* Icon + sector name */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#1464F4]/10 flex items-center justify-center text-[#1464F4] flex-shrink-0">
                  {sector.icon}
                </div>
                <h3
                  className="text-[1.1rem] text-[#0B2D4E]"
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
                    <span className="text-[13px] text-[#64748B] leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
