import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { experiences } from '@/data/content';

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-1">
            Professional Journey
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Work <span className="text-blue-600">Experience</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">Roles, impact, and proof of work.</p>
        </div>

        <div className="space-y-6">
          {experiences.map((item, index) => {
            const isFullTime = item.tag === 'Full-time' || !item.tag?.toLowerCase().includes('intern');
            const tagColor = isFullTime
              ? 'bg-blue-50 text-blue-700 border-blue-200'
              : 'bg-sky-50 text-sky-700 border-sky-200';

            return (
              <div
                key={index}
                className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-blue-200 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {/* Timeline and Role Title */}
                  <div className="space-y-1">
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs font-semibold text-slate-700">{item.duration}</span>
                      {item.tag && (
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-md border ${tagColor}`}>
                          {item.tag}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 pt-1">{item.company}</h3>
                    <p className="text-sm font-medium text-blue-600">{item.role}</p>
                  </div>

                  {/* Action Buttons: Certificate and/or App */}
                  <div className="flex flex-wrap gap-2 self-start">
                    {item.certificateUrl && (
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 text-xs rounded-xl h-8"
                      >
                        <a href={item.certificateUrl} target="_blank" rel="noopener noreferrer">
                          View Certificate <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </Button>
                    )}
                    {item.playStoreUrl && (
                      <Button
                        asChild
                        size="sm"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-xs rounded-xl h-8 shadow-xs"
                      >
                        <a href={item.playStoreUrl} target="_blank" rel="noopener noreferrer">
                          View App <ExternalLink className="w-3.5 h-3.5 ml-1" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Bullet points */}
                <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {item.highlights.map((point, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-2">
                      <span className="text-blue-600 font-bold">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-5 pt-4 border-t border-slate-100">
                    {item.tags.map((t, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-0.5 rounded-lg text-xs font-medium bg-slate-100 text-slate-600"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
