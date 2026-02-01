
const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="contact-wrapper">
        {/* Contact Form */}
        <form className="contact-form">
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <p><strong>📍 Address:</strong> state, Ondo State</p>
          <p><strong>📞 Phone:</strong> +234 XXX XXX XXXX</p>

          <a
            href="https://wa.me/2348146012788"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-link"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      {/* Google Map */}
      <div className="map-container">
        <iframe
          title="Pharmacy Location"
          src="https://www.google.com/maps?q=Nnewi%20Anambra%20State&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;
