import React from 'react'
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';
import Today from '../../components/Today';
import BestSelling from '../../components/BestSelling';

const HomePage = () => {
    return (
        <div className='max-w-[1170px] mx-auto'>
            <Hero />
            <Today />
            <BestSelling />
            {/* আর future এ অন্য section: Featured, Categories, etc */}
        </div>
    );
}

export default HomePage
