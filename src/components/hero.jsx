import Pharmacy from "../assets/pharmacy.jpg";


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Your Trusted Community Pharmacy</h1>
          <p className="hero-subtitle">
            Quality medicines, professional care, and fast delivery.
          </p>
          <div className="hero-buttons">
            <a
              href="https://wa.me/2348146012788"
              className="hero-whatsapp-btn"
              target="_blank"
              rel="noreferrer"
            >
              Order via WhatsApp
            </a>
            <button className="hero-prescription-btn">Upload Prescription</button>
          </div>
        </div>
        <div className="hero-right">
          <img
            src={Pharmacy}
            alt="Pharmacy Illustration"
            style={{ width: "100%", maxWidth: "400px" }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
