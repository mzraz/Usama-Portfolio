import "./Services.css";

const services = [
  {
    id: 1,
    number: "1",
    title: "BRAND STRATEGY",
    description:
      "A strategy that defines a brand's identity and value by aligning business goals with customer needs to establish trust and lasting loyalty.",
  },
  {
    id: 2,
    number: "2",
    title: "INTERFACE DESIGN",
    description:
      "The art and science of designing intuitive, visually engaging interfaces that enable seamless user interactions.",
  },
  {
    id: 3,
    number: "3",
    title: "USER RESEARCH",
    description:
      "The process of analyzing user behaviors, needs, and motivations using qualitative and quantitative research methods.",
  },
  {
    id: 4,
    number: "4",
    title: "PROTOTYPING",
    description:
      "The process of developing interactive prototypes to simulate digital products or services, enabling functionality testing and user feedback collection.",
  },
  {
    id: 5,
    number: "5",
    title: "WIREFRAMING",
    description:
      "A foundational visual representation of a digital interface, emphasizing layout and structure without intricate design details.",
  },
  {
    id: 6,
    number: "6",
    title: "USABILITY TESTING",
    description:
      "Assessing a product by testing it with real users to evaluate its ease of use and identify usability improvements.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="section-title">
          WHAT YOU'LL <span>GET</span>
        </h2>
        <div className="services-grid">
          {services.map((service , index) => (
            <div key={service.id} className={index === 0 || index === 3 || index === 6 || index === 10 || index === 13 ? "service-card2":"service-card"}>
              <div className="service-number">{service.number}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;