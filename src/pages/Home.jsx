import Hero from "../components/hero";
import CTA from "../components/CTA";
import Services from "./Services";
import Products from "./Products";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
         <div>
            <Hero />
            <Services />
            <Products />
            <CTA />
            <About />
            <Contact />
        </div>
    </div>
  );
};

export default Home;
