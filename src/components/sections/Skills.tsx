'use client'

import AnimatedSection from '../AnimatedSection'
import { 
  Code2, 
  Globe, 
  Smartphone,
  Wrench,
  Server,
  Brain
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: [
      { name: 'Python', level: 85 },
      { name: 'C++', level: 75 },
      { name: 'Dart', level: 80 },
      { name: 'JavaScript', level: 75 },
    ],
  },
  {
    title: 'Backend & ML Deployment',
    icon: Server,
    skills: [
      { name: 'FastAPI', level: 70 },
      { name: 'Docker', level: 70 },
      { name: 'REST APIs', level: 75 },
      { name: 'ML Model Deployment', level: 65 },
    ],
  },
  {
    title: 'ML & Computer Vision',
    icon: Brain,
    skills: [
      { name: 'Machine Learning', level: 70 },
      { name: 'Computer Vision', level: 70 },
      { name: 'OpenCV', level: 65 },
      { name: 'NumPy/Pandas', level: 75 },
    ],
  },
  {
    title: 'Web Development',
    icon: Globe,
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 75 },
      { name: 'React/Next.js', level: 70 },
    ],
  },
  {
    title: 'Mobile Development',
    icon: Smartphone,
    skills: [
      { name: 'Flutter', level: 85 },
      { name: 'Dart', level: 80 },
      { name: 'Android Studio', level: 75 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: Wrench,
    skills: [
      { name: 'Git/GitHub', level: 85 },
      { name: 'VS Code', level: 90 },
      { name: 'Linux', level: 70 },
    ],
  },
]

// Tech stack with image icons
const techStack = [
  { name: 'C++', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Python', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'FastAPI', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
  { name: 'OpenCV', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg' },
  { name: 'GitHub', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'VS Code', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Dart', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
  { name: 'Flutter', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            A collection of technologies and tools I&apos;ve worked with and continue to learn...
          </p>
        </AnimatedSection>

        {/* Tech Stack Icons */}
        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <img 
                  src={tech.image} 
                  alt={tech.name} 
                  className="w-10 h-10 group-hover:scale-110 transition-transform"
                />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <AnimatedSection key={categoryIndex} delay={categoryIndex * 0.1}>
              <div className="card h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                    <category.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-gray-500 dark:text-gray-400 text-sm">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary-500 to-blue-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
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
