/**
 * ============================================
 * CONTACT COMPONENT
 * ============================================
 * 
 * The contact section with:
 * - Your contact information (email, phone, location)
 * - Social media links
 * - A contact form
 * 
 * TO EDIT:
 * - Change contact info in src/data/content.ts (contactInfo)
 * - Change social links in src/data/content.ts (socialLinks)
 */

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { contactInfo, socialLinks } from '@/data/content';

const Contact = () => {
  // Toast hook for showing success messages
  const { toast } = useToast();
  
  // Form state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  /**
   * Handle form submission
   * Currently simulates sending (no real backend)
   * You can connect this to a real email service later
   */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page reload
    setIsSubmitting(true);

    // Simulate sending (wait 1.5 seconds)
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Show success toast
    toast({
      title: "Message Sent! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  /**
   * Update form data when user types
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            Let's Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            
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
              href={`tel:${contactInfo.phone.replace(/-/g, '')}`}
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

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-3">
            <div className="glow-card rounded-2xl p-8">
              
              {/* Show success message after submission */}
              {isSubmitted ? (
                <div className="h-full flex flex-col items-center justify-center py-16 animate-scale-in">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <CheckCircle className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground text-center">
                    Your message has been sent successfully.
                    <br />
                    I'll get back to you soon!
                  </p>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Your Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-muted border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      required
                      className="bg-muted border-border focus:border-primary"
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="bg-muted border-border focus:border-primary resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-base font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        {/* Loading spinner */}
                        <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
