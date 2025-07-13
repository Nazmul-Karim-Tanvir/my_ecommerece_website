import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cartItems: [],

    addToCart: (product) => {
        const existing = get().cartItems.find(item => item.id === product.id);

        if (!existing) {
            set(state => ({
                cartItems: [...state.cartItems, { ...product, quantity: product.quantity ?? 1 }]
            }));
        } else {
            const qtyChange = product.quantity ?? 1; // default +1
            const newQty = existing.quantity + qtyChange;

            if (newQty <= 0) {
                // Remove item if quantity is 0 or less
                set(state => ({
                    cartItems: state.cartItems.filter(item => item.id !== product.id)
                }));
            } else {
                // Update quantity
                set(state => ({
                    cartItems: state.cartItems.map(item =>
                        item.id === product.id
                            ? { ...item, quantity: newQty }
                            : item
                    )
                }));
            }
        }
    },

    // Remove entire item from cart
    removeItem: (id) => {
        set(state => ({
            cartItems: state.cartItems.filter(item => item.id !== id)
        }));
    },

    // Decrease quantity by 1 or remove if qty=1
    decreaseQuantity: (id) => {
        const existing = get().cartItems.find(item => item.id === id);
        if (!existing) return;

        if (existing.quantity <= 1) {
            // Remove item if quantity is 1
            get().removeItem(id);
        } else {
            // Reduce quantity by 1
            set(state => ({
                cartItems: state.cartItems.map(item =>
                    item.id === id ? { ...item, quantity: item.quantity - 1 } : item
                )
            }));
        }
    },

    clearCart: () => set({ cartItems: [] }),

    // Calculate total price of all items in cart
    getTotalPrice: () => {
        const cartItems = get().cartItems;
        return cartItems.reduce((total, item) => total + item.newPrice * item.quantity, 0);
    },

    // Calculate total quantity of all items in cart
    getTotalQuantity: () =>
        get().cartItems.reduce((total, item) => total + item.quantity, 0),
}));

export default useCartStore;
