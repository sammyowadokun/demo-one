
const About = () => {
  return (
    <div className="about">
      <h2>About Our Pharmacy</h2>

      <p className="about-text">
        CPEN Pharmacy is committed to providing safe, affordable, and
        high-quality medications to our community. We combine professional
        pharmaceutical care with modern health solutions.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>✔ Licensed Pharmacy</h3>
          <p>Registered and regulated to ensure patient safety.</p>
        </div>

        <div className="about-card">
          <h3>✔ Experienced Pharmacists</h3>
          <p>Friendly professionals ready to guide your health decisions.</p>
        </div>

        <div className="about-card">
          <h3>✔ Quality Medicines</h3>
          <p>We stock trusted brands and approved drugs only.</p>
        </div>
      </div>
    </div>
  );
};

export default About;