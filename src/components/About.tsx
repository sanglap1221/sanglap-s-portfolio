
import { GraduationCap, Users, Lightbulb, Code2 } from 'lucide-react';
import { personalInfo, education } from '@/data/content';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Know More <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Column - Bio and Soft Skills */}
          <div className="space-y-6">
            
            {/* Bio Card */}
            <div className="glow-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {personalInfo.aboutBio}
              </p>
            </div>

            {/* Soft Skills Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glow-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Team-Oriented</h4>
                <p className="text-muted-foreground text-sm">Proactive collaborator & clear communicator</p>
              </div>
              
              <div className="glow-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-1">Emerging Tech Advocate</h4>
                <p className="text-muted-foreground text-sm">Rapidly adopting TFLite, BLoC & GetX state patterns</p>
              </div>
            </div>
          </div>

          {/* Right Column - Education */}
          <div className="space-y-6">
            
            {/* Education Card */}
            <div className="glow-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {/* Loop through each education item */}
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className={`relative pl-8 border-l-2 ${
                      edu.isCurrent ? 'border-primary/30' : 'border-muted'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-2 top-0 w-4 h-4 rounded-full ${
                      edu.isCurrent ? 'bg-primary' : 'bg-muted'
                    }`} />
                    
                    {/* Year and current badge */}
                    <div className="mb-1 flex items-center gap-2">
                      <span className={`text-sm font-medium ${
                        edu.isCurrent ? 'text-primary' : 'text-muted-foreground'
                      }`}>
                        {edu.year}
                      </span>
                      {edu.isCurrent && (
                        <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    
                    {/* Degree and school */}
                    <h4 className="font-semibold text-lg">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <p className="text-secondary font-medium mt-1">{edu.score}</p>
                    {edu.coursework && (
                      <p className="text-muted-foreground text-sm mt-2">
                        <span className="font-medium">Relevant Coursework:</span> {edu.coursework}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement Badge */}
            <div className="neon-border rounded-xl p-6 bg-card/50">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                  <span className="text-2xl">🏆</span>
                </div>
                <div>
                  <h4 className="font-semibold">Play Store Published</h4>
                  <p className="text-muted-foreground text-sm">
                    Jiremali Samaj - A Flutter-based social networking app published on the Google Play Store with 100+ downloads and 5+ stars reviews on the Play Store as user feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
