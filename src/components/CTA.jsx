
const CTA = () => {
  return (
    <section className="cta">
      <h2 className="cta-title">Need a medicine?</h2>
      <p className="cta-subtitle">
        Chat with a pharmacist now and get your medicines delivered safely.
      </p>
      <div className="cta-buttons">
        <a
          href="https://wa.me/234XXXXXXXXXX"
          target="_blank"
          rel="noreferrer"
          className="cta-whatsapp-btn"
        >
          WhatsApp Chat
        </a>
        <button className="cta-prescription-btn">Upload Prescription</button>
      </div>
    </section>
  );
};

export default CTA;