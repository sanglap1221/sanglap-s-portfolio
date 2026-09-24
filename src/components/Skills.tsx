import { skills } from '@/data/content';

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-slate-50/50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-1">
            Technical Proficiency
          </span>
          <h2 className="text-3xl font-bold text-slate-900">
            Technical <span className="text-blue-600">Skills</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">Grouped competencies for modern application development.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white border border-slate-200/90 rounded-2xl p-5 shadow-xs hover:border-blue-200 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4 text-2xl">
                  {skill.icon}
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-1">{skill.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
