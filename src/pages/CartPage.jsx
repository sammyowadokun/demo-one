import { useCart } from "../context/useCart";
import formatCurrency from "../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return (
      <section className="py-14">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-xl font-semibold">Your cart is empty</h2>
        </div>
      </section>
    );
  }

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl grid gap-8 px-4 md:grid-cols-3">

        {/* LEFT - CART ITEMS */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-2xl font-bold">Your Cart</h1>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 rounded-xl object-cover"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{item.category}</p>
                <p className="mt-2 font-bold text-slate-900">
                  {formatCurrency(item.price)}
                </p>

                <div className="mt-3 flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                  >
                    -
                  </button>

                  <span className="min-w-8 text-center font-semibold">
                    {item.quantity}
                  </span>

                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-300 bg-white text-lg font-bold text-slate-700 transition hover:border-teal-600 hover:text-teal-700"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-start gap-3 sm:items-end">
                <p className="text-lg font-bold text-slate-900">
                  {formatCurrency(item.price * item.quantity)}
                </p>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm rounded-xl bg-red-500 py-3 px-3 font-medium text-black transitio"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="rounded-2xl my-14 mx-5 p-6 h-fit shadow-sm bg-white">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>{formatCurrency(total)}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Delivery</span>
            <span>₦1,000</span>
          </div>

          <div className="border-t pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatCurrency(total + 1000)}</span>
          </div>

          <button
            onClick={() => navigate("/checkout")}
            className="mt-6 w-full bg-teal-600 text-white p-4 rounded-xl font-semibold hover:bg-teal-800"
          >
            Proceed to Checkout
          </button>
        </div>

      </div>
    </section>
  );
}