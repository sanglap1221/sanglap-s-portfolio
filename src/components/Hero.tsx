/**
 * ============================================
 * HERO COMPONENT
 * ============================================
 * 
 * This is the main landing section at the top of your portfolio.
 * It includes:
 * - Your name and title
 * - A short intro paragraph
 * - Call-to-action buttons
 * - Profile picture placeholder with animated ring
 * - Floating skill icons
 * 
 * TO EDIT:
 * - Change your info in src/data/content.ts (personalInfo)
 */

import { ArrowRight, Play, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/content';

// Floating skill icons that appear next to the profile picture
const floatingIcons = [
  { icon: '📱', label: 'Flutter' },
  { icon: '🔥', label: 'Firebase' },
  { icon: '🐍', label: 'Python' },
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

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Profile Picture */}
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
            
            {/* Floating Skill Icons - only visible on large screens */}
            <div className="absolute -left-4 top-20 z-20 hidden lg:flex flex-col gap-3">
              {floatingIcons.map((item, index) => (
                <div
                  key={item.label}
                  className={`bg-card/80 backdrop-blur-sm border border-border rounded-lg px-3 py-2 flex items-center gap-2 ${
                    index % 2 === 0 ? 'floating' : 'floating-delayed'
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>

            {/* Profile Picture Container */}
            <div className="relative">
              {/* Animated rotating ring around the profile picture */}
              <div className="absolute -inset-4 profile-ring rounded-full opacity-60 blur-sm" />
              <div className="absolute -inset-4 profile-ring rounded-full opacity-30" />
              
              {/* "Hire Me" rotating badge */}
              <div className="absolute -top-4 -right-4 z-20">
                <div className="w-24 h-24 rounded-full border-2 border-primary/50 flex items-center justify-center bg-card animate-spin-slow">
                  <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_10s_linear_infinite_reverse]">
                    <defs>
                      <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                    </defs>
                    <text className="fill-primary text-[11px] font-medium uppercase tracking-[0.3em]">
                      <textPath xlinkHref="#circle">• HIRE ME • HIRE ME • HIRE ME </textPath>
                    </text>
                  </svg>
                  <div className="absolute inset-4 bg-primary rounded-full flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary-foreground -rotate-45" />
                  </div>
                </div>
              </div>

              {/* Profile Image Placeholder */}
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-muted to-card border-4 border-border overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
                      <Sparkles className="w-10 h-10 text-primary" />
                    </div>
                    <p className="text-muted-foreground text-sm">Profile Picture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-center lg:text-left order-1 lg:order-2">
            
            {/* Greeting badge */}
            <div className="inline-flex items-center gap-2 bg-card/50 backdrop-blur-sm border border-border rounded-full px-4 py-2 mb-6">
              <span className="text-xl">👋</span>
              <span className="text-muted-foreground text-sm">Hi I'm {personalInfo.name}</span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              A FLUTTER APP
              <br />
              <span className="gradient-text font-display italic">& DEVELOPER</span>
            </h1>

            {/* Intro paragraph */}
            <p className="text-muted-foreground text-lg max-w-lg mb-8 mx-auto lg:mx-0">
              {personalInfo.heroIntro}
            </p>

            {/* Call-to-action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {/* Primary button - View Projects */}
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base font-semibold neon-border pulse-glow"
                asChild
              >
                <a href="#projects">
                  View Projects
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </Button>

              {/* Secondary button - Contact Me */}
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

      {/* Scroll Indicator at the bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
