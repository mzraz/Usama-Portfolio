"use client"

import { useState, useEffect } from "react"
import "./Testimonials.css"
import Johndoe from "../assets/john.jpeg"
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { BiSolidQuoteAltRight } from "react-icons/bi";

const testimonials = [
  {
    id: 1,
    text: "I loved how easy it was to find what I needed. A truly delightful experience!",
    author: "John Smith",
    role: "Tech Innovations Inc.",
    avatar: Johndoe,
    linkedin: "#"
  },
  {
    id: 2,
    text: "The attention to detail and understanding of user experience is exceptional. Our conversion rates have increased by 40% since implementing the new design.",
    author: "Michael Chen",
    role: "Marketing Director, Elevate",
    avatar: Johndoe,
    linkedin: "#"
  },
  {
    id: 3,
    text: "Not only is the design beautiful, but the functionality and user flow are incredibly intuitive. Our customers have been giving us amazing feedback.",
    author: "Jessica Williams",
    role: "Product Manager, Innovate",
    avatar: Johndoe,
    linkedin: "#"
  },
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    let interval

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide()
      }, 2500)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, currentIndex])

  const handleMouseEnter = () => setIsAutoPlaying(false)
  const handleMouseLeave = () => setIsAutoPlaying(true)

  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">TESTIMONIALS</h2>
        
        <div className="testimonials-slider" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <button className="control-btn prev-btn" onClick={prevSlide}>
            &#8249;
          </button>

          <div className="testimonial-content">
            <div className="quote-container">
              <span className="quote-mark left"><BiSolidQuoteAltLeft color="#FF8C00"/></span>
              <p className="testimonial-text">
                {testimonials[currentIndex].text}
              </p>
              <span className="quote-mark right"><BiSolidQuoteAltRight /></span>
            </div>
            
            <div className="testimonial-author">
              <img
                src={testimonials[currentIndex].avatar || "/placeholder.svg"}
                alt={testimonials[currentIndex].author}
                className="author-avatar"
              />
              <div className="author-info">
                <div className="author-name">{testimonials[currentIndex].author}</div>
                <div className="author-role">{testimonials[currentIndex].role}</div>
                <a href={testimonials[currentIndex].linkedin} className="linkedin-btn">
                  See On LinkedIn
                </a>
              </div>
            </div>
          </div>
          
          <button className="control-btn next-btn" onClick={nextSlide}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials