import { GraduationCap, Users, Lightbulb, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            About Me
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Know More <span className="gradient-text">About Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="glow-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                <Code2 className="w-6 h-6 text-primary" />
                Who I Am
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I am a Mobile App Developer specializing in Flutter with internship experience building real-world applications. I am passionate about combining intelligent solutions with seamless UI, working across domains like AI/ML and full-stack concepts to deliver impactful digital experiences.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="glow-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-1">Team Player</h4>
                <p className="text-muted-foreground text-sm">Collaborative & communicative</p>
              </div>
              <div className="glow-card rounded-xl p-6 text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-secondary/10 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-secondary" />
                </div>
                <h4 className="font-semibold mb-1">Quick Learner</h4>
                <p className="text-muted-foreground text-sm">Emerging tech enthusiast</p>
              </div>
            </div>
          </div>

          {/* Education Section */}
          <div className="space-y-6">
            <div className="glow-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                <GraduationCap className="w-6 h-6 text-primary" />
                Education
              </h3>
              
              <div className="space-y-6">
                {/* B.Tech */}
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary" />
                  <div className="mb-1 flex items-center gap-2">
                    <span className="text-primary text-sm font-medium">2023 – 2027</span>
                    <span className="px-2 py-0.5 bg-primary/10 text-primary text-xs rounded-full">Current</span>
                  </div>
                  <h4 className="font-semibold text-lg">B.Tech in Computer Science & Engineering</h4>
                  <p className="text-muted-foreground">University of Engineering & Management (UEM), Jaipur</p>
                  <p className="text-secondary font-medium mt-1">CGPA: 8.37/10</p>
                </div>

                {/* Higher Secondary */}
                <div className="relative pl-8 border-l-2 border-muted">
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-muted" />
                  <div className="mb-1">
                    <span className="text-muted-foreground text-sm font-medium">2020 – 2022</span>
                  </div>
                  <h4 className="font-semibold text-lg">Higher Secondary</h4>
                  <p className="text-muted-foreground">Bongaon High School</p>
                  <p className="text-secondary font-medium mt-1">Score: 90%</p>
                </div>
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
                  <p className="text-muted-foreground text-sm">Successfully launched app on Google Play Store</p>
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
