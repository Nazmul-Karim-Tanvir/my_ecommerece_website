import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FlashSales from './FlashSales';
import products from '../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ExploreProducts = () => {

    const ourProducts = products.ourProducts;

    const [scrollIndex, setScrollIndex] = useState(0);
    const visibleCount = 4;

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        setScrollIndex((prev) =>
            Math.min(prev + 1, ourProducts.length - visibleCount)
        );
    };

    return (
        <div className='max-w-[1170px] mx-auto my-7'>
            <div className="max-w-[1170px] mx-auto mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Our Products</h1>
            </div>

            <div className='flex justify-between mx-auto pb-9'>
                <h1 className='text-4xl pr-6 font-semibold'>Explore Our Products</h1>
                <div className="flex items-center gap-4 pt-4 md:pt-0">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                        aria-label="Left"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={scrollIndex >= ourProducts.length - visibleCount}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                        aria-label="Right"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Carousel */}
            <div className="max-w-[1170px] mx-auto overflow-hidden relative">
                <div className="flex transition-all duration-300 gap-6"
                    style={{ transform: `translateX(-${scrollIndex * 298.5}px)` }}>
                    {ourProducts.map(product => (
                        <div key={product.id} className="min-w-[274.5px]">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* View All Button */}
            <div className='text-center mx-auto pt-7'>
                <button className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 rounded'>View All Products</button>
            </div>
        </div>
    )
}

export default ExploreProducts