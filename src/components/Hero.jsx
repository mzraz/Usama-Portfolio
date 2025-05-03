import { useEffect, useRef } from "react";
import "./Hero.css";
import HeroImg from "../assets/halftone 1.svg"

const Hero = () => {
  const headingRef = useRef(null);
  
  useEffect(() => {
    // Optional: Add animation or effects when component mounts
    if (headingRef.current) {
      // Animation logic could go here
    }
  }, []);

  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1 ref={headingRef} className="hero-title">
            <span className="text-white">INTUITIVE</span>
            <span className="text-accent">INTERACTIVE</span>
            <span className="text-white">IRRESISTIBLE.</span>
          </h1>
          <p className="hero-description">
            <span className="text-accent">
            —————
              </span>Crafting seamless, user-friendly experiences with intuitive UI and purposeful UX—turning every interaction into a meaningful connection.
          </p>
          <div className="hero-buttons">
            <a href="https://calendly.com/oxama7287/30min?month=2025-05" target="_blank" className="btn btn-primary">
              SCHEDULE A FREE DISCOVERY CALL
            </a>
            <a href="https://calendly.com/oxama7287/30min?month=2025-05" target="_blank" className="btn btn-outline">
              GET A CUSTOM QUOTE
            </a>
          </div>
        </div>
        <div className="hero-image">
            <img src={HeroImg} alt="HeroImg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;