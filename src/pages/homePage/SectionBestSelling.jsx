import React, { useState } from 'react';
import ProductCard from '../../components/productCardComponent/ProductCard';
import { useCountdown } from '../../utils/countdown';
import products from '../../store/products';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const SectionToday = () => {
    const todayProducts = products.today;
    const [scrollIndex, setScrollIndex] = useState(0);
    const visibleCount = 4;

    const scrollLeft = () => setScrollIndex(prev => Math.max(prev - 1, 0));
    const scrollRight = () => setScrollIndex(prev => Math.min(prev + 1, todayProducts.length - visibleCount));

    const flashSalesTargetDate = new Date('2025-07-30T00:00:00');
    const { days, hours, minutes, seconds, total } = useCountdown(flashSalesTargetDate);

    return (
        <div className='mt-30 px-4 sm:px-6 lg:px-0'>
            {/* Title Bar */}
            <div className="mb-3 flex items-center gap-3 max-w-[1170px] mx-auto">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Today's</h1>
            </div>

            {/* Flash Sales and Arrows */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[1170px] mx-auto gap-4 pb-9">
                {total > 0 ? (
                    <div className="flex flex-col md:flex-row items-start md:items-center gap-y-4 md:gap-x-28">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">Flash Sales</h1>
                        <div>
                            <div className="text-sm md:text-base flex gap-6 text-gray-600 pb-1">
                                <span>Days</span>
                                <span>Hours</span>
                                <span>Minutes</span>
                                <span>Seconds</span>
                            </div>
                            <div className="text-xl sm:text-2xl md:text-4xl flex gap-3 font-semibold">
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

                {/* Arrows */}
                <div className="flex gap-4 pt-2 md:pt-0">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600"
                    >
                        <ArrowLeft size={20} />
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={scrollIndex >= todayProducts.length - visibleCount}
                        className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center text-black disabled:text-gray-300 hover:text-red-600"
                    >
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>

            {/* Product Scroll */}
            <div className="w-full overflow-hidden relative">
                <div
                    className="flex transition-all duration-300 gap-6 pl-[calc((100%-1170px)/2)]"
                    style={{
                        width: `${todayProducts.length * 298.5}px`,
                        transform: `translateX(-${scrollIndex * 298.5}px)`,
                    }}
                >
                    {todayProducts.map(product => (
                        <div key={product.id} className="min-w-[274.5px]">
                            <ProductCard {...product} />
                        </div>
                    ))}
                </div>
            </div>

            {/* View All */}
            <div className='text-center mx-auto pb-5 pt-7'>
                <button className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 rounded text-sm sm:text-base'>
                    View All Products
                </button>
            </div>

            <hr className='border-gray-300 max-w-[1170px] mx-auto' />
        </div>
    );
};

export default SectionToday;
