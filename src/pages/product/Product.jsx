import React, { useState } from 'react';
import products from '../../store/products';
import ProductCard from '../../components/ProductCard';

// All possible categories (some may have no product now)
const categories = {
    all: 'All Products',
    today: "Today’s Deals",
    thisMonth: "This Month",
    ourProducts: "Our Products",
    women: "Woman’s Fashion",
    men: "Men’s Fashion",
    electronics: "Electronics",
    home: "Home & Lifestyle",
    medicine: "Medicine",
    sports: "Sports & Outdoor",
    baby: "Baby’s & Toys",
    groceries: "Groceries & Pets",
    health: "Health & Beauty",
    smartphone: "Smartphone",
    monitor: "Monitor",
    watch: "Watch",
    camera: "Camera",
    headphones: "Headphones",
    gamepad: "Gamepad",
};

const Product = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    // Merge all products into one array
    const allProducts = [
        ...products.today,
        ...products.thisMonth,
        ...products.ourProducts,
    ];

    // Filtering logic
    const getFilteredProducts = () => {
        if (activeCategory === 'all') return allProducts;

        // Convert to lowercase to check if productName contains category name
        const lower = (text) => text.toLowerCase();

        return allProducts.filter((product) =>
            lower(product.productName).includes(lower(activeCategory))
        );
    };

    const filteredProducts = getFilteredProducts();

    return (
        <div className="max-w-[1170px] mx-auto px-4 py-10">
            {/* Category Badges */}
            <div className="flex flex-wrap gap-3 justify-center mb-8">
                {Object.entries(categories).map(([key, label]) => (
                    <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeCategory === key
                            ? 'bg-black text-white'
                            : 'bg-gray-200 hover:bg-gray-300'
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>

            {/* Product Grid or Message */}
            {filteredProducts.length > 0 ? (
                <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            ) : (
                <div className="text-center text-gray-500 text-lg py-20">
                    No products available in this category.
                </div>
            )}
        </div>
    );
};

export default Product;
