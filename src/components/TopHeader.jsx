import React from 'react'
import { Link } from "react-router-dom";

const TopHeader = () => {
    return (
        <div className="w-full bg-black text-white text-md py-2 px-4">
            <div className="max-w-[1170px] mx-auto flex justify-between items-center">

                {/* Center Part */}
                <div className="flex-1 text-center">
                    <span className="text-gray-200">
                        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
                    </span>
                    <Link
                        to="/product"
                        className="text-white font-semibold underline ml-2"
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                        ShopNow
                    </Link>
                </div>

                {/* Right Part */}
                <div className="ml-4">
                    <select className="bg-black text-white">
                        <option>English</option>
                        <option>বাংলা</option>
                    </select>
                </div>
            </div>
        </div>
    )
}

export default TopHeader