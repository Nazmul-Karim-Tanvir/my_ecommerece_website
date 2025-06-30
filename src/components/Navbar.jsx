import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, } from 'lucide-react'; // using lucide-react icons

const Navbar = () => {
    return (
        <nav className="bg-white py-4 px-8">
            <div className="container mx-auto flex items-center justify-between">

                {/* Brand */}
                <div className="text-xl font-bold text-gray-800">
                    Exclusive
                </div>

                {/* Nav Links */}
                <ul className="flex gap-8 text-gray-700 font-sans font-medium">
                    <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
                    <li><Link to="/about" className="hover:text-blue-500">About</Link></li>i
                    <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
                    <li><Link to="/signup" className="hover:text-blue-500">Sign Up</Link></li>
                </ul>

                <div className="ml-6 flex items-center">
                    {/* Search box */}
                    <input
                        type="text"
                        placeholder="What are you Looking for?"
                        className="border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />

                    {/* Icons */}
                    <div className="flex items-center gap-4 text-gray-700 ml-6">
                        <Heart className="w-5 h-5 hover:text-red-500 cursor-pointer" />
                        <ShoppingCart className="w-5 h-5 hover:text-blue-500 cursor-pointer" />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
