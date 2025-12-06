/**
 * ============================================
 * PROJECTS COMPONENT
 * ============================================
 * 
 * Displays your portfolio projects in a filterable grid.
 * Features:
 * - Filter buttons to show projects by category
 * - Project cards with image, title, description, and tech tags
 * - Modal popup with full project details
 * 
 * TO EDIT:
 * - Add/remove/edit projects in src/data/content.ts (projects array)
 * - Edit categories in src/data/content.ts (projectCategories array)
 */

import { useState } from 'react';
import { ExternalLink, Github, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { projects, projectCategories, Project } from '@/data/content';

const Projects = () => {
  // State to track which project is selected for the modal
  // null means no modal is open
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // State to track the current filter category
  const [activeFilter, setActiveFilter] = useState('All');

  // Filter projects based on the selected category
  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative overflow-hidden cyber-grid">
      {/* Background gradient */}
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group glow-card rounded-2xl overflow-hidden cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Project Image/Icon Placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center overflow-hidden">
                <span className="text-6xl group-hover:scale-125 transition-transform duration-500">
                  {project.icon}
                </span>
                
                {/* Live Badge - shows if project is published */}
                {project.isLive && (
                  <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    <Star className="w-3 h-3" />
                    Live on Play Store
                  </div>
                )}
              </div>

              {/* Project Info */}
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

                {/* Tech Tags - show first 3 */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                  {/* Show "+X" if there are more than 3 technologies */}
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
      {/* This opens when a project is clicked */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-2xl bg-card border-border">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-4xl">{selectedProject?.icon}</span>
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
            {/* Full Description */}
            <div>
              <h4 className="font-semibold mb-2">About the Project</h4>
              <p className="text-muted-foreground">{selectedProject?.fullDescription}</p>
            </div>

            {/* Technologies Used */}
            <div>
              <h4 className="font-semibold mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject?.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            <div className="neon-border rounded-xl p-4 bg-card/50">
              <h4 className="font-semibold mb-2 flex items-center gap-2">
                <span className="text-lg">💡</span>
                What I Learned
              </h4>
              <p className="text-muted-foreground text-sm">{selectedProject?.whatILearned}</p>
            </div>

            {/* Action Buttons */}
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
