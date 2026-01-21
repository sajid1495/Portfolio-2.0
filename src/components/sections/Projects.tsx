'use client'

import AnimatedSection from '../AnimatedSection'
import { ExternalLink, Github, Folder } from 'lucide-react'

const projects = [
  {
    title: 'Real-Time Attendance System with Face Recognition',
    description: 'A modern, portable attendance management system powered by facial recognition technology. Features real-time face detection, student management, CSV export for attendance records, and a clean Tkinter-based GUI. Built with privacy in mind — all data stored locally with SQLite.',
    image: '/images/project1.png',
    technologies: ['Python', 'OpenCV', 'SQLite', 'Tkinter'],
    liveUrl: null,
    githubUrl: 'https://github.com/sajid1495/Real-Time-Attendance-SQLite',
    featured: true,
  },
  {
    title: 'Insurance Premium Predictor API',
    description: 'A FastAPI-based REST API that predicts insurance premium categories (low, medium, high) using machine learning. Features input validation with Pydantic, auto-computed fields (BMI, lifestyle risk, age group, city tier), confidence scores, and Docker support. Available on Docker Hub.',
    image: '/images/project2.png',
    technologies: ['Python', 'FastAPI', 'Scikit-learn', 'Docker', 'Pydantic'],
    liveUrl: null,
    githubUrl: 'https://github.com/sajid1495/Insurance-Premium-Predictor',
    featured: true,
  },
  {
    title: 'Weekly Routine Manager',
    description: 'An Android app designed to help you manage your weekly routines effectively. Features a user-friendly interface with unique and handy features tailored for organizing weekly tasks and routines, making schedule management a breeze.',
    image: '/images/project3.png',
    technologies: ['Flutter', 'Dart', 'Hive', 'Android'],
    liveUrl: null,
    githubUrl: 'https://github.com/sajid1495/Weekly-Routine-Manager',
    featured: true,
  },
  {
    title: 'Blog Platform',
    description: 'A modern blogging platform with markdown support, syntax highlighting, and SEO optimization.',
    image: null,
    technologies: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/sajid1495/blog',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'A CLI tool that generates beautiful portfolio websites from a simple configuration file.',
    image: null,
    technologies: ['Node.js', 'CLI', 'Handlebars', 'SCSS'],
    liveUrl: null,
    githubUrl: 'https://github.com/sajid1495/portfolio-gen',
    featured: false,
  },
  {
    title: 'Real-time Chat App',
    description: 'A real-time chat application with private messaging, group chats, and file sharing capabilities.',
    image: null,
    technologies: ['React', 'Firebase', 'WebRTC', 'Material UI'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com/sajid1495/chatapp',
    featured: false,
  },
]

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Featured Projects</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </AnimatedSection>

        {/* Featured Projects */}
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project, index) => (
            <AnimatedSection key={index} delay={index * 0.2}>
              <div className={`card overflow-hidden grid md:grid-cols-2 gap-6 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                {/* Project Image */}
                <div className={`relative aspect-video bg-gradient-to-br from-primary-400 to-blue-500 rounded-xl flex items-center justify-center overflow-hidden ${
                  index % 2 === 1 ? 'md:order-2' : ''
                }`}>
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <>
                      <Folder className="w-16 h-16 text-white/50" />
                      <div className="absolute inset-0 bg-black/20 rounded-xl" />
                    </>
                  )}
                </div>

                {/* Project Info */}
                <div className={`flex flex-col justify-center ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-justify">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                        <span>Code</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Other Projects */}
        <AnimatedSection>
          <h3 className="text-2xl font-bold text-center mb-8">Other Noteworthy Projects</h3>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <AnimatedSection key={index} delay={0.1 * index}>
              <div className="card h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <Folder className="w-10 h-10 text-primary-600 dark:text-primary-400" />
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow text-justify">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs text-gray-500 dark:text-gray-400"
                    >
                      {tech}
                      {techIndex < 2 && ' •'}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
