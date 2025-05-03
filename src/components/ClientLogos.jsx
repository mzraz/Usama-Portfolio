import "./ClientLogos.css"
import Ecomverse from "../assets/Ecomverce.svg"
import NoLimits from "../assets/Frame 15.svg"
import Fabtech from "../assets/fabtech.png.svg"
import WorkTech from "../assets/Frame 36.svg"

const ClientLogos = () => {
  return (
    <section className="client-logos">
      <div className="container">
        <h2 className="client-logos-title"><span className="text-orange">WORKED</span> WITH</h2>
        <div className="logos-grid">
          <div className="logo-item">
            <img src={Ecomverse} alt="eCommerce" />
          </div>
          <div className="logo-item">
            <img src={NoLimits} alt="Deluxe Hotels" />
          </div>
          <div className="logo-item">
            <img src={Fabtech} alt="FashTech" />
          </div>
          <div className="logo-item">
            <img src={WorkTech} alt="Workify" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientLogos
