import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { clientTechStack, contactInfo, socialLinks } from "@/data/content";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

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
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or via my direct contact channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start max-w-6xl mx-auto">
          {/* Left: Contact Info - 2 columns on lg */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-primary" />
              Direct Contact
            </h3>
            
            <div className="grid gap-4">
              {/* Email Card */}
              <a
                href={`mailto:${contactInfo.email}`}
                className="glow-card rounded-xl p-5 flex items-center gap-4 group transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Email</p>
                  <p className="font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                    {contactInfo.email}
                  </p>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={`https://wa.me/${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="glow-card rounded-xl p-5 flex items-center gap-4 group transition-all hover:-translate-y-1 border-green-500/10 hover:border-green-500/30"
              >
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors">
                  <MessageSquare className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">WhatsApp</p>
                  <p className="font-medium group-hover:text-green-500 transition-colors text-sm md:text-base">
                    Direct Message
                  </p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${contactInfo.phone.replace(/[^0-9]/g, "")}`}
                className="glow-card rounded-xl p-5 flex items-center gap-4 group transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-muted-foreground text-xs uppercase tracking-wider">Phone</p>
                  <p className="font-medium group-hover:text-primary transition-colors text-sm md:text-base">
                    {contactInfo.phone}
                  </p>
                </div>
              </a>
            </div>

            {/* Social & Location */}
            <div className="grid sm:grid-cols-2 gap-4 mt-8">
              <div className="glow-card rounded-xl p-5">
                <MapPin className="w-5 h-5 text-primary mb-3" />
                <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">Location</p>
                <p className="text-sm font-medium">{contactInfo.location}</p>
              </div>

              <div className="glow-card rounded-xl p-5">
                <div className="flex gap-4">
                  <a
                    href={socialLinks.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground transition-all hover:scale-110"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:text-[#0077B5] transition-all hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
                <p className="text-muted-foreground text-xs uppercase tracking-wider mt-4">Social Profiles</p>
              </div>
            </div>
            
            {/* Availability */}
            <div className="neon-border rounded-xl p-6 bg-card/50 mt-6 overflow-hidden relative">
              <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-sm">Available for new projects</span>
              </div>
              <p className="text-muted-foreground text-xs mt-2 relative z-10">
                Open to full-stack, mobile, and AI/ML opportunities.
              </p>
            </div>
          </div>

          {/* Right: Contact Form - 3 columns on lg */}
          <div className="lg:col-span-3">
            <div className="glow-card rounded-2xl p-8 relative">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-3">
                <Send className="w-5 h-5 text-primary" />
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-muted-foreground ml-1">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="John Doe"
                      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-muted-foreground ml-1">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="john@example.com"
                      className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-muted-foreground ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    required
                    placeholder="Project Inquiry"
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-muted-foreground ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-6 rounded-xl font-semibold text-base transition-all duration-300 ${
                    isSubmitted ? "bg-green-500 hover:bg-green-600" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : isSubmitted ? (
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
