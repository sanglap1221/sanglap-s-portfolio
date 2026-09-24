import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageSquare, Send, CheckCircle2 } from 'lucide-react';
import { contactInfo, socialLinks } from '@/data/content';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const [formSent, setFormSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSent(true);
      setTimeout(() => setFormSent(false), 4000);
    }, 1000);
  };

  const whatsappPhone = contactInfo.phone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-16 border-t border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Let's Work <span className="text-blue-600 dark:text-blue-400">Together</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            Have a project in mind or want to collaborate? Feel free to reach out through the form below or via my direct contact channels.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Direct channels cards */}
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href={`mailto:${contactInfo.email}`}
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5 hover:border-blue-300 dark:hover:border-slate-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="overflow-hidden">
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Email</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white truncate">{contactInfo.email}</div>
              </div>
            </a>

            {/* Location */}
            <div className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Location</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{contactInfo.location}</div>
              </div>
            </div>

            {/* WhatsApp */}
            <a
              href={`https://wa.me/${whatsappPhone}`}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">WhatsApp</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">Direct Message</div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5 hover:border-slate-400 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0">
                <Github className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">GitHub</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">@sanglap1221</div>
              </div>
            </a>

            {/* Phone */}
            <a
              href={`tel:${whatsappPhone}`}
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5 hover:border-blue-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">Phone</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">{contactInfo.phone}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noreferrer"
              className="border border-slate-200/90 dark:border-slate-800 rounded-2xl p-4 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm flex items-center gap-3.5 hover:border-blue-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase">LinkedIn</div>
                <div className="text-xs font-semibold text-slate-900 dark:text-white">/in/sanglap-ghosh</div>
              </div>
            </a>
          </div>

          {/* Contact form on right */}
          <div className="lg:col-span-5 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-xs">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600 text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600 text-slate-900 dark:text-white placeholder:text-slate-400"
                />
              </div>
              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-50 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-600 text-slate-900 dark:text-white placeholder:text-slate-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-5 rounded-xl font-medium text-sm transition-all ${
                  formSent
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : formSent ? (
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> Message Sent!
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
