import { skills } from '@/data/content';

const Skills = () => {
  /**
   * Helper function to get color classes based on skill color
   * This keeps the JSX cleaner and easier to read
   */
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          text: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          progress: 'bg-primary',
        };
      case 'secondary':
        return {
          text: 'text-secondary',
          bg: 'bg-secondary/10',
          border: 'border-secondary/30',
          progress: 'bg-secondary',
        };
      case 'accent':
        return {
          text: 'text-accent',
          bg: 'bg-accent/10',
          border: 'border-accent/30',
          progress: 'bg-accent',
        };
      default:
        return {
          text: 'text-primary',
          bg: 'bg-primary/10',
          border: 'border-primary/30',
          progress: 'bg-primary',
        };
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden cyber-grid">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            My Skills
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            Technical <span className="gradient-text">Expertise</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable mobile applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Loop through each skill and create a card */}
          {skills.map((skill) => {
            const colors = getColorClasses(skill.color);
            
            return (
              <div
                key={skill.name}
                className="glow-card rounded-2xl p-6 group"
              >
                {/* Skill Icon */}
                <div className={`w-14 h-14 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{skill.icon}</span>
                </div>

                {/* Skill Name and Description */}
                <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{skill.description}</p>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Proficiency</span>
                    <span className={colors.text}>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    {/* The width is set to the skill level percentage */}
                    <div
                      className={`h-full ${colors.progress} rounded-full transition-all duration-1000`}
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
