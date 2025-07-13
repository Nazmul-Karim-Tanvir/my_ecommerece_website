import { Heart, Eye } from 'lucide-react';
import { Star as StarIcon, StarHalf, StarOff } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useCartStore from '../store/cartStore';
import { toast } from 'react-toastify';
import getStarArray from '../utils/getStarArray.js';

const ProductCard = ({ id, image, productName, newPrice, oldPrice, offer, rating, starCount }) => {
    const stars = getStarArray(rating);
    const navigate = useNavigate();
    const [showViewText, setShowViewText] = useState(false);

    const cartItems = useCartStore(state => state.cartItems);
    const addToCart = useCartStore(state => state.addToCart);

    const existingItem = cartItems.find(item => item.id === id);

    const handleAddToCart = () => {
        addToCart({
            id,
            image,
            productName,
            newPrice,
            oldPrice,
            offer,
            rating,
            starCount,
            quantity: 1, // Ensure default quantity is passed
        });
        toast.success('Product added to cart');
    };

    const handleIncrement = (e) => {
        e.stopPropagation();
        addToCart({ ...existingItem, quantity: 1 });
        toast.success('Product quantity increased');
    };

    const handleDecrement = (e) => {
        e.stopPropagation();
        addToCart({ ...existingItem, quantity: -1 });
        toast.info(
            existingItem.quantity > 1
                ? 'Product quantity decreased'
                : 'Product removed from cart'
        );
    };

    return (
        <div className="max-w-[270px]">
            <div className="h-[250px] group relative bg-gray-100 rounded overflow-hidden">
                {/* Offer Badge */}
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {offer}
                </div>

                {/* Action Icons */}
                <div className="absolute top-2 right-2 flex flex-col gap-2 z-10 items-end">
                    <div className="rounded-full bg-white p-2 cursor-pointer">
                        <Heart size={16} />
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => setShowViewText(true)}
                        onMouseLeave={() => setShowViewText(false)}
                        onClick={() => navigate(`/product/${id}`)}
                    >
                        <div className="rounded-full bg-white p-2 cursor-pointer">
                            <Eye size={16} />
                        </div>
                        {showViewText && (
                            <div className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-black/60 text-white text-xs px-2 py-1 rounded shadow-md whitespace-nowrap">
                                View Details
                            </div>
                        )}
                    </div>
                </div>

                {existingItem ? (
                    <div className="absolute bottom-0 w-full px-3 py-2 text-sm font-medium bg-black/50 backdrop-blur-sm text-white rounded-t flex flex-col md:flex-row md:justify-between md:items-center gap-2 md:gap-0 transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                        {/* Buttons */}
                        <div className="flex justify-center md:justify-start items-center gap-2">
                            <button
                                onClick={handleDecrement}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-red-500 text-lg flex items-center justify-center transition active:scale-90"
                            >
                                −
                            </button>

                            <div className="min-w-[36px] px-3 py-1 text-center rounded-full bg-white/20 backdrop-blur-sm font-semibold">
                                {existingItem.quantity}
                            </div>

                            <button
                                onClick={handleIncrement}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-green-500 text-lg flex items-center justify-center transition active:scale-90"
                            >
                                +
                            </button>
                        </div>

                        {/* View Cart Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                navigate('/cart');
                            }}
                            className="text-xs px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 transition active:scale-95 w-full md:w-auto text-center"
                        >
                            View Cart
                        </button>
                    </div>
                ) : (
                    <div className="absolute bottom-0 w-full text-center py-2 text-sm font-medium bg-black/90 text-white cursor-pointer transition-opacity duration-300 opacity-100 md:opacity-0 group-hover:opacity-100">
                        <button
                            className="w-full py-2 hover:bg-white/20 transition active:scale-95 duration-150 rounded"
                            onClick={handleAddToCart}
                        >
                            Add To Cart
                        </button>
                    </div>
                )}


                <div className="flex items-center justify-center h-full px-4">
                    <img src={image} alt={productName} className="max-h-[150px] object-contain" />
                </div>
            </div>

            <div className="pt-2">
                <h3 className="text-lg font-medium line-clamp-1">{productName}</h3>
                <div className="flex items-start pt-1.5 gap-2">
                    <span className="text-red-600 font-medium">${newPrice}</span>
                    <span className="text-gray-400 font-medium line-through">${oldPrice}</span>
                </div>

                <div className="flex items-center gap-1 text-sm pt-1">
                    {stars.map((type, index) =>
                        type === 'full' ? (
                            <StarIcon key={index} size={16} className="text-yellow-500 fill-yellow-500" />
                        ) : type === 'half' ? (
                            <StarHalf key={index} size={16} className="text-yellow-500 fill-yellow-500" />
                        ) : (
                            <StarOff key={index} size={16} className="text-gray-300 fill-none" />
                        )
                    )}
                    <span className="text-gray-500 ml-1">({starCount})</span>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;