import "./AboutMe.css"
import UsamaImg from "../assets/DSC_6399 1.svg"
const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        
        <div className="about-content">
          <div className="about-image">
            <img src={UsamaImg} alt="About me portrait" />
          </div>
          <div className="about-text">
          <h2 className="section-title" style={{
            textAlign:"left",
            marginBottom:'5px'
          }}>
          <span>ABOUT</span> <span className="text-white">ME</span>
        </h2>
            <h3><span className="text-accent">—————</span>Muhammad Usama — UI/UX Designer</h3>
            <p style={{}}>I craft seamless, user-friendly experiences with intuitive UI and purposeful UX, ensuring every interaction is meaningful. With a Master’s in IT and over three years of experience, I specialize in designing impactful SaaS platforms, mobile apps, and digital products. From optimizing complex workflows to refining interactions, every click is designed for engagement and efficiency. Let’s create something extraordinary.
            </p>
            <p>
              I believe that the best designs come from a thorough understanding of the user's needs and business goals.
              My process involves extensive research, prototyping, and testing to ensure that every design decision is
              informed and purposeful.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe
