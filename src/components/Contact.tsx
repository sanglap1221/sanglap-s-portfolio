
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { contactInfo, socialLinks } from "@/data/content";

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? You can reach me
            directly via email, phone, or LinkedIn.
          </p>
        </div>

        {/* Contact Info + Social */}
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Left column - contact cards */}
          <div className="space-y-6">
            {/* Email Card */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="glow-card rounded-xl p-5 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Email</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {contactInfo.email}
                </p>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href={`tel:${contactInfo.phone.replace(/-/g, "")}`}
              className="glow-card rounded-xl p-5 flex items-center gap-4 group block"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Phone</p>
                <p className="font-medium group-hover:text-primary transition-colors">
                  {contactInfo.phone}
                </p>
              </div>
            </a>

            {/* Location Card */}
            <div className="glow-card rounded-xl p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-muted-foreground text-sm">Location</p>
                <p className="font-medium">{contactInfo.location}</p>
              </div>
            </div>
          </div>

          {/* Right column - social & availability */}
          <div className="space-y-6">
            {/* Social Links */}
            <div className="glow-card rounded-xl p-6">
              <h3 className="font-semibold mb-4">Connect with me</h3>
              <div className="flex gap-4">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#0077B5] transition-all hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Availability Badge */}
            <div className="neon-border rounded-xl p-6 bg-card/50">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium">Available for new projects</span>
              </div>
              <p className="text-muted-foreground text-sm mt-2">
                Currently open to freelance work and internship opportunities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
