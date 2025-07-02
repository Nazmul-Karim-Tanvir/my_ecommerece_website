import { Heart, Eye } from 'lucide-react';
import { Star as StarIcon, StarHalf, StarOff } from 'lucide-react';

const ProductCard = ({ image, productName, newPrice, oldPrice, offer, rating, starCount }) => {
    const stars = getStarArray(rating);

    return (
        <div className="max-w-[270px]">
            <div className="h-[250px] group relative bg-gray-100 rounded">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    {offer}
                </div>
                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className="rounded-full bg-white p-2 cursor-pointer">
                        <Heart size={16} />
                    </div>
                    <div className="rounded-full bg-white p-2 cursor-pointer">
                        <Eye size={16} />
                    </div>
                </div>
                <div className="absolute bottom-0 w-full text-center py-2 text-sm font-medium transition-opacity duration-300 opacity-0 group-hover:opacity-100 bg-black text-white cursor-pointer">
                    <button className='cursor-pointer'>Add To Cart</button>
                </div>
                <div className="flex items-center justify-center h-full px-4">
                    <img src={image} alt={productName} className="max-h-[150px] object-contain" />
                </div>
            </div>

            <div className="pt-2">
                <h3 className="text-lg font-medium">{productName}</h3>
                <div className="flex items-start pt-1.5 gap-2">
                    <span className="text-red-600 font-medium">${newPrice}</span>
                    <span className="text-gray-400 font-medium line-through">${oldPrice}</span>
                </div>

                {/* ⭐ Dynamic Star Rating */}
                <div className="flex items-center gap-1 text-sm pt-1">
                    {stars.map((type, index) =>
                        type === "full" ? (
                            <StarIcon key={index} size={16} className="text-yellow-500 fill-yellow-500" />
                        ) : type === "half" ? (
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

// utility function
const getStarArray = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars.push("full");
        } else if (i - rating < 1) {
            stars.push("half");
        } else {
            stars.push("empty");
        }
    }
    return stars;
};
