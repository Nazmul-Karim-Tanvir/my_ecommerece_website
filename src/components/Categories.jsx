import React, { useState } from "react";
import {
    Smartphone,
    Monitor,
    Watch,
    Camera,
    Headphones,
    Gamepad,
} from "lucide-react";

const icons = [
    { Icon: Smartphone, label: "Smartphone" },
    { Icon: Monitor, label: "Monitor" },
    { Icon: Watch, label: "Watch" },
    { Icon: Camera, label: "Camera" },
    { Icon: Headphones, label: "Headphones" },
    { Icon: Gamepad, label: "Gamepad" },
    { Icon: Smartphone, label: "Extra" },
];

export default function Categories() {
    const [scrollIndex, setScrollIndex] = useState(0);
    const visibleCount = 4;

    const scrollLeft = () => {
        setScrollIndex((prev) => Math.max(prev - 1, 0));
    };

    const scrollRight = () => {
        setScrollIndex((prev) =>
            Math.min(prev + 1, icons.length - visibleCount)
        );
    };

    return (
        <div className="mt-30">
            {/* Red bar and Categories */}
            <div className="flex items-center gap-3 mb-7">
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Categories</h1>
            </div>

            {/* Browse by category with arrows */}
            <div className="flex justify-between items-center pb-9">
                <h1 className="text-4xl font-semibold">Browse By Category</h1>

                {/* Arrows */}
                <div className="flex items-center gap-3">
                    <button
                        onClick={scrollLeft}
                        disabled={scrollIndex === 0}
                        className="w-20 h-20 text-red-600 disabled:text-gray-300 text-2xl font-bold"
                        aria-label="Left"
                    >
                        &#8592;
                    </button>
                    <button
                        onClick={scrollRight}
                        disabled={scrollIndex >= icons.length - visibleCount}
                        className="w-20 h-20 text-red-600 disabled:text-gray-300 text-2xl font-bold"
                        aria-label="Right"
                    >
                        &#8594;
                    </button>
                </div>
            </div>

            {/* Carousel area */}
            <div className="w-full overflow-hidden">
                <ul className="flex justify-between gap-4">
                    {icons
                        .slice(scrollIndex, scrollIndex + visibleCount)
                        .map(({ Icon, label }, idx) => (
                            <li
                                key={idx}
                                className="flex flex-col items-center justify-center bg-gray-100 rounded shadow p-5 w-[250px] h-[180px] cursor-pointer hover:bg-red-600 hover:text-white transition-all"
                                title={label}
                            >
                                <Icon size={36} />
                                <span className="mt-3 text-base font-medium">{label}</span>
                            </li>
                        ))}
                </ul>
            </div>

            <hr className="border-gray-300 my-8" />
        </div>
    );
}
