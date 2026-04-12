import { useTranslations } from 'next-intl';
import { Cpu, Calculator, Truck, Factory, TrendingUp } from 'lucide-react';
import HeroParallax from './HeroParallax';

const areas = [
  {
    key: 'it',
    icon: Cpu,
    colSpan: 'col-span-1 sm:col-span-2',
    color: 'text-blue-400',
  },
  {
    key: 'accounting',
    icon: Calculator,
    colSpan: 'col-span-1',
    color: 'text-indigo-400',
  },
  {
    key: 'logistics',
    icon: Truck,
    colSpan: 'col-span-1',
    color: 'text-sky-400',
  },
  {
    key: 'manufacturing',
    icon: Factory,
    colSpan: 'col-span-1',
    color: 'text-blue-300',
  },
  {
    key: 'sales',
    icon: TrendingUp,
    colSpan: 'col-span-1',
    color: 'text-indigo-300',
  },
];

export default function Hero() {
  const t = useTranslations('hero');

  return (
    <section
      id="hero"
      className="min-h-[100svh] lg:h-[100svh] flex items-start lg:items-center relative overflow-hidden"
    >
      {/* Background with Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[#0c182a] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0c182a_100%)]" />
        <div className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] max-w-[700px] rounded-full bg-blue-500/15 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] rounded-full bg-indigo-500/15 blur-[100px] pointer-events-none" />
      </div>

      <HeroParallax>
        <div className="max-w-7xl mx-auto w-full relative z-10 px-4 sm:px-6 pt-24 lg:pt-32 pb-20">
          <div className="grid lg:grid-cols-12 gap-[clamp(1.5rem,3vh,3rem)] lg:gap-8 items-center">
            {/* Left — Text Content */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.12] mb-[clamp(0.75rem,2vh,1.5rem)] w-fit text-sm font-medium text-white/80">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                {t('badge')}
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-[clamp(1.5rem,3vw,3rem)] font-semibold mb-4 lg:mb-[clamp(0.75rem,2vh,1.5rem)] tracking-tight text-white leading-[1.15]">
                {t('tagline')}
              </h1>

              <p className="text-base sm:text-lg lg:text-[clamp(0.875rem,1.1vw,1.125rem)] text-white/80 mb-8 lg:mb-[clamp(1.5rem,3vh,2.5rem)] font-light max-w-lg leading-relaxed">
                {t('description')}
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <a
                  href="#contact"
                  data-umami-event="hero_cta_click"
                  className="w-full sm:w-auto px-6 py-3 bg-[#1e3a5f] text-white font-medium rounded-xl hover:bg-[#1e3a5f]/90 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center text-sm sm:text-base"
                >
                  {t('cta')}
                </a>
                <a
                  href="#solutions"
                  data-umami-event="hero_learn_more_click"
                  className="w-full sm:w-auto px-6 py-3 bg-white/[0.08] border border-white/10 text-white font-medium rounded-xl hover:bg-white/[0.12] hover:border-white/20 transition-all text-center text-sm sm:text-base"
                >
                  {t('learnMore')}
                </a>
              </div>
            </div>

            {/* Right — Areas of Expertise Cards (desktop only) */}
            <div className="hidden lg:block lg:col-span-6 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(0.75rem,1.5vh,1.25rem)]">
                {areas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.key}
                      className={`p-[clamp(1rem,2vh,1.75rem)] rounded-3xl bg-white/[0.08] border border-white/[0.12] hover:bg-white/[0.12] hover:border-white/[0.2] hover:-translate-y-1 hover:shadow-lg hover:shadow-white/[0.03] transition-all duration-300 cursor-default ${area.colSpan}`}
                    >
                      <div className="flex items-start mb-[clamp(0.75rem,1.5vh,1.25rem)]">
                        <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/[0.12]">
                          <Icon
                            className={`w-6 h-6 sm:w-7 sm:h-7 ${area.color}`}
                            strokeWidth={1.5}
                          />
                        </div>
                      </div>
                      <h3 className="text-[clamp(0.9rem,1.15vw,1.25rem)] font-medium text-white leading-snug">
                        {t(`areas.${area.key}`)}
                      </h3>
                    </div>
                  );
                })}
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none -z-10" />
            </div>
          </div>
        </div>
      </HeroParallax>
    </section>
  );
}
