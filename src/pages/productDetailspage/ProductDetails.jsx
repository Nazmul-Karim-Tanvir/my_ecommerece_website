import React, { useState } from 'react';
import { Heart, Minus, Plus } from 'lucide-react';

import img1 from '../../assets/images/productDetails/image1.svg';
import img2 from '../../assets/images/productDetails/image58.svg';
import img3 from '../../assets/images/productDetails/image61.svg';
import img4 from '../../assets/images/productDetails/image63.svg';

const images = [img1, img2, img3, img4];

const ProductDetails = () => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    const [quantity, setQuantity] = useState(1);
    const [color, setColor] = useState('white');
    const [size, setSize] = useState('M');

    return (
        <div className="max-w-[1170px] mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Image Section */}
            <div className="flex flex-col md:flex-row gap-5">
                <div className="flex md:flex-col gap-3 justify-center">
                    {images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`thumb-${idx}`}
                            onClick={() => setSelectedImage(img)}
                            className={`w-20 h-20 object-contain rounded-md border-2 cursor-pointer transition-all duration-300
                                ${selectedImage === img ? 'border-black scale-105' : 'border-gray-300 hover:border-black'}
                            `}
                        />
                    ))}
                </div>
                <div className="flex-1 flex items-center justify-center">
                    <div className="rounded-xl border overflow-hidden shadow-sm p-4 bg-white">
                        <img
                            src={selectedImage}
                            alt="Selected Product"
                            className="w-full h-[400px] object-contain transition-all duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-semibold text-gray-900">Havic HV G-92 Gamepad</h1>
                    <div className="flex items-center gap-2 text-yellow-500 mt-1">
                        ★★★★☆
                        <span className="text-sm text-gray-600">(150 Reviews)</span>
                        <span className="text-green-600 ml-2 text-sm">In Stock</span>
                    </div>
                    <div className="text-2xl font-bold mt-2">$192.00</div>
                </div>

                <p className="text-gray-700 text-[15px] leading-relaxed">
                    PlayStation 5 Controller Skin with high-quality vinyl, air channel adhesive for easy bubble-free install and mess-free removal.
                    Pressure sensitive material ensures smooth application.
                </p>

                {/* Color Options */}
                <div>
                    <p className="font-medium mb-2">Colours:</p>
                    <div className="flex items-center gap-3">
                        {['white', 'red'].map((col) => (
                            <div
                                key={col}
                                onClick={() => setColor(col)}
                                className={`w-6 h-6 rounded-full cursor-pointer border-2
                                    ${col === 'white' ? 'bg-white' : 'bg-red-600'}
                                    ${color === col ? 'ring-2 ring-black' : 'border-gray-300'}
                                `}
                            />
                        ))}
                    </div>
                </div>

                {/* Size Options */}
                <div>
                    <p className="font-medium mb-2">Size:</p>
                    <div className="flex gap-2 flex-wrap">
                        {['XS', 'S', 'M', 'L', 'XL'].map((sz) => (
                            <button
                                key={sz}
                                onClick={() => setSize(sz)}
                                className={`px-3 py-1 rounded border transition-all duration-200
                                    ${size === sz ? 'bg-black text-white border-black' : 'bg-white text-black border-gray-300 hover:border-black'}
                                `}
                            >
                                {sz}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Quantity and Actions */}
                <div className="flex flex-wrap items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 border rounded px-3 py-1.5">
                        <button
                            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                            className="p-1 hover:text-red-600 transition"
                        >
                            <Minus size={16} />
                        </button>
                        <span className="w-6 text-center">{quantity}</span>
                        <button
                            onClick={() => setQuantity((prev) => prev + 1)}
                            className="p-1 hover:text-green-600 transition"
                        >
                            <Plus size={16} />
                        </button>
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-sm transition-all">
                        Buy Now
                    </button>

                    <button className="border p-2 rounded-md hover:bg-gray-100 transition">
                        <Heart size={20} />
                    </button>
                </div>

                {/* Delivery Info */}
                <div className="mt-6 space-y-3 border-t pt-4 text-sm text-gray-700">
                    <div className="flex items-center gap-2">
                        🚚 <span>Free Delivery</span>
                        <a href="#" className="text-blue-600 underline ml-2">Enter your postal code</a>
                    </div>
                    <div className="flex items-center gap-2">
                        🔁 <span>Return Delivery</span>
                        <span className="ml-2">
                            Free 30 Days Delivery Returns. <a href="#" className="underline text-blue-600">Details</a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
