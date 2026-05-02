import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiOutlineShoppingBag, HiOutlineUser, HiOutlineBars3, HiOutlineXMark } from "react-icons/hi2";
import { useCart } from "../../context/useCart";
import { useAuth } from "../../context/useAuth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();
  const { user, logout } = useAuth();

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-teal-700 font-semibold"
      : "text-slate-700 hover:text-teal-700 transition-colors";
  
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="text-2xl font-extrabold text-teal-600">
          demoOne Pharmacy
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={navLinkClass}>
            Shop
          </NavLink>
          <Link to="/about" className={navLinkClass}>
            About
          </Link>
          <NavLink to="/cart" className={navLinkClass}>
            Cart
          </NavLink>
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <Link to="/cart" className="relative">
            <HiOutlineShoppingBag className="text-xl" />

            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 rounded-full bg-teal-700 px-2 text-xs text-white">
                {cartItems.length}
              </span>
            )}
          </Link>

          {user ? (
            <div className="flex items-center gap-3">
              <Link
                to="/profile"
                className="text-sm font-medium text-slate-700 transition hover:text-teal-700"
              >
                Profile
              </Link>
              <Link
                to="/orders"
                className="border w-28 rounded-xl border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
              >
                My Orders
              </Link>
              <span className="text-sm font-medium text-slate-700">
                Hi, {user.fullName.split(" ")[0]}
              </span>
              <button
                onClick={logout}
                className="rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-400 hover:text-red-500"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-teal-700 hover:text-teal-700"
            >
              <HiOutlineUser className="text-xl" />
            </Link>
          )}
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-md border border-slate-200 p-2 text-slate-700 md:hidden"
        >
          {menuOpen ? <HiOutlineXMark className="text-2xl" /> : <HiOutlineBars3 className="text-2xl" />}
        </button>
      </div>

      {menuOpen && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
            <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/shop" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>
            <NavLink to="/about" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/cart" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              Cart
            </NavLink>
            {user && (
              <NavLink
                to="/profile"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Profile
              </NavLink>
            )}
            {user ? (
              <button
                onClick={() => {
                  logout();
                  setMenuOpen(false);
                }}
                className="text-left w-20 rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-red-400 hover:text-red-500"
              >
                Logout
              </button>
            ) : (
              <NavLink to="/login" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                <div className="flex items-center w-10 gap-50 rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-teal-700 hover:text-teal-700">
                  <HiOutlineUser className="text-xl" />
                </div>
              </NavLink>
            )}
            {user && (
              <NavLink
                to="/orders"
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                <div className="border w-26 rounded-xl border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-teal-700 hover:text-teal-700" >
                  My Orders
                </div>
              </NavLink>
            )}
          </div>
        </div>
      )}
    </header>
  );
}