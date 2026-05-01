import Hero from "../components/home/Hero";
// import Services from "./Services";
import Categories from "../components/home/Categories";
import FeaturedProducts from "../components/home/FeaturedProducts";
import PromoSection from "../components/home/PromoSection";
// import About from "./About";
// import Contact from "./Contact";

export default function HomePage() {

  return (
    <div>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <PromoSection />

        {/* <Services /> */}
        {/* <About /> */}
        {/* <Contact />     */}
    </div>
  );
}