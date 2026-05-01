import { Link } from "react-router-dom";
import img from '../../assets/images/pharmacy.jpg';

export default function Hero() {
  return (
    <section className="bg-linear-to-r from-teal-100 via-white to-cyan-300">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6   
            md:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <span className="inline-block rounded-full bg-teal-100 px-4 py-1 text-sm 
                  font-medium text-teal-700">
            Your Community Trusted Pharmacy Store
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Health essentials delivered with convenience and care
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
            Discover quality medicines, vitamins, wellness products, and healthcare essentials in a clean, modern shopping experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/shop"
              className="rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white 
                shadow-md transition hover:bg-teal-800"
            >
              Shop Now
            </Link>

            <Link
              to="/shop"
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm 
                font-semibold text-slate-800 transition hover:border-slate-400"
            >
              View Products
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={img}
            alt="Pharmacy products"
            className="h-full w-full object-cover shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}