import { useEffect, useState } from 'react'

const slides = [
  {
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=90',
    alt: 'Software engineer working at a development workstation',
  },
  {
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=2400&q=90',
    alt: 'Product team collaborating around a table',
  },
  {
    src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2400&q=90',
    alt: 'Colleagues working together at computers',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [])

  function showPrevious() {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length)
  }

  function showNext() {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  return (
    <section
      id="top"
      aria-label="Software engineering team at work"
      aria-roledescription="carousel"
      className="hero-carousel group"
    >
      {slides.map((slide, index) => (
        <div
          key={slide.src}
          role="group"
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}`}
          aria-hidden={index !== activeSlide}
          className={`hero-carousel-slide transition-opacity duration-500 motion-reduce:transition-none ${index === activeSlide ? 'is-active' : ''}`}
        >
          <img
            src={slide.src}
            alt={slide.alt}
            fetchPriority={index === 0 ? 'high' : undefined}
            loading="eager"
            className="hero-carousel-image"
          />
        </div>
      ))}

      <button
        type="button"
        onClick={showPrevious}
        aria-label="Previous image"
        className="hero-carousel-arrow hero-carousel-previous"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>
      <button
        type="button"
        onClick={showNext}
        aria-label="Next image"
        className="hero-carousel-arrow hero-carousel-next"
      >
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      <div className="hero-carousel-dots" aria-label="Choose image">
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveSlide(index)}
            aria-label={`Show image ${index + 1}`}
            aria-current={index === activeSlide ? 'true' : undefined}
            className={`hero-carousel-dot ${index === activeSlide ? 'is-active' : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
