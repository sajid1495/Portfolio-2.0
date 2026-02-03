'use client'

import AnimatedSection from '../AnimatedSection'
import { GraduationCap, Calendar, MapPin } from 'lucide-react'

const educationData = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering',
    institution: 'Rajshahi University of Engineering & Technology (RUET)',
    location: 'Rajshahi, Bangladesh',
    period: '2023 - 2027(Expected)',
    description: 'Specialized in Artificial Intelligence and Machine Learning.',
    gpa: 'CGPA: 3.40/4.00',
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'New Government Degree College',
    location: 'Rajshahi, Bangladesh',
    period: '2019 - 2021',
    description: 'Science major with a focus on Mathematics and Physics. Graduated with scholarship for academic excellence.',
    gpa: 'GPA: 5.00/5.00',
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Baigacha High School',
    location: 'Rajshahi, Bangladesh',
    period: '2014 - 2019',
    description: 'Top of the class. Graduated with scholarship for academic excellence.',
    gpa: 'GPA: 5.00/5.00',
  },
]

export default function Education() {
  return (
    <section id="education">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="section-title">Education</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12">
            My academic journey that shaped my skills and knowledge in technology..
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-blue-500" />

          <div className="space-y-12">
            {educationData.map((edu, index) => (
              <AnimatedSection key={index} delay={index * 0.2}>
                <div className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary-500 border-4 border-white dark:border-gray-900 shadow-lg z-10" />

                  {/* Content Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="card">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                          <GraduationCap className="w-6 h-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold">{edu.degree}</h3>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {edu.institution}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{edu.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        {edu.description}
                      </p>

                      <div className="inline-block px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-sm font-medium">
                        {edu.gpa}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
