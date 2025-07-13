import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import products from '../../store/products';
import ProductCard from '../../components/ProductCard';

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
    const location = useLocation();

    const [activeCategory, setActiveCategory] = useState('all');
    const [perPage, setPerPage] = useState(6);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const categoryFromQuery = params.get('category');

        if (categoryFromQuery && categories[categoryFromQuery]) {
            setActiveCategory(categoryFromQuery);
            setCurrentPage(1);
        }
    }, [location.search]);

    const getFilteredProducts = () => {
        if (activeCategory === 'all') {
            return Object.values(products).flat();
        }
        return products[activeCategory] || [];
    };

    const filteredProducts = getFilteredProducts();

    const totalPages = Math.ceil(filteredProducts.length / perPage);
    const startIndex = (currentPage - 1) * perPage;
    const paginatedProducts = filteredProducts.slice(startIndex, startIndex + perPage);

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
        setCurrentPage(1);
    };

    const handlePerPageChange = (e) => {
        setPerPage(Number(e.target.value));
        setCurrentPage(1);
    };

    return (
        <div className="max-w-[1170px] mx-auto px-4 py-10">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Sidebar - Large Screens */}
                <aside className="hidden lg:block w-1/4">
                    <div className="space-y-2 sticky top-20 bg-gray-50 p-4 rounded shadow-sm">
                        <h2 className="text-lg font-semibold mb-2 text-gray-800">Categories</h2>
                        {Object.entries(categories).map(([key, label]) => (
                            <button
                                key={key}
                                onClick={() => handleCategoryChange(key)}
                                className={`w-full text-left px-3 py-2 rounded text-sm font-medium transition ${activeCategory === key
                                        ? 'bg-black text-white'
                                        : 'bg-gray-200 hover:bg-gray-300'
                                    }`}
                            >
                                {label}
                            </button>
                        ))}
                    </div>
                </aside>

                {/* Main Content */}
                <main className="w-full lg:w-3/4">
                    {/* Category Dropdown - Mobile */}
                    <div className="lg:hidden mb-6">
                        <label htmlFor="categorySelect" className="block text-sm font-medium text-gray-700 mb-1">
                            Select Category
                        </label>
                        <select
                            id="categorySelect"
                            value={activeCategory}
                            onChange={(e) => handleCategoryChange(e.target.value)}
                            className="w-full border rounded px-3 py-2 text-sm"
                        >
                            {Object.entries(categories).map(([key, label]) => (
                                <option key={key} value={key}>
                                    {label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Per Page Selector */}
                    <div className="flex justify-end mb-4">
                        <div className="flex items-center gap-2 text-sm bg-gray-100 px-4 py-2 rounded">
                            <label htmlFor="perPage" className="text-gray-600">
                                Show per page:
                            </label>
                            <select
                                id="perPage"
                                value={perPage}
                                onChange={handlePerPageChange}
                                className="border rounded px-2 py-1 text-sm"
                            >
                                <option value={3}>3</option>
                                <option value={6}>6</option>
                                <option value={9}>9</option>
                            </select>
                        </div>
                    </div>

                    {/* Product Grid */}
                    {paginatedProducts.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {paginatedProducts.map((product) => (
                                <ProductCard key={product.id} {...product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center text-gray-500 text-lg py-20">
                            No products available in this category.
                        </div>
                    )}

                    {/* Pagination */}
                    {filteredProducts.length > perPage && (
                        <div className="flex justify-center mt-10 gap-4">
                            <button
                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className={`px-4 py-2 rounded border text-sm font-medium ${currentPage === 1
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                Prev
                            </button>
                            <span className="text-sm text-gray-600 pt-2">
                                Page {currentPage} of {totalPages}
                            </span>
                            <button
                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className={`px-4 py-2 rounded border text-sm font-medium ${currentPage === totalPages
                                        ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                        : 'bg-white hover:bg-gray-100'
                                    }`}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
};

export default Product;
