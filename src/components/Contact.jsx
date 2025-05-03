import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import UsamaImg from "../assets/DSC_6399 1-1.svg"
import Football from "../assets/Vector.svg"
import Linkedin from "../assets/Vector-1.svg"
import EmailImg from "../assets/Vector-2.svg"
import Whatsapp from "../assets/Vector-3.svg"

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    projectDescription: "",
    budget: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setSuccess(false);
    
    // Create a template parameters object with your form data
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      project_description: formData.projectDescription,
      budget: formData.budget,
      // Add this line to create a formatted message for the email body
      message: `
        Name: ${formData.name}
        Email: ${formData.email}
        Project Type: ${formData.projectType}
        Project Description: ${formData.projectDescription}
        Budget: ${formData.budget}
      `
    };
    
    emailjs.send(
      "service_vjpl76h", // Service ID 
      "template_32e1z0d", // Template ID
      templateParams,     // Pass the template parameters
      "LPSMeMe5vukti84Ex" // Public Key
    )
    .then((result) => {
      setSuccess(true);
      setLoading(false);
      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "",
        projectDescription: "",
        budget: ""
      });
    }, (error) => {
      setError(true);
      setLoading(false);
      console.error("EmailJS error:", error);
    });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-content">
          <div className="contact-form-container">
            <h2 className="contact-heading">
              LET'S TURN YOUR <span className="highlight">IDEA</span><br />
              INTO <span className="highlight">REALITY!</span>
            </h2>
            
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group half-width">
                  <input 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    pattern="[A-Za-z ]{2,}"
                    title="Please enter a valid name (at least 2 characters, letters only)"
                  />
                </div>
                
                <div className="form-group half-width">
                  <input 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    title="Please enter a valid email address"
                  />
                </div>
              </div>
              
              <div className="form-group full-width">
                <input 
                  type="text" 
                  name="projectType" 
                  placeholder="1. What best describes your project? (Mobile App, SaaS Platform, Web App, Website, Other)" 
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  minLength="3"
                  title="Please provide a project type with at least 3 characters"
                />
              </div>
              
              <div className="form-group full-width">
                <input 
                  type="text" 
                  name="projectDescription" 
                  placeholder="2. Briefly describe your project (Goals, features, or specific needs)" 
                  required
                  value={formData.projectDescription}
                  onChange={handleChange}
                  minLength="10"
                  title="Please provide a project description with at least 10 characters"
                />
              </div>
              
              <div className="form-group full-width">
                <input 
                  type="text" 
                  name="budget" 
                  placeholder="3. Budget You are willing to Spend (eg $100-$300)" 
                  required
                  value={formData.budget}
                  onChange={handleChange}
                  pattern=".*\$.*"
                  title="Please include a dollar amount in your budget"
                />
              </div>
              
              <button type="submit" className="submit-btn" disabled={loading}>
                {loading ? "SENDING..." : "SUBMIT"}
              </button>
              
              {success && <p className="success-message">Your message has been sent successfully!</p>}
              {error && <p className="error-message">Something went wrong. Please try again.</p>}
            </form>
          </div>
          
          <div className="contact-photo" >
            <img src={UsamaImg} alt="Developer" />
            <div className="social-links">
              <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="social-icon globe">
                <img src={Football} alt="Football" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
              <img src={Linkedin} alt="linkedin" />
                
              </a>
              <a href="mailto:hello@example.com" target="_blank" rel="noopener noreferrer" className="social-icon email">
              <img src={EmailImg} alt="email" />
                
              </a>
              <a href="https://whatsapp.com" target="_blank" rel="noopener noreferrer" className="social-icon whatsapp">
              <img src={Whatsapp} alt="Whatsapp" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;