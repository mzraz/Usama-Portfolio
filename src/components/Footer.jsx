import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer
