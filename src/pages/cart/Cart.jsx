import React from 'react';
import useCartStore from '../../store/cartStore.js';

const Cart = () => {
    const cartItems = useCartStore(state => state.cartItems);
    const removeFromCart = useCartStore(state => state.removeFromCart);

    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {cartItems.map((item) => (
                        <li key={item.id} className="flex items-center justify-between bg-gray-100 p-4 rounded">
                            <div className="flex items-center gap-4">
                                <img src={item.image} alt={item.productName} className="w-16 h-16 object-contain" />
                                <div>
                                    <h4 className="font-semibold">{item.productName}</h4>
                                    <p className="text-sm text-gray-600">
                                        ${item.newPrice} × {item.quantity}
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 font-medium"
                            >
                                Remove
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Cart;
