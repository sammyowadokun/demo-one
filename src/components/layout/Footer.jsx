
export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-xl font-semibold text-white">demoOne Pharmacy</h3>
          <p className="mt-4 text-sm leading-7 text-slate-400">
            Your trusted destination for quality health products, wellness essentials, and everyday pharmacy needs.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Home</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>Account</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-400">
            <li>Email:📧 support@demoonepharmacy.com</li>
            <li>Phone:📞 +234 800 000 0000</li>
            <li>Location:🏠 123 Health Street, Lagos, Nigeria</li>
          </ul>
        </div>

        <div className="">
           <p>© {new Date().getFullYear()} DemoOne Pharmacy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
