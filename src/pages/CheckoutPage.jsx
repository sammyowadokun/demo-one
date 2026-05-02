import { useState } from "react";
import { useCart } from "../context/useCart";
import formatCurrency from "../utils/FormatCurrency.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useOrders } from "../context/useOrders";
import { useAuth } from "../context/useAuth";

export default function CheckoutPage() {
    const { cartItems, clearCart } = useCart();
    const { addOrder } = useOrders();
    const { user } = useAuth();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        fullName: "",
        phone: "",
        address: "",
        city: "",
    });

    const [errors, setErrors] = useState({});

    const total = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
        ...prev,
        [name]: value,
        }));

        setErrors((prev) => ({
        ...prev,
        [name]: "",
        }));
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
        }

        if (!formData.phone.trim()) {
        newErrors.phone = "Phone number is required";
        }

        if (!formData.address.trim()) {
        newErrors.address = "Address is required";
        }

        if (!formData.city.trim()) {
        newErrors.city = "City is required";
        }

        return newErrors;
    };

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            toast.error("Your cart is empty.");
            return;
        }

        const validationErrors = validateForm();

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            toast.error("Please fill in all required fields.");
            return;
        }

        addOrder({
            customer: {
                fullName: formData.fullName,
                phone: formData.phone,
                address: formData.address,
                city: formData.city,
                email: user?.email || "",
            },
            items: cartItems,
            total: total,
            deliveryFee: 1000,
            totalAmount: total + 1000,
        });

        clearCart();
        toast.success("Order placed successfully!");
        navigate("/success");
    };

  return (
    <section className="py-14">
      <div className="mx-auto max-w-6xl grid gap-10 px-4 md:grid-cols-2">

        {/* LEFT - FORM */}
        <div>
          <h2 className="text-2xl font-bold mb-6">Delivery Information</h2>

          <form className="space-y-4">
            <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg p-3"
                />
                {errors.fullName && (
                  <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
                )}
            </div>


            <div>
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white rounded-lg p-3"
                />
                {errors.phone && (
                  <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                )}
            </div>

            <div>
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                className="w-full bg-white rounded-lg p-3"
                />
                {errors.address && (
                  <p className="mt-1 text-sm text-red-500">{errors.address}</p>
                )}
            </div>

            <div>
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                    className="w-full bg-white rounded-lg p-3"
                />
                {errors.city && (
                  <p className="mt-1 text-sm text-red-500">{errors.city}</p>
                )}
            </div>


            <button
                type="button"
                onClick={handlePlaceOrder}
                disabled={cartItems.length === 0}
                className="w-full bg-teal-700 text-white py-3 rounded-xl font-semibold hover:bg-teal-800"
            >
                Place Order
            </button>
          </form>
        </div>

        {/* RIGHT - SUMMARY */}
        <div className="my-14 mx-10 p-4 rounded-xl bg-white h-fit">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between mb-2">
              <span>
                {item.name} x {item.quantity}
              </span>
              <span>{formatCurrency(item.price * item.quantity)}</span>
            </div>
          ))}

          <div className="border-t mt-4 pt-4 flex justify-between">
            <span>Subtotal</span>
            <span>{formatCurrency(total)}</span>
          </div>

          <div className="flex justify-between mt-2">
            <span>Delivery</span>
            <span>₦1,000</span>
          </div>

          <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
            <span>Total</span>
            <span>{formatCurrency(total + 1000)}</span>
          </div>
        </div>

      </div>
    </section>
  );
}