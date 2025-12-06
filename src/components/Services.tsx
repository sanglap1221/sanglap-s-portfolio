import { 
  Smartphone, 
  Server, 
  Link, 
  Zap, 
  Layout 
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Flutter App Development',
    description: 'Building beautiful, natively compiled applications for Android and iOS from a single codebase.',
    features: ['Cross-Platform', 'Native Performance', 'Custom UI'],
  },
  {
    icon: Server,
    title: 'Firebase Backend Setup',
    description: 'Complete backend infrastructure using Firebase including authentication, database, and cloud functions.',
    features: ['Authentication', 'Firestore DB', 'Cloud Storage'],
  },
  {
    icon: Link,
    title: 'REST API Integration',
    description: 'Seamless integration of third-party APIs and services into your mobile applications.',
    features: ['HTTP Clients', 'Data Parsing', 'Error Handling'],
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Improving app performance, fixing bugs, and ensuring smooth user experience.',
    features: ['Speed Boost', 'Bug Fixing', 'Code Review'],
  },
  {
    icon: Layout,
    title: 'UI to Flutter Conversion',
    description: 'Converting Figma, Adobe XD, or any UI designs into pixel-perfect Flutter screens.',
    features: ['Responsive', 'Pixel Perfect', 'Animations'],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional mobile app development services tailored to bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Neon Border Effect */}
                <div className="absolute -inset-px bg-gradient-to-r from-primary via-secondary to-primary rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
                
                <div className="relative glow-card rounded-2xl p-8 h-full bg-card">
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Arrow */}
                  <div className="absolute top-8 right-8 w-10 h-10 rounded-full border border-border flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:border-primary/50">
                    <svg
                      className="w-4 h-4 text-primary -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
