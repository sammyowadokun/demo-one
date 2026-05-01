import {
  HiOutlineShieldCheck,
  HiOutlineTruck,
  HiOutlineCreditCard,
  HiOutlineChatBubbleLeftRight,
} from "react-icons/hi2";

const features = [
  {
    id: 1,
    title: "Genuine Products",
    description:
      "Shop trusted healthcare and wellness products sourced with quality in mind.",
    icon: HiOutlineShieldCheck,
  },
  {
    id: 2,
    title: "Fast Delivery",
    description:
      "Get your pharmacy essentials delivered quickly and conveniently to your location.",
    icon: HiOutlineTruck,
  },
  {
    id: 3,
    title: "Secure Checkout",
    description:
      "Enjoy a safe and seamless payment experience designed for your peace of mind.",
    icon: HiOutlineCreditCard,
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "We are here to assist you with orders, product questions, and shopping help.",
    icon: HiOutlineChatBubbleLeftRight,
  },
];

export default function PromoSection() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl rounded-3xl bg-slate-900 px-6 py-12 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-teal-300">
            Why Choose Us
          </p>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            A trusted pharmacy shopping experience
          </h2>
          <p className="mt-4 text-slate-300">
            We combine convenience, quality, and care to give you a better way
            to shop for health essentials online.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-slate-700 bg-slate-800 p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-500/20 text-teal-300">
                  <Icon className="text-2xl" />
                </div>

                <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}