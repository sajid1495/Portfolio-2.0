'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

const taglines = [
  'CS Undergrad Student',
  'ML and CV Enthusiast',
  'Aspiring Backend Developer',
]

function TypewriterText() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentTagline = taglines[currentIndex]
    const typingSpeed = isDeleting ? 50 : 100
    const pauseDuration = 2000

    if (!isDeleting && displayText === currentTagline) {
      // Pause before deleting
      const timeout = setTimeout(() => setIsDeleting(true), pauseDuration)
      return () => clearTimeout(timeout)
    }

    if (isDeleting && displayText === '') {
      // Move to next tagline
      setIsDeleting(false)
      setCurrentIndex((prev) => (prev + 1) % taglines.length)
      return
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentTagline.substring(0, displayText.length - 1))
      } else {
        setDisplayText(currentTagline.substring(0, displayText.length + 1))
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex])

  return (
    <span className="inline-block min-w-[320px] md:min-w-[450px] whitespace-nowrap">
      {displayText}
      <span className="animate-pulse text-primary-600 dark:text-primary-400">|</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle gradient overlay - transparent to show geometric background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 via-transparent to-blue-50/50 dark:from-gray-900/50 dark:via-transparent dark:to-gray-800/50" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-48 items-center">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left order-2 lg:order-1 lg:pl-0">
            {/* Name */}
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4"
            >
              Hi, I&apos;m{' '}
              <span className="relative group inline-block">
                <span className="text-pink-500 cursor-pointer">
                  Sajid.
                </span>
                <span className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-lg md:text-xl px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-lg z-20">
                  Md. Sajedul Islam
                </span>
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl md:text-3xl lg:text-4xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0 h-10 md:h-12"
            >
              <TypewriterText />
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8"
            >
              <a 
                href="https://drive.google.com/file/d/1xmEJjR1DWEZYWW7OzVOMwho_bKivveC9/view?usp=sharing" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 hover:bg-transparent hover:text-primary-600 dark:hover:text-primary-400 border-2 border-primary-600 hover:shadow-lg"
              >
                View Resume
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex items-center justify-center lg:justify-start gap-4"
            >
              <a
                href="https://github.com/sajidruetcse21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sajidruetcse21"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:m.sajid1495@gmail.com"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </div>

          {/* Right Side - Photo Space */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Photo Container */}
              <div className="w-72 h-72 sm:w-80 sm:h-80 md:w-[360px] md:h-[360px] lg:w-[400px] lg:h-[400px] xl:w-[440px] xl:h-[440px] rounded-2xl bg-gradient-to-br from-primary-400 to-blue-500 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img src="/images/profile.png" alt="Sajid" className="w-full h-full object-cover" />
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary-400/30 dark:bg-primary-500/20 rounded-2xl blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-blue-400/30 dark:bg-blue-500/20 rounded-2xl blur-xl" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-2 left-1/2 -translate-x-1/2"
        >
          <a href="#about" className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
            <span className="text-sm mb-2">Scroll Down</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
