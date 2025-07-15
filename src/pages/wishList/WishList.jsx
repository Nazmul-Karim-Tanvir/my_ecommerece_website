import React from 'react';
import useWishListStore from '../../store/wishlistStore';
import ProductCard from '../../components/ProductCard';

const WishList = () => {
    const wishListItems = useWishListStore(state => state.wishListItems);

    return (
        <div className="max-w-[1170px] mx-auto px-4 py-10">
            <h1 className="text-3xl font-semibold mb-6">Your Wishlist</h1>
            {wishListItems.length === 0 ? (
                <p className="text-gray-500">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {wishListItems.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default WishList;