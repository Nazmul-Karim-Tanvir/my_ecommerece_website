import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Search } from 'lucide-react'; // using lucide-react icons

const Navbar = () => {
    return (
        <nav className="bg-white pt-8 pb-4 px-8 border-b border-gray-300">
            <div className="container mx-auto flex items-center justify-between">

                {/* Brand */}
                <div className="text-xl font-bold text-gray-900">
                    Exclusive
                </div>

                {/* Nav Links */}
                <ul className="flex gap-8 text-gray-700 font-sans font-medium">
                    <li><Link to="/" className="hover:underline hover:underline-offset-4">Home</Link></li>
                    <li><Link to="/about" className="hover:underline hover:underline-offset-4">About</Link></li>
                    <li><Link to="/contact" className="hover:underline hover:underline-offset-4">Contact</Link></li>
                    <li><Link to="/signup" className="hover:underline hover:underline-offset-4">Sign Up</Link></li>
                </ul>

                <div className="ml-6 flex items-center">
                    <div className='flex border border-gray-300 px-3 py-1 rounded-md w-60'>
                        {/* Search box */}
                        <input
                            type="text"
                            placeholder="What are you Looking for?"
                            className="flex-grow outline-none text-sm"
                        />
                        <Search className='ml-3 w-5 h-5' />
                    </div>


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
