import { useTranslations } from 'next-intl';
import { TrendingUp, Users, Clock, Zap } from 'lucide-react';

const items_meta = [
  { icon: TrendingUp, color: 'text-blue-400' },
  { icon: Users, color: 'text-indigo-400' },
  { icon: Clock, color: 'text-sky-400' },
  { icon: Zap, color: 'text-blue-300' },
];

export default function Services() {
  const t = useTranslations('services');

  const items = Array.from({ length: 4 }, (_, i) => ({
    title: t(`items.${i}.title`),
    description: t(`items.${i}.description`),
    ...items_meta[i],
  }));

  return (
    <section id="solutions" className="min-h-screen flex items-center px-4 sm:px-6 py-24 sm:py-32 bg-white/[0.01] border-t border-white/5 relative overflow-hidden text-white">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 sm:mb-6 tracking-tight text-white">
            {t('title')}
          </h2>
          <p className="text-white/70 text-lg sm:text-xl max-w-2xl mx-auto font-light px-4 sm:px-0">
            {t('subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 sm:p-8 md:p-10 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm shadow-lg hover:bg-white/[0.1] hover:border-white/[0.2] hover:-translate-y-1 hover:shadow-lg hover:shadow-white/[0.03] transition-all duration-300 overflow-hidden"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/[0.06] border border-white/[0.12] rounded-2xl flex items-center justify-center mb-6 sm:mb-8">
                <item.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${item.color}`} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-white">
                {item.title}
              </h3>
              <p className="text-white/70 leading-relaxed text-base sm:text-lg font-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
