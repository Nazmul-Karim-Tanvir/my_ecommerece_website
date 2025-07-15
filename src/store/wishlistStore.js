import { create } from 'zustand';

const useWishListStore = create((set) => ({
    wishListItems: [],
    addToWishList: (product) => set((state) => {
        if (state.wishListItems.find(item => item.id === product.id)) {
            return state; // already added, no duplicates
        }
        return { wishListItems: [...state.wishListItems, product] };
    }),
    removeFromWishList: (id) => set((state) => ({
        wishListItems: state.wishListItems.filter(item => item.id !== id)
    })),
    toggleWishList: (product) => set((state) => {
        const exists = state.wishListItems.find(item => item.id === product.id);
        if (exists) {
            return { wishListItems: state.wishListItems.filter(item => item.id !== product.id) };
        }
        return { wishListItems: [...state.wishListItems, product] };
    }),
}));

export default useWishListStore;