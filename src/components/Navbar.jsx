import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, ShoppingCart, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navLinks = [
        { label: 'Home', path: '/' },
        { label: 'About', path: '/about' },
        { label: 'Contact', path: '/contact' },
        { label: 'Sign Up', path: '/signUp' },
    ];

    return (
        <nav className="bg-white pt-6 pb-4 px-4 md:px-8 border-b border-gray-300 relative z-50">
            <div className="max-w-[1170px] mx-auto flex items-center justify-between">

                {/* Brand */}
                <div className="text-xl font-bold text-gray-900">
                    Exclusive
                </div>

                {/* Nav Links - Desktop */}
                <ul className="hidden md:flex gap-8 text-gray-700 font-sans font-medium">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`hover:underline hover:underline-offset-4 ${location.pathname === link.path ? 'underline underline-offset-4 text-black font-semibold' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Search + Icons */}
                <div className="flex items-center gap-4">
                    {/* Search bar - Desktop */}
                    <div className='hidden md:flex border border-gray-300 px-3 py-1 rounded-md w-60'>
                        <input
                            type="text"
                            placeholder="What are you Looking for?"
                            className="flex-grow outline-none text-sm"
                        />
                        <Search className='ml-3 w-5 h-5' />
                    </div>

                    {/* Search icon - Mobile */}
                    <div className="md:hidden">
                        <Search className='w-6 h-6 text-gray-700' />
                    </div>

                    <Link to="/wishList" className="text-gray-700">
                        <Heart className="w-6 h-6 hover:text-red-500" />
                    </Link>
                    <Link to="/Cart" className="text-gray-700">
                        <ShoppingCart className="w-6 h-6 hover:text-blue-500" />
                    </Link>

                    {/* Hamburger / Cross Toggle */}
                    <button
                        className="md:hidden text-gray-700"
                        onClick={toggleMenu}
                    >
                        {menuOpen ? (
                            <X className="w-6 h-6" />
                        ) : (
                            <Menu className="w-6 h-6" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div className={`md:hidden fixed top-0 right-0 h-full w-[75%] bg-white shadow-lg transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleMenu}>
                        <X className="w-6 h-6 text-gray-700" />
                    </button>
                </div>
                <ul className="flex flex-col gap-6 text-gray-700 font-medium px-6 mt-4">
                    {navLinks.map(link => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                onClick={() => setMenuOpen(false)}
                                className={`block text-lg ${location.pathname === link.path ? 'underline underline-offset-4 text-black font-semibold' : ''
                                    }`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
