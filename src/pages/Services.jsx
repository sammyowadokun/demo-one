
const servicesData = [
  {
    title: "Prescription Filling",
    description: "Fast and accurate prescription handling by licensed pharmacists.",
    icon: "💊",
  },
  {
    title: "Home Delivery",
    description: "Receive your medicines safely at your doorstep.",
    icon: "🚚",
  },
  {
    title: "Health Consultation",
    description: "Professional advice from our qualified pharmacists.",
    icon: "🩺",
  },
  {
    title: "BP & Sugar Check",
    description: "Regular health monitoring for your wellness.",
    icon: "🧾",
  },
];

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
