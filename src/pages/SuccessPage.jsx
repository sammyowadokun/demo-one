import { Link } from "react-router-dom";

export default function SuccessPage() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-2xl rounded-2xl bg-white px-6 py-12 text-center shadow-sm">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-3xl">
          ✅
        </div>

        <h1 className="mt-6 text-3xl font-bold text-slate-900">
          Order Placed Successfully
        </h1>

        <p className="mt-4 text-slate-600">
          Thank you for shopping with demoOne Pharmacy. Your order has been received and is being processed.
        </p>

        <Link
          to="/shop"
          className="mt-8 inline-block rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
        >
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}