import React from 'react'
import Hero from '../../components/Hero';
import ProductCard from '../../components/ProductCard';

const HomePage = () => {
    return (
        <div>
            <Hero />
            {/* আর future এ অন্য section: Featured, Categories, etc */}
            <ProductCard />
            Testing
        </div>
    );
}

export default HomePage
