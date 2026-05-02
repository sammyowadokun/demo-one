import formatCurrency from "../utils/FormatCurrency.js";
import { useOrders } from "../context/useOrders";

export default function OrdersPage() {
  const { orders } = useOrders();

  if (orders.length === 0) {
    return (
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-900">My Orders</h1>
          <p className="mt-4 text-slate-600">You have not placed any orders yet.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-900">My Orders</h1>
        <p className="mt-2 text-slate-600">
          View your recent pharmacy orders and their status.
        </p>

        <div className="mt-8 space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm text-slate-500">Order ID</p>
                  <p className="font-semibold text-slate-900">#{order.id}</p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Date</p>
                  <p className="font-medium text-slate-900">
                    {new Date(order.createdAt).toLocaleDateString()}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Status</p>
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-700">
                    {order.status}
                  </span>
                </div>

                <div>
                  <p className="text-sm text-slate-500">Total</p>
                  <p className="font-semibold text-slate-900">
                    {formatCurrency(order.totalAmount)}
                  </p>
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {order.items.map((item) => (
                  <div
                    key={`${order.id}-${item.id}`}
                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-16 w-16 rounded-lg object-cover"
                      />

                      <div>
                        <h2 className="font-semibold text-slate-900">{item.name}</h2>
                        <p className="text-sm text-slate-500">{item.category}</p>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-sm text-slate-500">
                        Qty: {item.quantity}
                      </p>
                      <p className="font-semibold text-slate-900">
                        {formatCurrency(item.price * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl bg-slate-50 p-4 text-sm text-slate-600">
                <p>
                  <span className="font-medium text-slate-900">Delivery to:</span>{" "}
                  {order.customer.fullName}, {order.customer.address},{" "}
                  {order.customer.city}
                </p>
                <p className="mt-1">
                  <span className="font-medium text-slate-900">Phone:</span>{" "}
                  {order.customer.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}