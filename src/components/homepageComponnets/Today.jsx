import React, { useState } from 'react';
import ProductCard from '../productCardComponent/ProductCard';
import { useCountdown } from '../../utils/countdown';
import products from '../../store/products';
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
    const { days, hours, minutes, seconds, total } = useCountdown(flashSalesTargetDate);

    return (
        <div className='mt-30'>
            {/* Section Heading */}
            <div className="max-w-[1170px] mx-auto mb-3 flex items-center gap-3">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Today's</h1>
            </div>

            {/* FlashSales and Arrows */}
            <div className="max-w-[1170px] mx-auto flex items-center justify-between">

                {/* Countdown Display */}
                {total > 0 ? (
                    <div className="font-semibold flex flex-col md:flex-row items-start md:items-center md:gap-x-28 gap-y-6 pb-9 px-4 md:px-0">
                        <h1 className="text-3xl md:text-4xl pt-2 md:pt-6">Flash Sales</h1>
                        <div className="font-semibold">
                            <div className="text-sm md:text-base flex justify-between gap-6 md:gap-8 text-gray-600 pb-1">
                                <span>Days</span>
                                <span>Hours</span>
                                <span>Minutes</span>
                                <span>Seconds</span>
                            </div>
                            <div className="text-2xl md:text-4xl flex items-center gap-3 md:gap-4">
                                <span>{days}</span>
                                <span className="text-red-600">:</span>
                                <span>{hours}</span>
                                <span className="text-red-600">:</span>
                                <span>{minutes}</span>
                                <span className="text-red-600">:</span>
                                <span>{seconds}</span>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-xl font-bold text-red-600">Sale Ended!</div>
                )}

                {/* Navigation Arrows */}
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
                        width: `${todayProducts.length * 298.5}px`,
                        transform: `translateX(-${scrollIndex * 298.5}px)`,
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
