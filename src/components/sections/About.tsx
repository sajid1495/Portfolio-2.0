'use client'

import AnimatedSection from '../AnimatedSection'
import { User, MapPin, Calendar, Briefcase, Cake, Heart, Music, BookOpen } from 'lucide-react'

export default function About() {
  const stats = [
    { label: 'Projects Completed', value: '10+' },
    { label: 'Technologies', value: '15+' },
    { label: 'GitHub Repos', value: '20+' },
    { label: 'Cups of Coffee', value: '∞' },
  ]

  return (
    <section id="about" className="bg-gray-50 dark:bg-gray-800/50">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">About Me</h2>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image/Avatar Side */}
          <AnimatedSection delay={0.2}>
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-primary-400 to-blue-500 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="/images/profile.png" alt="Sajid" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-200 dark:bg-primary-800 rounded-full blur-xl opacity-60" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200 dark:bg-blue-800 rounded-full blur-xl opacity-60" />
            </div>
          </AnimatedSection>

          {/* Content Side */}
          <AnimatedSection delay={0.4}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-pink-500">
                A Passionate Tech Enthusiast & Aspiring Software Engineer
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                Hello! I&apos;m <span className="text-pink-500 font-semibold">Sajid</span>, an undergraduate student in the Department of Computer Science and Engineering at RUET. As a passionate tech enthusiast, I am continually honing my skills by diving deep into advanced topics like Machine Learning, Computer Vision, and Data Structures & Algorithms.
              </p>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
                My experience spans Flutter app development and frontend web development, providing me with a solid foundation in building robust applications. I aspire to become a software engineer after graduation, where I can leverage my knowledge to create innovative solutions.
              </p>


              {/* Quick Info */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <MapPin className="w-5 h-5 text-primary-600" />
                  <span>Rajshahi, Bangladesh</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Cake className="w-5 h-5 text-primary-600" />
                  <span>September 22, 2002</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <span>CSE Student @ RUET</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                  <Heart className="w-5 h-5 text-primary-600" />
                  <span>Open to Opportunities</span>
                </div>
              </div>

              <a
                href="https://drive.google.com/file/d/1xmEJjR1DWEZYWW7OzVOMwho_bKivveC9/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block btn-primary mt-4"
              >
                Download Resume
              </a>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <AnimatedSection delay={0.6}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="card text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
