import React from 'react';
import useCartStore from '../../store/cartStore';

const CheckOut = () => {
    const cartItems = useCartStore((state) => state.cartItems);
    const getTotalPrice = useCartStore((state) => state.getTotalPrice);
    const subtotal = getTotalPrice();

    return (
        <div className="max-w-[1170px] mx-auto px-4 py-12">
            <h2 className="text-2xl font-semibold mb-8 text-center sm:text-left text-gray-900">Checkout</h2>

            <div className="flex flex-col lg:flex-row gap-10">
                {/* Billing Form */}
                <div className="w-full lg:w-2/3">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Billing Details</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                />
                            </div>
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                            />
                            <input
                                type="text"
                                placeholder="Address Line"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                            />
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="City"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                />
                                <input
                                    type="text"
                                    placeholder="Postal Code"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                />
                            </div>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                defaultValue=""
                            >
                                <option value="" disabled>
                                    Select Country
                                </option>
                                <option value="bd">Bangladesh</option>
                                <option value="us">United States</option>
                                <option value="uk">United Kingdom</option>
                            </select>
                        </form>
                    </div>
                </div>

                {/* Order Summary */}
                <div className="w-full lg:w-1/3">
                    <div className="bg-white rounded-xl shadow-md p-8">
                        <h3 className="text-xl font-semibold mb-6 text-gray-800">Order Summary</h3>

                        {/* Cart items */}
                        <div className="divide-y divide-gray-200 text-sm">
                            {cartItems.map((item) => (
                                <div key={item.id} className="py-3 flex justify-between text-gray-700">
                                    <span>
                                        {item.productName} × {item.quantity}
                                    </span>
                                    <span>${(item.newPrice * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                        </div>

                        {/* Totals */}
                        <div className="border-t border-gray-200 mt-6 pt-6 text-sm space-y-3 text-gray-800">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Shipping:</span>
                                <span>Free</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg border-t border-gray-300 pt-4 mt-4">
                                <span>Total:</span>
                                <span>${subtotal.toFixed(2)}</span>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="mt-8">
                            <h4 className="font-semibold mb-3 text-gray-800">Payment Method</h4>
                            <select
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400 transition"
                                defaultValue="cod"
                            >
                                <option value="cod">Cash on Delivery</option>
                                <option value="card">Credit / Debit Card</option>
                                <option value="bkash">bKash / Nagad</option>
                            </select>
                        </div>

                        <button
                            className="w-full mt-8 bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 transition"
                            type="submit"
                        >
                            Place Order
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;
