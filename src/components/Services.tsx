import { Smartphone, Server, Laptop, Cpu, Gauge, BarChart3, LucideIcon } from 'lucide-react';
import { services } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  'Flutter App Development': Smartphone,
  'Backend & APIs': Server,
  'Web Applications': Laptop,
  'AI/ML Integrations': Cpu,
  'App Optimization': Gauge,
  'Launch & Analytics': BarChart3,
};

const Services = () => {
  return (
    <section id="services" className="py-16 border-t border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
            What I Offer
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Services</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Professional mobile app development services tailored to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = iconMap[svc.title] || Smartphone;
            return (
              <div
                key={idx}
                className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700/60 hover:-translate-y-1 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-bold text-base text-slate-900 dark:text-white mb-2">{svc.title}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800">
                  {svc.features.map((feature, fIdx) => (
                    <span
                      key={fIdx}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
