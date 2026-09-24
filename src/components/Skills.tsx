import { skills } from '@/data/content';

const Skills = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
            Technical Proficiency
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Technical <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">Grouped competencies for modern application development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 rounded-2xl p-5 shadow-xs hover:border-blue-300 dark:hover:border-blue-700/60 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 text-2xl">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white mb-1">{skill.name}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
