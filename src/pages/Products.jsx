import Pain from "../assets/pain-relief.png";
import Supplements from "../assets/supplements.png";
import BabyCare from "../assets/baby-care.png";
import MedicalDevices from "../assets/medical-devices.png"; 

const productsData = [
  {
    name: "Pain Relief",
    description: "OTC medicines for headaches, body pain, and fever.",
    image: Pain
  },
  {
    name: "Supplements",
    description: "Vitamins and nutritional supplements for all ages.",
    image: Supplements
  },
  {
    name: "Mother & Baby Care",
    description: "Safe products for Nursing mothers, newborns and toddlers.",
    image: BabyCare
  },
  {
    name: "Medical Devices",
    description: "BP monitors, thermometers, and other devices.",
    image: MedicalDevices
  },
];

const Products = () => {
  return (
    <section className="products">
      <div className="container">
        <h2 className="products-title">Our Products</h2>
        <div className="products-grid">
          {productsData.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;

