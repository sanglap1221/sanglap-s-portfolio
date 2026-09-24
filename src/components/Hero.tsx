import { useState, useEffect } from 'react';
import { ArrowRight, Play, Smartphone, Briefcase, Code2, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalInfo } from '@/data/content';

const stats = [
  { icon: Smartphone, count: '5+', label: 'Production Apps', color: 'text-blue-600', bg: 'bg-blue-50' },
  { icon: Briefcase, count: '3+', label: 'Professional Experience', color: 'text-sky-600', bg: 'bg-sky-50' },
  { icon: Code2, count: '10+', label: 'Projects Completed', color: 'text-indigo-600', bg: 'bg-indigo-50' },
  { icon: Users, count: '1,000+', label: 'Active Users', color: 'text-cyan-600', bg: 'bg-cyan-50' },
];

const Hero = () => {
  const dynamicRoles = ['Full Stack Developer', 'Mobile App Engineer', 'AI/ML Integrator'];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % dynamicRoles.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [dynamicRoles.length]);

  return (
    <section id="home" className="pt-28 pb-16 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left Text Block */}
          <div className="lg:col-span-7 space-y-5">
            {/* Tech Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              • FLUTTER • REACT.JS • NODE.JS • AI/ML
            </div>

            {/* Main Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {personalInfo.name}
              </h1>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-600 tracking-tight leading-tight transition-all duration-500 min-h-[56px] flex items-center">
                {dynamicRoles[roleIndex]}
              </h2>
            </div>

            {/* Subtext */}
            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              {personalInfo.heroIntro}
            </p>

            <p className="text-slate-500 text-xs sm:text-sm font-medium tracking-wide">
              Flutter · React.js · Node.js · Firebase · MongoDB · Python
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3.5 pt-3">
              <Button
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-6 font-medium shadow-md shadow-blue-500/20"
              >
                <a href="#projects" className="flex items-center gap-2">
                  Explore Projects <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-slate-200 bg-white hover:bg-slate-50 text-slate-700 rounded-xl px-6 py-6 font-medium"
              >
                <a href="#contact" className="flex items-center gap-2">
                  <Play className="w-3.5 h-3.5 fill-slate-700 text-slate-700" /> Contact Me
                </a>
              </Button>
            </div>
          </div>

          {/* Right Image Block with Custom Dotted pattern & handwritten annotation */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Background dot matrix */}
            <div className="absolute top-2 right-4 grid grid-cols-6 gap-2 opacity-30 select-none pointer-events-none">
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              ))}
            </div>

            <div className="relative">
              {/* Outer circular gradient glow */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-92 md:h-92 rounded-full p-2 bg-gradient-to-br from-blue-100 via-sky-50 to-white shadow-xl flex items-center justify-center">
                {/* Image container */}
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-inner bg-slate-100">
                  <img
                    src="/prof.png"
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Role Pill */}
              <div className="absolute bottom-4 right-2 sm:right-6 bg-blue-600 text-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg border-2 border-white">
                Full Stack Developer
              </div>

              {/* Handwritten Floating Tag */}
              <div className="absolute -bottom-8 -left-6 sm:-left-12 bg-white/90 backdrop-blur-xs border border-slate-200/80 rounded-2xl p-2.5 shadow-sm transform -rotate-3 text-center hidden sm:block">
                <p className="text-[11px] font-medium text-slate-600 italic">
                  Turning ideas <br />
                  <span className="font-semibold text-slate-800">into Real Applications 🚀 and ☕</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-Item Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-slate-200/90 rounded-2xl p-4 sm:p-5 flex items-center gap-4 shadow-xs hover:border-blue-200 transition-colors"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${stat.bg} ${stat.color} flex items-center justify-center shrink-0`}
                >
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                    {stat.count}
                  </div>
                  <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
