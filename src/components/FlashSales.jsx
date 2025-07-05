import React, { useEffect, useState } from 'react';

const FlashSales = () => {
    const targetDate = new Date('2025-07-30T00:00:00');
    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTime = getTimeLeft(targetDate);
            setTimeLeft(updatedTime);

            if (updatedTime.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    if (timeLeft.total <= 0) {
        return <div className="text-xl font-bold text-red-600">Sale Ended!</div>;
    }

    return (
        <div className="font-semibold flex flex-col md:flex-row items-start md:items-center md:gap-x-28 gap-y-6 pb-9 px-4 md:px-0">
            {/* Flash Sales Title */}
            <h1 className="text-3xl md:text-4xl pt-2 md:pt-6">
                Flash Sales
            </h1>

            {/* Countdown block */}
            <div className="font-semibold">
                {/* Labels */}
                <div className="text-sm md:text-base flex justify-between gap-6 md:gap-8 text-gray-600 pb-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Minutes</span>
                    <span>Seconds</span>
                </div>

                {/* Countdown values */}
                <div className="text-2xl md:text-4xl flex items-center gap-3 md:gap-4">
                    <span>{timeLeft.days}</span>
                    <span className="text-red-600">:</span>
                    <span>{timeLeft.hours}</span>
                    <span className="text-red-600">:</span>
                    <span>{timeLeft.minutes}</span>
                    <span className="text-red-600">:</span>
                    <span>{timeLeft.seconds}</span>
                </div>
            </div>
        </div>
    );
};

// Helper function
function getTimeLeft(targetDate) {
    const target = targetDate.getTime();
    const now = new Date().getTime();
    const difference = target - now;

    return {
        total: difference,
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0'),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, '0'),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, '0'),
    };
}

export default FlashSales;
