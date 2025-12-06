import { 
  Smartphone, 
  Code2, 
  Database, 
  Globe, 
  Brain, 
  Palette,
  GitBranch,
  Wrench
} from 'lucide-react';

const skills = [
  {
    icon: Smartphone,
    name: 'Flutter',
    description: 'Cross-Platform Development',
    level: 90,
    color: 'primary',
  },
  {
    icon: Code2,
    name: 'Dart',
    description: 'Primary Programming Language',
    level: 88,
    color: 'primary',
  },
  {
    icon: Database,
    name: 'Firebase',
    description: 'Auth & Firestore',
    level: 85,
    color: 'secondary',
  },
  {
    icon: Globe,
    name: 'REST API',
    description: 'Integration & Management',
    level: 82,
    color: 'secondary',
  },
  {
    icon: Brain,
    name: 'Python & ML',
    description: 'Machine Learning Basics',
    level: 70,
    color: 'accent',
  },
  {
    icon: Palette,
    name: 'UI/UX',
    description: 'Clean & Responsive Design',
    level: 85,
    color: 'primary',
  },
  {
    icon: GitBranch,
    name: 'Git',
    description: 'Version Control',
    level: 80,
    color: 'secondary',
  },
  {
    icon: Wrench,
    name: 'Dev Tools',
    description: 'VS Code, Android Studio, Postman',
    level: 88,
    color: 'primary',
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden cyber-grid">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable mobile applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const colorClass = 
              skill.color === 'primary' ? 'text-primary bg-primary/10 border-primary/30' :
              skill.color === 'secondary' ? 'text-secondary bg-secondary/10 border-secondary/30' :
              'text-accent bg-accent/10 border-accent/30';
            const progressColor =
              skill.color === 'primary' ? 'bg-primary' :
              skill.color === 'secondary' ? 'bg-secondary' :
              'bg-accent';

            return (
              <div
                key={skill.name}
                className="glow-card rounded-2xl p-6 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${colorClass} border flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={skill.color === 'primary' ? 'text-primary' : skill.color === 'secondary' ? 'text-secondary' : 'text-accent'}>
                      {skill.level}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full ${progressColor} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
