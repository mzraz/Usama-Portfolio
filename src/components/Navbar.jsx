"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="#" className="logo">
          {/* <span>JJ</span> */}
        </a>

        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#" onClick={closeMenu}>
            HOME
          </a>
          <a href="#about" onClick={closeMenu}>
            ABOUT
          </a>
          <a href="#work" onClick={closeMenu}>
            WORK
          </a>
          <a href="https://calendly.com/oxama7287/30min?month=2025-05" target="_blank" className="btn btn-primary" onClick={closeMenu}>
            SCHEDULE A FREE 30 MINS DISCOVERY CALL
          </a>
        </div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? "active" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
