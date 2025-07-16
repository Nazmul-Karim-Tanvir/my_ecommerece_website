import React, { useState } from 'react';
import signupImage from '../../assets/images/signupimage/signup-image.png';

const SignUp = () => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#f1f5f9] to-[#dbeafe]">
            <div className="w-full max-w-[1170px] bg-white/80 backdrop-blur-lg shadow shadow-gray-300 rounded-xl overflow-hidden flex flex-col md:flex-row relative transition duration-500">

                {/* Image Section */}
                <div className="relative w-full md:w-1/2 h-52 md:h-auto">
                    <img
                        src={signupImage}
                        alt="Signup"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 md:hidden" />
                </div>

                {/* Form Section */}
                <div className="w-full md:w-1/2 p-6 sm:p-10 md:p-12 flex flex-col justify-center bg-white/80 backdrop-blur-md">
                    <h2 className="text-3xl font-bold text-center md:text-left text-[#1f2937] mb-6">
                        {isLogin ? 'Welcome Back!' : 'Get Started'}
                    </h2>

                    <form className="space-y-5">
                        {!isLogin && (
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Enter your full name"
                                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@example.com"
                                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {!isLogin && (
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="Re-enter your password"
                                    className="w-full mt-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                        )}

                        {isLogin && (
                            <div className="text-right">
                                <button className="text-sm text-blue-600 hover:underline font-medium">
                                    Forgot Password?
                                </button>
                            </div>
                        )}

                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-[#6366f1] to-[#3b82f6] hover:from-[#3b82f6] hover:to-[#2563eb] text-white py-2.5 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg"
                        >
                            {isLogin ? 'Login' : 'Sign Up'}
                        </button>
                    </form>

                    <p className="mt-6 text-center text-sm text-gray-600">
                        {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                        <button
                            onClick={() => setIsLogin(!isLogin)}
                            className="text-blue-600 hover:underline font-semibold"
                        >
                            {isLogin ? 'Sign Up' : 'Login'}
                        </button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;