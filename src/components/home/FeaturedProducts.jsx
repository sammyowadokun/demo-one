import { Link } from "react-router-dom";
import products from "../../data/product";
import ProductCard from "../products/ProductCard";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
              Featured Products
            </p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
              Best Selling Health Essentials
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              Discover some of our most trusted and frequently purchased products.
            </p>
          </div>

          <Link
            to="/shop"
            className="text-sm font-bold text-teal-700 transition hover:text-teal-800"
          >
            View all products →
          </Link>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}