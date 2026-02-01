
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-section">
            <h3>DemoOne Pharmacy</h3>
            <p>Quality medicines, professional care,<br/> and fast delivery.</p>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <p>📞 +234XXXXXXXXXX</p>
            <a href="mailto:info@DemoOnepharmacy.com">📧 info@DemoOnepharmacy.com</a>
            <p>🏠 123 Health Street, Lagos, Nigeria</p>
          </div>

          <div className="footer-section">
            <h4>Opening Hours</h4>
            <p>Mon-Fri: 8:00am - 8:00pm</p>
            <p>Sat: 9:00am - 5:00pm</p>
            <p>Sun: Closed</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} DemoOne Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
