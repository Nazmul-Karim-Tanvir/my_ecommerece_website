import { create } from 'zustand';

const useCartStore = create((set, get) => ({
    cartItems: [],
    addToCart: (product) => {
        const existing = get().cartItems.find(item => item.id === product.id);

        if (!existing) {
            set(state => ({
                cartItems: [...state.cartItems, { ...product, quantity: 1 }]
            }));
        } else {
            const qtyChange = product.quantity ?? 1; // default +1
            const newQty = existing.quantity + qtyChange;
            if (newQty <= 0) {
                set(state => ({
                    cartItems: state.cartItems.filter(item => item.id !== product.id)
                }));
            } else {
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

    removeFromCart: (id) => {
        set(state => ({
            cartItems: state.cartItems.filter(item => item.id !== id)
        }));
    },
    clearCart: () => set({ cartItems: [] }),
}));
export default useCartStore;
