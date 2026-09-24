import { Briefcase, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { experiences } from "@/data/content";

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Professional <span className="gradient-text">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A quick snapshot of recent roles, impact, and proof of work.
          </p>
        </div>

        <div className="grid gap-6">
          {experiences.map((exp) => (
            <div key={`${exp.role}-${exp.company}`} className="glow-card rounded-2xl p-8 space-y-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                      <Briefcase className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{exp.role}</h3>
                      <p className="text-muted-foreground">
                        {exp.company} | {exp.duration}
                      </p>
                    </div>
                  </div>
                  {exp.location && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground pl-[3.75rem]">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  )}
                </div>

                {(exp.certificateUrl || exp.playStoreUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {exp.certificateUrl && (
                      <Button
                        size="sm"
                        className="bg-primary text-primary-foreground hover:bg-primary/90"
                        asChild
                      >
                        <a href={exp.certificateUrl} target="_blank" rel="noreferrer">
                          View Certificate
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                    {exp.playStoreUrl && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                        asChild
                      >
                        <a href={exp.playStoreUrl} target="_blank" rel="noreferrer">
                          View App
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">{exp.summary}</p>

              <ul className="grid sm:grid-cols-2 gap-2 text-sm text-muted-foreground">
                {exp.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
