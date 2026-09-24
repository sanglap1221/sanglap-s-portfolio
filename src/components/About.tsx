
import { GraduationCap, Users, Lightbulb, Code2, ExternalLink, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
         
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
            Know More <span className="gradient-text">About Me</span>
            <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary/50 to-transparent rounded-full" />
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
              <p className="mt-4 text-sm text-primary font-semibold tracking-wide">
                🚀 Actively building production-ready mobile and web experiences.
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
            <div className="relative overflow-hidden neon-border rounded-2xl p-6 bg-card/60">
              <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/10 blur-2xl" />
              <div className="relative z-10 space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center shrink-0">
                    <Smartphone className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">One Aim Project - RelaxDoc Health</h4>
                    <p className="text-muted-foreground text-sm mt-1">
                      Built and maintained RelaxDoc Health at One Aim IT Solutions, including app development and Play Console operations for the live release.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/30">Production App</span>
                  <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/30">Play Console</span>
                  <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">Live on Play Store</span>
                </div>

                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                  asChild
                >
                  <a
                    href="https://play.google.com/store/apps/details?id=com.relaxdoc.health"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View RelaxDoc on Play Store
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
