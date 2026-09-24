import { useState, useEffect } from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { projects, projectCategories, Project } from '@/data/content';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [showLiveDemo, setShowLiveDemo] = useState(false);
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);

  useEffect(() => {
    setShowLiveDemo(false);
  }, [activeModalProject]);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-16 border-t border-slate-200/70 dark:border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase block mb-1">
            Portfolio
          </span>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
            Featured <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-1">
            A showcase of my work across mobile development, machine learning, and full-stack applications
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {projectCategories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-white/80 dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((proj) => {
            const hasScreenshot = proj.screenshots && proj.screenshots.length > 0;
            return (
              <div
                key={proj.id}
                onClick={() => setActiveModalProject(proj)}
                className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border border-slate-200/90 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-700/60 transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Visual Preview */}
                  <div className="relative h-48 bg-slate-100 dark:bg-slate-800 overflow-hidden flex items-center justify-center">
                    {hasScreenshot ? (
                      <img
                        src={proj.screenshots![0]}
                        alt={proj.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-blue-50 via-sky-50 to-slate-100 dark:from-slate-800 dark:via-slate-850 dark:to-slate-900 flex items-center justify-center">
                        <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                          {proj.icon}
                        </span>
                      </div>
                    )}

                    {proj.isLive ? (
                      <div className="absolute top-3 left-3 bg-emerald-500 text-white text-[11px] font-semibold px-2.5 py-1 rounded-full shadow-md flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        {proj.trustTag || 'Live'}
                      </div>
                    ) : proj.trustTag ? (
                      <div className="absolute top-3 left-3 bg-slate-900/80 dark:bg-slate-800/90 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-full shadow-md">
                        {proj.trustTag}
                      </div>
                    ) : null}
                  </div>

                  {/* Information */}
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {proj.title}
                      </h3>
                      <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                      {proj.description}
                    </p>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="px-5 pb-5 pt-2 flex flex-wrap gap-1.5">
                  {proj.tech.slice(0, 4).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-[11px] font-medium rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                  {proj.tech.length > 4 && (
                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-[11px] font-medium rounded-md">
                      +{proj.tech.length - 4}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal Preview */}
      <Dialog open={!!activeModalProject} onOpenChange={() => setActiveModalProject(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">{activeModalProject?.icon}</span>
              <DialogTitle className="text-xl font-bold text-slate-900 dark:text-white">
                {activeModalProject?.title}
              </DialogTitle>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">
                {activeModalProject?.category}
              </span>
              {activeModalProject?.trustTag && (
                <span className="text-[11px] bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-0.5 rounded-full font-medium">
                  {activeModalProject.trustTag}
                </span>
              )}
            </div>
          </DialogHeader>

          <div className="space-y-5 pt-3">
            {/* Visual preview in modal */}
            {activeModalProject?.screenshots && activeModalProject.screenshots.length > 0 ? (
              <div className="rounded-xl overflow-hidden h-56 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800">
                <img
                  src={activeModalProject.screenshots[0]}
                  alt={activeModalProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : null}

            {/* Full description */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1.5">About the Project</h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed whitespace-pre-line">
                {activeModalProject?.fullDescription}
              </p>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-1.5">
                {activeModalProject?.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-lg"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* What I Learned */}
            {activeModalProject?.whatILearned && (
              <div className="rounded-xl p-4 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-800">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm mb-1 flex items-center gap-2">
                  <span>💡</span> What I Learned
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeModalProject.whatILearned}
                </p>
              </div>
            )}

            {/* Expandable Live Demo/Screenshots */}
            {showLiveDemo &&
              (activeModalProject?.videoUrl ||
                (activeModalProject?.screenshots && activeModalProject.screenshots.length > 0)) && (
                <div className="space-y-3 pt-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Screenshots & Media</h4>
                  <div className="max-h-80 overflow-y-auto space-y-3 pr-1">
                    {activeModalProject?.videoUrl && (
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800">
                        <video controls className="w-full max-h-72" src={activeModalProject.videoUrl}>
                          Your browser does not support the video tag.
                        </video>
                      </div>
                    )}
                    {activeModalProject?.screenshots && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeModalProject.screenshots.map((src, idx) => (
                          <div
                            key={idx}
                            className="h-44 bg-slate-100 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden cursor-zoom-in hover:border-blue-300 dark:hover:border-blue-700"
                            onClick={() => setZoomedImage(src)}
                          >
                            <img
                              src={src}
                              alt={`Screenshot ${idx + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

            {/* Actions */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-3">
              {activeModalProject?.githubLink && (
                <Button asChild variant="outline" className="flex-1 rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200">
                  <a
                    href={activeModalProject.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Code2 className="w-4 h-4" /> View Code
                  </a>
                </Button>
              )}

              {(activeModalProject?.videoUrl ||
                (activeModalProject?.screenshots && activeModalProject.screenshots.length > 0)) && (
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 rounded-xl border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
                  onClick={() => setShowLiveDemo((prev) => !prev)}
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  {showLiveDemo ? 'Hide Media' : 'View Screenshots'}
                </Button>
              )}

              {activeModalProject?.liveLink && (
                <Button asChild className="flex-1 bg-blue-600 hover:bg-blue-700 text-white rounded-xl">
                  <a
                    href={activeModalProject.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5"
                  >
                    Live Preview <ExternalLink className="w-4 h-4" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Zoomed Image Dialog */}
      <Dialog open={!!zoomedImage} onOpenChange={() => setZoomedImage(null)}>
        <DialogContent className="max-w-3xl bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 p-4 rounded-2xl">
          {zoomedImage && (
            <img
              src={zoomedImage}
              alt="Zoomed screenshot"
              className="max-w-full max-h-[80vh] object-contain mx-auto rounded-xl"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
