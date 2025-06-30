import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="max-w-[1170px] mx-auto flex gap-6 py-3">
            {/* Left Sidebar - Categories */}
            <div className="w-1/4 border-r border-gray-300">
                <ul className="space-y-4 text-xl font-medium text-gray-600">
                    <li className="cursor-pointer hover:text-black">Woman’s Fashion</li>
                    <li className="cursor-pointer hover:text-black">Men’s Fashion</li>
                    <li className="cursor-pointer hover:text-black">Electronics</li>
                    <li className="cursor-pointer hover:text-black">Home & Lifestyle</li>
                    <li className="cursor-pointer hover:text-black">Medicine</li>
                    <li className="cursor-pointer hover:text-black">Sports & Outdoor</li>
                    <li className="cursor-pointer hover:text-black">Baby’s & Toys</li>
                    <li className="cursor-pointer hover:text-black">Groceries & Pets</li>
                    <li className="cursor-pointer hover:text-black">Health & Beauty</li>
                </ul>
            </div>

            {/* Right Side - Hero Banner */}
            <div className="w-3/4 relative bg-black text-white overflow-hidden flex items-center p-10">
                <div className="w-1/2 space-y-4">
                    <div className="flex items-center gap-6">
                        <img src="../src/assets/images/heroImages/iphone-logo.png" alt="Apple" className="w-10 h-12" />
                        <p className="text-xl text-gray-200">iPhone 14 Series</p>
                    </div>
                    <h2 className="text-6xl font-bold leading-tight">Up to 10% off Voucher</h2>
                    <button className="mt-4 inline-flex items-center gap-1 text-white hover:text-gray-300 transition">
                        <span className="border-b border-white leading-none">Shop Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="w-1/2">
                    <img src="../src/assets/images/heroImages/iphone-hero.png" alt="iPhone" className="w-full object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Hero