import { GraduationCap, Users, Lightbulb } from 'lucide-react';
import { personalInfo, education } from '@/data/content';

const About = () => {
  return (
    <section id="about" className="py-16 border-t border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
            About Me
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left: Bio & Soft skills */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {personalInfo.aboutBio}
            </p>

            {/* Soft Skills Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-start gap-3.5 shadow-xs hover:border-blue-200 dark:hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Team-Oriented</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Proactive collaborator & clear communicator
                  </p>
                </div>
              </div>

              <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl p-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-start gap-3.5 shadow-xs hover:border-blue-200 dark:hover:border-slate-700 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Quick Learner</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                    Adapting to new frameworks and production workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Card with timeline nodes */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-xs">
              <div className="flex items-center gap-2 mb-6 text-slate-900 dark:text-white font-bold text-base">
                <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Education
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 last:border-transparent"
                  >
                    {/* Circle marker */}
                    <span
                      className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                        edu.isCurrent
                          ? 'bg-blue-600 dark:bg-blue-400 ring-4 ring-blue-100 dark:ring-blue-950'
                          : 'bg-slate-300 dark:bg-slate-700'
                      }`}
                    />

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {edu.year}
                      </span>
                      {edu.isCurrent && (
                        <span className="text-[10px] bg-blue-600 dark:bg-blue-500 text-white font-medium px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 dark:text-white mt-0.5">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{edu.school}</p>
                    <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mt-0.5">
                      {edu.score}
                    </p>
                    {edu.coursework && (
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1 leading-snug">
                        <span className="font-medium text-slate-700 dark:text-slate-300">
                          Relevant Coursework:
                        </span>{' '}
                        {edu.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
