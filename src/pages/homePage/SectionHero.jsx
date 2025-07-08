import { ArrowRight } from 'lucide-react';

const SectionHero = () => {
    return (
        <div className="max-w-[1170px] mx-auto flex gap-6 py-3 px-4 sm:px-6 lg:px-0 flex-col md:flex-row">

            {/* Left Sidebar - Categories */}
            <div className="w-full md:w-1/4 border-b md:border-b-0 md:border-r border-gray-300">
                <ul className="flex flex-wrap md:flex-col gap-2 md:gap-4 text-sm md:text-xl font-medium text-gray-600">
                    {[
                        "Woman’s Fashion",
                        "Men’s Fashion",
                        "Electronics",
                        "Home & Lifestyle",
                        "Medicine",
                        "Sports & Outdoor",
                        "Baby’s & Toys",
                        "Groceries & Pets",
                        "Health & Beauty"
                    ].map((item) => (
                        <li
                            key={item}
                            className="
                                cursor-pointer 
                                hover:text-black

                                /* Desktop: normal vertical list */
                                md:block
                                md:bg-transparent
                                md:px-0
                                md:py-0
                                md:rounded-none
                                md:m-0

                                /* Small/Medium devices: badge style */
                                bg-gray-200 
                                text-gray-800 
                                px-3 
                                py-1 
                                rounded-full 
                                whitespace-nowrap
                                inline-block
                                transition
                            "
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Right Side - Hero Banner */}
            <div className="w-full md:w-3/4 relative bg-black text-white overflow-hidden flex items-center p-6 md:p-10 mt-4 md:mt-0">
                <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-6">
                        <img
                            src="../src/assets/images/heroImages/iphone-logo.png"
                            alt="Apple"
                            className="w-10 h-12"
                        />
                        <p className="text-xl text-gray-200">iPhone 14 Series</p>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Up to 10% off Voucher
                    </h2>
                    <button className="mt-4 inline-flex items-center gap-1 text-white hover:text-gray-300 transition mx-auto md:mx-0">
                        <span className="border-b border-white leading-none">Shop Now</span>
                        <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
                <div className="w-full md:w-1/2 mt-6 md:mt-0">
                    <img
                        src="../src/assets/images/heroImages/iphone-hero.png"
                        alt="iPhone"
                        className="w-full object-contain"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionHero;
