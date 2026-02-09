'use client'

import { useEffect, useRef, useState } from 'react'

interface SmokeParticle {
  id: number
  x: number
  y: number
  direction: 'up' | 'down'
  opacity: number
  drift: number
  createdAt: number
}

export default function TouchScrollEffect() {
  const [particles, setParticles] = useState<SmokeParticle[]>([])
  const [isTouchDevice, setIsTouchDevice] = useState(false)
  const lastTouchY = useRef<number | null>(null)
  const lastTouchX = useRef<number | null>(null)
  const particleId = useRef(0)

  useEffect(() => {
    // Check if it's a touch device
    const checkTouchDevice = () => {
      setIsTouchDevice(
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(pointer: coarse)').matches
      )
    }
    
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    
    return () => window.removeEventListener('resize', checkTouchDevice)
  }, [])

  useEffect(() => {
    if (!isTouchDevice) return

    const handleTouchStart = (e: TouchEvent) => {
      lastTouchY.current = e.touches[0].clientY
      lastTouchX.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (lastTouchY.current === null) return

      const currentY = e.touches[0].clientY
      const currentX = e.touches[0].clientX
      const deltaY = currentY - lastTouchY.current

      // Only create particles if there's significant movement
      if (Math.abs(deltaY) > 8) {
        const direction: 'up' | 'down' = deltaY < 0 ? 'up' : 'down'
        
        // Create slim smoke-like particles
        const newParticle: SmokeParticle = {
          id: particleId.current++,
          x: currentX + (Math.random() - 0.5) * 20,
          y: currentY,
          direction,
          opacity: 0.7 + Math.random() * 0.3,
          drift: (Math.random() - 0.5) * 1.5,
          createdAt: Date.now(),
        }

        setParticles(prev => [...prev.slice(-30), newParticle])
        lastTouchY.current = currentY
        lastTouchX.current = currentX
      }
    }

    const handleTouchEnd = () => {
      lastTouchY.current = null
      lastTouchX.current = null
    }

    document.addEventListener('touchstart', handleTouchStart, { passive: true })
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd, { passive: true })

    return () => {
      document.removeEventListener('touchstart', handleTouchStart)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
    }
  }, [isTouchDevice])

  // Animate and clean up particles
  useEffect(() => {
    if (particles.length === 0) return

    const animationFrame = requestAnimationFrame(() => {
      const now = Date.now()
      setParticles(prev => 
        prev
          .map(p => ({
            ...p,
            y: p.y + (p.direction === 'up' ? -3 : 3),
            x: p.x + p.drift,
            opacity: Math.max(0, p.opacity - 0.025),
          }))
          .filter(p => p.opacity > 0 && now - p.createdAt < 1500)
      )
    })

    return () => cancelAnimationFrame(animationFrame)
  }, [particles])

  if (!isTouchDevice) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute"
          style={{
            left: particle.x - 20,
            top: particle.y - 60,
            opacity: particle.opacity,
          }}
        >
          {/* Mushroom head */}
          <div
            className="absolute blur-md rounded-full"
            style={{
              left: -10,
              top: particle.direction === 'up' ? 0 : 'auto',
              bottom: particle.direction === 'down' ? 0 : 'auto',
              width: 60,
              height: 35,
              background: particle.direction === 'up'
                ? 'radial-gradient(ellipse at center, rgba(236, 72, 153, 0.8), rgba(139, 92, 246, 0.5), transparent)'
                : 'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.8), rgba(59, 130, 246, 0.5), transparent)',
            }}
          />
          {/* Smoke stem */}
          <div
            className="absolute blur-sm"
            style={{
              left: 5,
              top: particle.direction === 'up' ? 25 : 0,
              width: 30,
              height: 60,
              borderRadius: '40%',
              background: particle.direction === 'up'
                ? 'linear-gradient(to bottom, rgba(139, 92, 246, 0.6), rgba(236, 72, 153, 0.3), transparent)'
                : 'linear-gradient(to top, rgba(59, 130, 246, 0.6), rgba(139, 92, 246, 0.3), transparent)',
            }}
          />
        </div>
      ))}
    </div>
  )
}
