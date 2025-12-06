import { useState } from 'react';
import { ExternalLink, Github, X, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

const projects = [
  {
    id: 1,
    title: 'Jiremali Samaj App',
    category: 'Mobile App',
    description: 'A community app with real-time chat and post sharing functionality. Successfully published on Google Play Store.',
    fullDescription: 'Built during my internship, this community-focused application enables real-time communication and content sharing among members. Features include instant messaging, post creation with media support, user authentication, and push notifications.',
    tech: ['Flutter', 'Firebase', 'Firestore', 'FCM'],
    image: '🏠',
    isLive: true,
    whatILearned: 'Working on a production app taught me about handling real-world scenarios, optimizing for different devices, and the importance of user feedback in development.',
  },
  {
    id: 2,
    title: 'Soci-Go App',
    category: 'UI/UX',
    description: 'A responsive social media application UI with modern design patterns and smooth animations.',
    fullDescription: 'A beautifully designed social media application featuring a complete feed system, stories, messaging interface, and profile management. Built with attention to responsive design principles.',
    tech: ['Flutter', 'Dart', 'Custom Widgets'],
    image: '📱',
    isLive: false,
    whatILearned: 'This project enhanced my UI/UX skills significantly, teaching me about creating intuitive navigation and engaging visual hierarchies.',
  },
  {
    id: 3,
    title: 'CRUD App for Books',
    category: 'Full Stack',
    description: 'A complete book management system with REST API integration and Provider state management.',
    fullDescription: 'Full-featured CRUD application for managing a book collection. Includes search, filtering, categorization, and persistent storage using REST APIs with clean architecture patterns.',
    tech: ['Flutter', 'REST API', 'Provider', 'SQLite'],
    image: '📚',
    isLive: false,
    whatILearned: 'Mastered state management with Provider and understood the importance of clean architecture in maintaining scalable applications.',
  },
  {
    id: 4,
    title: 'Weather App',
    category: 'Mobile App',
    description: 'Real-time weather application with location-based forecasts and offline caching.',
    fullDescription: 'A weather application that provides accurate forecasts using live API data. Features include location detection, 7-day forecasts, weather alerts, and offline mode with cached data.',
    tech: ['Flutter', 'OpenWeather API', 'Geolocator', 'Hive'],
    image: '🌤️',
    isLive: false,
    whatILearned: 'Learned about working with external APIs, handling network states, and implementing effective caching strategies.',
  },
  {
    id: 5,
    title: 'Hand Gesture Mouse Control',
    category: 'ML/AI',
    description: 'Control your computer mouse using hand gestures with computer vision.',
    fullDescription: 'An innovative project that uses computer vision to track hand movements and translate them into mouse actions. Supports gestures for clicking, scrolling, and cursor movement.',
    tech: ['Python', 'OpenCV', 'Mediapipe', 'PyAutoGUI'],
    image: '🖐️',
    isLive: false,
    whatILearned: 'Gained hands-on experience with computer vision libraries and real-time gesture recognition algorithms.',
  },
  {
    id: 6,
    title: 'Genetic Disease Risk Predictor',
    category: 'ML Web App',
    description: 'A machine learning web application that predicts genetic disease risks.',
    fullDescription: 'A Streamlit-based web application that uses machine learning models to predict the probability of genetic diseases based on user inputs and family history data.',
    tech: ['Python', 'Streamlit', 'Scikit-learn', 'Pandas'],
    image: '🧬',
    isLive: false,
    whatILearned: 'Understood the end-to-end ML pipeline from data preprocessing to model deployment in a user-friendly web interface.',
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Mobile App', 'ML/AI', 'Full Stack', 'UI/UX'];
  
  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden cyber-grid">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary text-sm font-medium tracking-widest uppercase mb-4 block">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work across mobile development, machine learning, and full-stack applications
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group glow-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image/Emoji Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                  {project.image}
                </span>
                
                {/* Live Badge */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Live on Play Store
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-primary text-xs font-medium uppercase tracking-wider">
                    {project.category}
                  </span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl">{selectedProject?.image}</span>
              {selectedProject?.isLive && (
                <span className="flex items-center gap-1 bg-primary/20 text-primary px-3 py-1 rounded-full text-xs font-medium">
                  <Star className="w-3 h-3" />
                  Live on Play Store
                </span>
              )}
            </div>
            <DialogTitle className="text-2xl">{selectedProject?.title}</DialogTitle>
            <span className="text-primary text-sm font-medium">{selectedProject?.category}</span>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h4 className="font-semibold mb-2">About the Project</h4>
              <p className="text-muted-foreground">{selectedProject?.fullDescription}</p>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="neon-border rounded-xl p-4 bg-card/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">💡</span>
                What I Learned
              </h4>
              <p className="text-muted-foreground text-sm">{selectedProject?.whatILearned}</p>
            </div>

            <div className="flex gap-3 pt-2">
              <Button variant="outline" className="flex-1 border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground">
                <Github className="w-4 h-4 mr-2" />
                View Code
              </Button>
              <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Live Demo
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
