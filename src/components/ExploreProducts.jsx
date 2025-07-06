import React, { useState } from 'react';
import ProductCard from './ProductCard';
import products from '../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ExploreProducts = () => {
    const ourProducts = products.ourProducts;

    const itemsPerPage = 8; // 4 per row * 2 rows
    const [scrollIndex, setScrollIndex] = useState(0);

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        const maxIndex = Math.ceil(ourProducts.length / itemsPerPage) - 1;
        setScrollIndex((prev) => Math.min(prev + 1, maxIndex));
    };

    const startIndex = scrollIndex * itemsPerPage;
    const visibleProducts = ourProducts.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className='max-w-[1170px] mx-auto my-7'>
            <div className="mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Our Products</h1>
            </div>

            <div className='flex justify-between pb-9'>
                <h1 className='text-4xl pr-6 font-semibold'>Explore Our Products</h1>
                <div className="flex items-center gap-4 pt-4 md:pt-0">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={(scrollIndex + 1) * itemsPerPage >= ourProducts.length}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Products Grid (2 rows x 4 columns) */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {visibleProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>

            <div className='text-center pt-7'>
                <button className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 rounded'>
                    View All Products
                </button>
            </div>
        </div>
    );
};

export default ExploreProducts;
