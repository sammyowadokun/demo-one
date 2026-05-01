import { Link } from "react-router-dom";
import {
  HiOutlineHeart,
  HiOutlineBeaker,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";

const categories = [
  {
    id: 1,
    name: "Pain Relief",
    icon: HiOutlineHeart,
    description: "Effective products for headaches, fever, and body pain.",
  },
  {
    id: 2,
    name: "Vitamins",
    icon: HiOutlineSparkles,
    description: "Daily supplements to support health and wellness.",
  },
  {
    id: 3,
    name: "Health Devices",
    icon: HiOutlineBeaker,
    description: "Reliable devices for monitoring and home care needs.",
  },
  {
    id: 4,
    name: "Personal Care",
    icon: HiOutlineShieldCheck,
    description: "Essential care products for hygiene and protection.",
  },
];

export default function Categories() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-700">
            Shop by Category
          </p>
          <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Browse Our Popular Categories
          </h2>
          <p className="mt-3 text-slate-600">
            Explore trusted health products by category for a faster shopping experience.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to="/shop"
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-100 text-teal-700">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-slate-900">
                  {category.name}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {category.description}
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}