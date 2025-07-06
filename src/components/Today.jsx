import React, { useState } from 'react';
import ProductCard from './ProductCard';
import FlashSales from './FlashSales';
import products from '../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Today = () => {
    const todayProducts = products.today;

    const [scrollIndex, setScrollIndex] = useState(0);
    const visibleCount = 4;

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        setScrollIndex((prev) =>
            Math.min(prev + 1, todayProducts.length - visibleCount)
        );
    };

    // Define your desired target date here for the Flash Sales countdown:
    const flashSalesTargetDate = new Date('2025-07-30T00:00:00');

    return (
        <div className='mt-30'>
            {/* Section Heading */}
            <div className="max-w-[1170px] mx-auto mb-7 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Today's</h1>
            </div>

            {/* FlashSales and Arrows */}
            <div className="max-w-[1170px] mx-auto flex items-center justify-between">
                {/* Pass the targetDate prop here */}
                <FlashSales targetDate={flashSalesTargetDate} />
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
                        disabled={scrollIndex >= todayProducts.length - visibleCount}
                        className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600 cursor-pointer"
                        aria-label="Right"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>


            {/* Scrolling Track - Full Width */}
            <div className="w-full overflow-hidden relative">
                <div
                    className="flex transition-all duration-300 gap-6 pl-[calc((100%-1170px)/2)]"
                    style={{
                        width: `${todayProducts.length * 285}px`,
                        transform: `translateX(-${scrollIndex * 285}px)`,
                    }}
                >
                    {todayProducts.map((product) => (
                        <div key={product.id} className="min-w-[274.5px]">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>


            {/* View All Button */}
            <div className='text-center mx-auto pb-5 pt-7'>
                <button className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 rounded'>View All Products</button>
            </div>

            <hr className='max-w-[1170px] mx-auto border-gray-300' />
        </div>
    );
};

export default Today;
