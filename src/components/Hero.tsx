import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { personalInfo } from "@/data/content";

// Floating skill icons
const floatingIcons = [
  { icon: "📱", label: "Flutter" },
  { icon: "🔥", label: "Firebase" },
  { icon: "🐍", label: "Python" },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden cyber-grid"
    >
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />

      {/* Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* ====================================================
              LEFT SIDE - IMAGE + FLOATING ICONS
          ===================================================== */}
          <div className="relative flex justify-center lg:justify-end order-2 lg:order-1 lg:pr-10">
            
            {/* Floating Skill Icons */}
            <div className="absolute -left-8 top-20 z-10 hidden lg:flex flex-col gap-3">
              {floatingIcons.map((item, index) => (
                <div
                  key={item.label}
                  className={`bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 flex items-center gap-2 ${
                    index % 2 === 0 ? "floating" : "floating-delayed"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs text-muted-foreground">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Profile Picture Wrapper */}
            <div className="relative">
              {/* Animated glowing ring */}
              <div className="absolute -inset-4 profile-ring rounded-full opacity-60 blur-sm" />
              <div className="absolute -inset-4 profile-ring rounded-full opacity-30" />

              {/* Hire Me Rotating Badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="w-24 h-24 rounded-full border-2 border-primary/50 bg-card flex items-center justify-center animate-spin-slow">
                  <svg
                    viewBox="0 0 100 100"
                    className="w-full h-full animate-[spin_10s_linear_infinite_reverse]"
                  >
                    <defs>
                      <path
                        id="circle"
                        d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text className="fill-primary text-[11px] font-medium uppercase tracking-[0.3em]">
                      <textPath xlinkHref="#circle">
                        • HIRE ME • HIRE ME • HIRE ME • HIRE ME
                      </textPath>
                    </text>
                  </svg>

                  <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary-foreground -rotate-45" />
                  </div>
                </div>
              </div>

              {/* Profile Image */}
              <div className="w-70 h-70 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full bg-gradient-to-br from-muted to-card border-4 border-border overflow-hidden relative shadow-xl">
                <img
                  src="/prof.png"
                  alt={`${personalInfo.name} portrait`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* ====================================================
              RIGHT SIDE - TEXT CONTENT + BUTTONS
          ===================================================== */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full px-4 py-2 mb-4">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs md:text-sm font-medium">
                Currently Working as Full Stack Developer
              </span>
            </div>
            
            {/* Greeting Badge */}
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xl">👋</span>
              <span className="text-muted-foreground text-sm">
                Hi I'm {personalInfo.name}
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              FLUTTER APP
              <br />
              <span className="gradient-text font-display italic">Developer</span>
              <span className="block text-muted-foreground text-lg md:text-xl mt-4 tracking-wide">
                & AI/ML Enthusiast
                </span>
            </h1>

            {/* Intro Paragraph */}
            <p className="text-muted-foreground text-lg max-w-lg mb-8 mx-auto lg:mx-0">
              {personalInfo.heroIntro}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              
              {/* View Projects */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold neon-border pulse-glow"
                asChild
              >
                <a href="#projects">
                  View Portfolio
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              {/* Contact Me */}
              <Button
                variant="ghost"
                size="lg"
                className="text-foreground hover:text-primary px-8 py-6 text-base font-semibold group"
                asChild
              >
                <a href="#contact">
                  <div className="w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center mr-3 group-hover:border-primary/50 transition-colors">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  Contact Me
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
