'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface DragCarouselProps {
  children: React.ReactNode[]
  className?: string
}

const DragCarousel: React.FC<DragCarouselProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeft, setScrollLeft] = useState(0)
  const [velocity, setVelocity] = useState(0)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const lastX = useRef(0)
  const lastTime = useRef(0)
  const animationRef = useRef<number | null>(null)
  const hasMoved = useRef(false)

  const checkScrollButtons = useCallback(() => {
    if (!containerRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = containerRef.current
    setCanScrollLeft(scrollLeft > 0)
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
  }, [])

  const scrollByAmount = useCallback((direction: 'left' | 'right') => {
    if (!containerRef.current) return
    const scrollAmount = 400
    const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount)
    containerRef.current.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
    })
  }, [])

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't interfere with link clicks
    const target = e.target as HTMLElement
    if (target.tagName === 'A' || target.closest('a')) {
      return
    }
    
    if (!containerRef.current) return
    setIsDragging(true)
    hasMoved.current = false
    setStartX(e.pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    lastX.current = e.pageX
    lastTime.current = Date.now()
    setVelocity(0)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return
    
    const x = e.pageX - containerRef.current.offsetLeft
    const walk = Math.abs(x - startX)
    
    // Only consider it dragging if moved more than 5px
    if (walk > 5) {
      hasMoved.current = true
      e.preventDefault()
      containerRef.current.scrollLeft = scrollLeft - (x - startX) * 1.5

      // Calculate velocity
      const now = Date.now()
      const dt = now - lastTime.current
      if (dt > 0) {
        setVelocity((lastX.current - e.pageX) / dt * 15)
      }
      lastX.current = e.pageX
      lastTime.current = now
    }
  }, [isDragging, startX, scrollLeft])

  const handleMouseUp = useCallback(() => {
    setIsDragging(false)
    // Apply momentum
    if (Math.abs(velocity) > 0.5) {
      const momentum = () => {
        if (!containerRef.current) return
        const newVelocity = velocity * 0.95
        containerRef.current.scrollLeft += newVelocity
        setVelocity(newVelocity)
        if (Math.abs(newVelocity) > 0.5) {
          animationRef.current = requestAnimationFrame(momentum)
        }
      }
      animationRef.current = requestAnimationFrame(momentum)
    }
  }, [velocity])

  const handleMouseLeave = useCallback(() => {
    if (isDragging) {
      handleMouseUp()
    }
  }, [isDragging, handleMouseUp])

  // Touch events for mobile
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (!containerRef.current) return
    setIsDragging(true)
    setStartX(e.touches[0].pageX - containerRef.current.offsetLeft)
    setScrollLeft(containerRef.current.scrollLeft)
    lastX.current = e.touches[0].pageX
    lastTime.current = Date.now()
    setVelocity(0)
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current)
    }
  }, [])

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return
    const x = e.touches[0].pageX - containerRef.current.offsetLeft
    const walk = (x - startX) * 1.5
    containerRef.current.scrollLeft = scrollLeft - walk

    const now = Date.now()
    const dt = now - lastTime.current
    if (dt > 0) {
      setVelocity((lastX.current - e.touches[0].pageX) / dt * 15)
    }
    lastX.current = e.touches[0].pageX
    lastTime.current = now
  }, [isDragging, startX, scrollLeft])

  const handleTouchEnd = useCallback(() => {
    handleMouseUp()
  }, [handleMouseUp])

  // Check scroll buttons on scroll
  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleScroll = () => checkScrollButtons()
    container.addEventListener('scroll', handleScroll)
    checkScrollButtons()

    return () => container.removeEventListener('scroll', handleScroll)
  }, [checkScrollButtons])

  // Cleanup animation on unmount
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className={`flex overflow-x-auto scrollbar-hide gap-4 pb-2 ${className}`}
        style={{
          cursor: isDragging ? 'grabbing' : 'grab',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {children.map((child, index) => (
          <div 
            key={index} 
            className="flex-shrink-0"
            style={{ pointerEvents: (isDragging && hasMoved.current) ? 'none' : 'auto' }}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-center gap-4">
        <button
          onClick={() => scrollByAmount('left')}
          disabled={!canScrollLeft}
          className={`p-2 rounded-full border-2 transition-all duration-200 ${
            canScrollLeft 
              ? 'border-cream text-cream hover:bg-cream hover:text-darker cursor-pointer' 
              : 'border-cream/30 text-cream/30 cursor-not-allowed'
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scrollByAmount('right')}
          disabled={!canScrollRight}
          className={`p-2 rounded-full border-2 transition-all duration-200 ${
            canScrollRight 
              ? 'border-cream text-cream hover:bg-cream hover:text-darker cursor-pointer' 
              : 'border-cream/30 text-cream/30 cursor-not-allowed'
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  )
}

export default DragCarousel
