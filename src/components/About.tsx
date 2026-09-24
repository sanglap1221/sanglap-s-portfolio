import { GraduationCap, Users, Lightbulb } from 'lucide-react';
import { personalInfo, education } from '@/data/content';

const About = () => {
  return (
    <section id="about" className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-1">About Me</span>
          <h2 className="text-3xl font-bold text-slate-900">
            About <span className="text-blue-600">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Bio & Soft skills */}
          <div className="lg:col-span-7 space-y-6">
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base whitespace-pre-line">
              {personalInfo.aboutBio}
            </p>

            {/* Soft Skills Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="border border-slate-200 rounded-2xl p-5 bg-white flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Team-Oriented</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Proactive collaborator & clear communicator
                  </p>
                </div>
              </div>

              <div className="border border-slate-200 rounded-2xl p-5 bg-white flex items-start gap-3.5 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Quick Learner</h4>
                  <p className="text-xs text-slate-500 mt-0.5 leading-snug">
                    Adapting to new frameworks and production workflows
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Education Card with timeline nodes */}
          <div className="lg:col-span-5">
            <div className="border border-slate-200 rounded-2xl p-6 bg-white shadow-xs">
              <div className="flex items-center gap-2 mb-6 text-slate-900 font-bold text-base">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                Education
              </div>

              <div className="space-y-6">
                {education.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-slate-200 last:border-transparent">
                    {/* Circle marker */}
                    <span
                      className={`absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ${
                        edu.isCurrent ? 'bg-blue-600 ring-4 ring-blue-100' : 'bg-slate-300'
                      }`}
                    />

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-slate-700">{edu.year}</span>
                      {edu.isCurrent && (
                        <span className="text-[10px] bg-blue-600 text-white font-medium px-2 py-0.5 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-sm text-slate-900 mt-0.5">{edu.degree}</h4>
                    <p className="text-xs text-slate-500">{edu.school}</p>
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">{edu.score}</p>
                    {edu.coursework && (
                      <p className="text-[11px] text-slate-500 mt-1 leading-snug">
                        <span className="font-medium text-slate-700">Relevant Coursework:</span>{' '}
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
