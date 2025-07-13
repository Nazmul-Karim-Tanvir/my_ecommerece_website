import React from 'react';
import { ShoppingCart } from 'lucide-react'; // For empty cart icon
import useCartStore from '../../store/cartStore.js';

const Cart = () => {
    const cartItems = useCartStore(state => state.cartItems);
    const addToCart = useCartStore(state => state.addToCart);
    const decreaseQuantity = useCartStore(state => state.decreaseQuantity);
    const removeItem = useCartStore(state => state.removeItem);
    const getTotalPrice = useCartStore(state => state.getTotalPrice);

    return (
        <div className="p-6 max-w-4xl mx-auto min-h-[300px]">
            <h2 className="text-3xl font-extrabold mb-8 text-gray-900 border-b pb-4">
                Your Cart
            </h2>

            {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center mt-20 text-gray-500">
                    <ShoppingCart size={80} className="mb-6 opacity-40" />
                    <p className="text-xl font-semibold mb-2">Your cart is empty</p>
                    <p className="max-w-xs text-center text-gray-400">
                        Looks like you haven&apos;t added anything yet. Start shopping and your
                        cart will show up here.
                    </p>
                </div>
            ) : (
                <>
                    <ul className="space-y-6">
                        {cartItems.map((item) => (
                            <li
                                key={item.id}
                                className="flex flex-col sm:flex-row items-center sm:items-start justify-between bg-white shadow-md rounded-lg p-5"
                            >
                                <div className="flex items-center gap-5 w-full sm:w-auto">
                                    <img
                                        src={item.image}
                                        alt={item.productName}
                                        className="w-20 h-20 object-contain rounded"
                                    />
                                    <div>
                                        <h4 className="font-semibold text-lg text-gray-900">
                                            {item.productName}
                                        </h4>
                                        <p className="text-gray-600 mt-1">
                                            ${item.newPrice.toFixed(2)} × {item.quantity} = $
                                            {(item.newPrice * item.quantity).toFixed(2)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3 mt-4 sm:mt-0">
                                    <button
                                        onClick={() => decreaseQuantity(item.id)}
                                        className="w-9 h-9 rounded-full bg-red-100 text-red-700 font-bold flex items-center justify-center hover:bg-red-200 active:scale-90 transition"
                                        aria-label="Decrease quantity"
                                    >
                                        −
                                    </button>
                                    <span className="min-w-[28px] text-center font-semibold text-gray-800 text-lg">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => addToCart({ ...item, quantity: 1 })}
                                        className="w-9 h-9 rounded-full bg-green-100 text-green-700 font-bold flex items-center justify-center hover:bg-green-200 active:scale-90 transition"
                                        aria-label="Increase quantity"
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => removeItem(item.id)}
                                        className="ml-6 text-sm text-red-600 hover:underline"
                                        aria-label="Remove item from cart"
                                    >
                                        Remove
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8 flex justify-end">
                        <div className="bg-gray-100 rounded-lg py-4 px-8 font-bold text-xl text-gray-900 shadow-lg">
                            Total: ${getTotalPrice().toFixed(2)}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
