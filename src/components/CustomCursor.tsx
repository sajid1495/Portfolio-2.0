'use client'

import { useEffect, useState, useCallback, useRef } from 'react'

interface TrailDot {
  x: number
  y: number
  id: number
}

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [trail, setTrail] = useState<TrailDot[]>([])
  const trailIdRef = useRef(0)

  const updateCursorPosition = useCallback((e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY })
    setIsVisible(true)

    // Add new trail dot with unique id
    trailIdRef.current += 1
    setTrail((prev) => [
      { x: e.clientX, y: e.clientY, id: trailIdRef.current },
      ...prev.slice(0, 8),
    ])
  }, [])

  const handleMouseDown = useCallback(() => setIsClicking(true), [])
  const handleMouseUp = useCallback(() => setIsClicking(false), [])
  const handleMouseLeave = useCallback(() => setIsVisible(false), [])

  useEffect(() => {
    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('cursor-pointer') ||
        window.getComputedStyle(target).cursor === 'pointer'

      setIsHovering(!!isClickable)
    }

    document.addEventListener('mousemove', updateCursorPosition)
    document.addEventListener('mouseover', handleHoverCheck)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    return () => {
      document.removeEventListener('mousemove', updateCursorPosition)
      document.removeEventListener('mouseover', handleHoverCheck)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [updateCursorPosition, handleMouseLeave, handleMouseDown, handleMouseUp])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  const colors = ['#06b6d4', '#a855f7', '#f472b6', '#22d3ee', '#c084fc']

  return (
    <>
      {/* Glittering trail - hide when hovering over clickable */}
      {!isHovering &&
        trail.map((dot, index) => (
          <div
            key={dot.id}
            className="pointer-events-none fixed z-[9998]"
            style={{
              left: dot.x,
              top: dot.y,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div
              className="rounded-full animate-trail-fade"
              style={{
                width: `${4 - index * 0.3}px`,
                height: `${4 - index * 0.3}px`,
                background: colors[index % colors.length],
                boxShadow: `0 0 ${6 - index * 0.5}px ${colors[index % colors.length]}`,
                animationDelay: `${index * 20}ms`,
              }}
            />
          </div>
        ))}

      {/* Main cursor - hide when hovering over clickable */}
      {!isHovering && (
        <div
          className={`pointer-events-none fixed z-[9999] ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            left: position.x,
            top: position.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* Diamond cursor */}
          <div
            className={`transition-transform duration-150 ${
              isClicking ? 'scale-75' : 'scale-100'
            }`}
            style={{
              width: '16px',
              height: '16px',
              transform: 'rotate(45deg)',
              background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
              borderRadius: '3px',
              boxShadow: '0 0 10px #06b6d4, 0 0 20px #a855f780',
            }}
          >
            <div
              className="absolute inset-1 rounded-sm"
              style={{
                background: 'rgba(255,255,255,0.3)',
              }}
            />
          </div>
        </div>
      )}

      {/* CSS for animations */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }

        a, button, [role="button"], .cursor-pointer,
        a *, button *, [role="button"] *, .cursor-pointer * {
          cursor: pointer !important;
        }

        @keyframes trail-fade {
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        .animate-trail-fade {
          animation: trail-fade 0.4s ease-out forwards;
        }
      `}</style>
    </>
  )
}
