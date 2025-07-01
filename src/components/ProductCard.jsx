import { Heart, Eye } from 'lucide-react'; // optional icons from lucide-react

const ProductCard = () => {
    return (

        <div className=''>
            <div className="max-w-[270px] h-[250px] relative bg-gray-100">
                <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    -40%
                </div>

                <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <div className='rounded-full bg-white p-2'><Heart /></div>
                    <div className='rounded-full bg-white p-2'><Eye /></div>
                </div>

                <div className='absolute bottom-0 bg-black text-white w-full text-center py-2'>
                    <button>Add To Cart</button>
                </div>

                <div className="items-center justify-center flex pt-8 m-auto px-auto">
                    <img src="../src/assets/images/cardImages/Controler.png" />
                </div>
            </div>
            <div className="">
                <h3 className="text-lg pt-2 font-medium">HAVIT HV-G92 Gamepad</h3>
                <div className="flex items-start pt-1.5 gap-2">
                    <span className="text-red-600 font-medium">$120</span>
                    <span className="text-gray-400 font-medium line-through">$160</span>
                </div>
                <div className="">
                    ⭐ ⭐ ⭐ ⭐ ⭐ (88)
                </div>
            </div>

        </div>

        // <div className="max-w-xs bg-white shadow rounded p-4 relative">
        //     {/* Discount badge */}
        //     <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded">
        //         -40%
        //     </div>

        //     {/* Product image */}
        //     <div className="relative">
        //         <img
        //             src="../src/assets/images/cardImages/Controler.png"
        //             alt="HAVIT HV-G92 Gamepad"
        //             className="w-full object-contain"
        //         />
        //         {/* Icons on top right */}
        //         <div className="absolute top-3 right-3 flex-col space-x-3">
        //             <button className="bg-white rounded-full p-1 shadow hover:bg-gray-100">
        //                 <Heart className="w-5 h-5 text-gray-600" />
        //             </button>
        //             <button className="bg-white rounded-full p-1 shadow hover:bg-gray-100">
        //                 <Eye className="w-5 h-5 text-gray-600" />
        //             </button>
        //         </div>
        //     </div>

        //     {/* Product info */}
        //     <div className="mt-4">
        //         <h3 className="text-sm font-semibold text-black">HAVIT HV-G92 Gamepad</h3>

        //         {/* Price */}
        //         <div className="flex items-center space-x-2 mt-2">
        //             <span className="text-red-600 font-bold text-lg">$120</span>
        //             <span className="text-gray-400 line-through">$160</span>
        //         </div>

        //         {/* Rating */}
        //         <div className="flex items-center space-x-1 mt-2">
        //             {/* 5 stars filled */}
        //             {[...Array(5)].map((_, i) => (
        //                 <svg
        //                     key={i}
        //                     className="w-4 h-4 text-yellow-400"
        //                     fill="currentColor"
        //                     viewBox="0 0 20 20"
        //                     xmlns="http://www.w3.org/2000/svg"
        //                 >
        //                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.286 3.974c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.388 2.462c-.785.57-1.838-.197-1.54-1.118l1.286-3.974a1 1 0 00-.364-1.118L3.605 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
        //                 </svg>
        //             ))}
        //             <span className="text-gray-600 text-sm">(88)</span>
        //         </div>
        //     </div>
        // </div>
    );
};

export default ProductCard;
