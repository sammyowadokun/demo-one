export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            About Our Pharmacy
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-slate-600">
            demoOne Pharmacy is committed to providing safe, affordable, and
            high-quality medications to our community.
          </p>
        </div>

        {/* FEATURES */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              ✔ Licensed Pharmacy
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Registered and regulated to ensure patient safety.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              ✔ Experienced Pharmacists
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              Friendly professionals ready to guide your health decisions.
            </p>
          </div>

          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">
              ✔ Quality Medicines
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              We stock trusted brands and approved drugs only.
            </p>
          </div>
        </div>

        {/* CONTACT SECTION */}
        <div className="mt-16 grid gap-10 md:grid-cols-2">

          {/* CONTACT FORM */}
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">
              Contact Us
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-600 outline-none"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-teal-600 outline-none"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-semibold hover:bg-teal-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* CONTACT INFO */}
          <div className="space-y-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4">
                Contact Information
              </h2>

              <p className="text-slate-600">
                <strong>📍 Address:</strong> Ondo State, Nigeria
              </p>

              <p className="mt-2 text-slate-600">
                <strong>📞 Phone:</strong> +234 814 601 2788
              </p>

              <a
                href="https://wa.me/2348146012788"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-teal-900 font-bold hover:underline"
              >
                💬 Chat on WhatsApp
              </a>
            </div>

            {/* MAP */}
            <div className="overflow-hidden rounded-2xl border">
              <iframe
                title="Pharmacy Location"
                src="https://www.google.com/maps?q=Nnewi%20Anambra%20State&output=embed"
                className="w-full h-64 border-0"
                loading="lazy"
              ></iframe>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}