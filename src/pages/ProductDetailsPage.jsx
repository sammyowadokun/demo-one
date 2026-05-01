import { useParams, useNavigate } from "react-router-dom";
import products from "../data/product";
import formatCurrency from "../utils/formatCurrency";
import { useCart } from "../context/useCart";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id === Number(id));
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart(product);
    navigate("/checkout");
  };

  if (!product) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900">Product not found</h2>
          <p className="mt-4 text-slate-600">
            The product you are trying to view does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-teal-700">
            {product.category}
          </p>

          <h1 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-bold text-slate-900">
            {formatCurrency(product.price)}
          </p>

          <p className="mt-6 leading-8 text-slate-600">
            {product.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              onClick={() => addToCart(product)} 
              className="rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold 
                text-white transition hover:bg-teal-800"
            >
              Add to Cart
            </button>

            <button
              onClick={handleBuyNow}
              className="rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-400"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}