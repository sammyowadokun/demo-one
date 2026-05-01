import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-slate-900">404</h1>
        <p className="mt-4 text-lg text-slate-600">Page not found.</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-xl bg-teal-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}