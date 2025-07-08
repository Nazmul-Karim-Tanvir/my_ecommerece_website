import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart, Search, Menu } from 'lucide-react'; // added Menu icon

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-white pt-6 pb-4 px-4 md:px-8 border-b border-gray-300">
            <div className="max-w-[1170px] mx-auto flex items-center justify-between">

                {/* Brand */}
                <div className="text-xl font-bold text-gray-900">
                    Exclusive
                </div>

                {/* Nav Links - hidden on small screens */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-sans font-medium">
                    <li><Link to="/" className="hover:underline hover:underline-offset-4">Home</Link></li>
                    <li><Link to="/about" className="hover:underline hover:underline-offset-4">About</Link></li>
                    <li><Link to="/contact" className="hover:underline hover:underline-offset-4">Contact</Link></li>
                    <li><Link to="/signUp" className="hover:underline hover:underline-offset-4">Sign Up</Link></li>
                </ul>

                {/* Search + Icons */}
                <div className="flex items-center gap-4">
                    {/* Search bar - hidden on small screens */}
                    <div className='hidden md:flex border border-gray-300 px-3 py-1 rounded-md w-60'>
                        <input
                            type="text"
                            placeholder="What are you Looking for?"
                            className="flex-grow outline-none text-sm"
                        />
                        <Search className='ml-3 w-5 h-5' />
                    </div>

                    {/* Search icon on small screens only */}
                    <div className="md:hidden">
                        <Search className='w-5 h-5 text-gray-700' />
                    </div>

                    {/* Wishlist & Cart icons */}
                    <Link to="/wishList" className="text-gray-700">
                        <Heart className="w-6 h-6 hover:text-red-500" />
                    </Link>
                    <Link to="/Cart" className="text-gray-700">
                        <ShoppingCart className="w-6 h-6 hover:text-blue-500" />
                    </Link>

                    {/* Hamburger menu - small screens only */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (Optional) */}
            {menuOpen && (
                <div className="md:hidden mt-4 px-4">
                    <ul className="flex flex-col gap-3 text-gray-700 font-medium">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/signUp">Sign Up</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
