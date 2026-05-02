import { Link } from "react-router-dom";
import formatCurrency from "../../utils/FormatCurrency.js";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img
        src={product.image}
        alt={product.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <p className="text-sm font-medium text-teal-700">{product.category}</p>

        <h2 className="mt-2 text-xl font-semibold text-slate-900">
          {product.name}
        </h2>

        <p className="mt-3 text-sm leading-6 text-slate-600">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-lg font-bold text-slate-900">
            {formatCurrency(product.price)}
          </span>

          <Link
            to={`/product/${product.id}`}
            className="rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}