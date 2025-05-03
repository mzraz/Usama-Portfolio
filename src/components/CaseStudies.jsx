"use client"

import { useState, useEffect, useRef } from "react"
import "./CaseStudies.css"
import Pic  from "../assets/pic-1.svg"
const caseStudies = [
  {
    id: 1,
    title: "Innovative UX Solutions",
    description: "Elevating every interaction into a memorable journey with elegant UI and impactful UX design. Creating moments that captivate and resonate.",
    image: Pic,
    link: "/case-studies/innovative-ux",
  },
  {
    id: 2,
    title: "Creative UX Innovations",
    description: "Transforming each interaction into a remarkable experience through intuitive UI and thoughtful UX design. Crafting connections that inspire and engage.",
    image: Pic,
    link: "/case-studies/creative-ux",
  },
  {
    id: 3,
    title: "Next-Gen UX Designs",
    description: "Turning every interaction into an unforgettable experience with sleek UI and meaningful UX design. Creating moments that resonate deeply.",
    image: Pic,
    link: "/case-studies/next-gen-ux",
  },
  {
    id: 4,
    title: "Digital Experience Platform",
    description: "Building immersive digital experiences that transform how users interact with technology and services.",
    image: Pic,
    link: "/case-studies/digital-experience",
  },
  {
    id: 5,
    title: "Mobile Interface Redesign",
    description: "Reimagining mobile interfaces to create intuitive, delightful experiences that users love.",
    image: Pic,
    link: "/case-studies/mobile-interface",
  },
]

const CaseStudies = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [expanded, setExpanded] = useState(false)
  const sliderRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 576) {
        setVisibleItems(1)
      } else if (window.innerWidth < 992) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const nextSlide = () => {
    if (currentIndex === 0 && !expanded) {
      // First click on right arrow from initial state
      setExpanded(true)
      return
    }
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1
      return nextIndex >= caseStudies.length - visibleItems + 1 ? 0 : nextIndex
    })
  }

  const prevSlide = () => {
    if (currentIndex === 0 && expanded) {
      // Click on left arrow to return to initial state
      setExpanded(false)
      return
    }
    
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex - 1
      return nextIndex < 0 ? caseStudies.length - visibleItems : nextIndex
    })
  }

  return (
    <section id="work" className="case-studies" >
      <div className="container">
        <div className={`case-studies-content ${expanded ? 'expanded' : ''}`}>
          <div className="case-studies-heading">
            <h2 className="section-title">
              <span className="case-text text-orange ">CASE</span>
              <span className="case-text text-white">STUDIES</span>
            </h2>
          </div>
          
          <div className="slider-container">
            <div className="slider-wrapper" ref={sliderRef}>
              <div
                className="slider"
                style={{
                  transform: `translateX(-${currentIndex * (100 / visibleItems)}%)`,
                  width: `${(caseStudies.length / visibleItems) * 100}%`,
                }}
              >
                {caseStudies.map((study) => (
                  <div
                    key={study.id}
                    className="case-study-item"
                    style={{ width: `384px` }}
                  >
                    <div className="case-study-card">
                      <div className="case-study-image">
                        <img src={study.image || "/placeholder.svg"} alt={study.title} />
                      </div>
                      <div className="case-study-content">
                        <h3>{study.title}</h3>
                        <p>{study.description}</p>
                        <a href={study.link} className="case-study-link">
                          View Case Study
                          <span className="arrow-icon">→</span>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Show left button only when expanded */}
            {expanded && (
              <button className="slider-btn prev-btn" onClick={prevSlide}>
                &#8249;
              </button>
            )}
            
            <button className="slider-btn next-btn" onClick={nextSlide}>
              &#8250;
            </button>
          </div>
        </div>
        
        <div className="view-all-container">
          <a href="/case-studies" className="btn btn-primary">
            SEE MORE
          </a>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies