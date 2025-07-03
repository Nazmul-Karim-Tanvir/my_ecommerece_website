import React from 'react'
import { useEffect, useState } from 'react';
const FlashSales = () => {
    // Set your countdown target date here
    const targetDate = new Date('2025-07-30T00:00:00'); // YYYY-MM-DDTHH:mm:ss

    const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTime = getTimeLeft(targetDate);
            setTimeLeft(updatedTime);

            if (updatedTime.total <= 0) {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval); // Clean up
    }, []);

    if (timeLeft.total <= 0) {
        return <div className="text-xl font-bold text-red-600">Sale Ended!</div>;
    }

    return (
        <div className='font-semibold flex items-start pb-9 gap-x-28'>
            {/* Flash Sales Title */}
            <h1 className='text-4xl pt-6'>Flash Sales</h1>

            {/* Countdown block */}
            <div className="font-semibold">
                {/* Labels */}
                <div className="text-base flex justify-between gap-8 text-gray-600 pb-1">
                    <span>Days</span>
                    <span>Hours</span>
                    <span>Minutes</span>
                    <span>Seconds</span>
                </div>

                {/* Countdown values */}
                <div className="text-4xl flex items-center gap-4">
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



    )
}
// Helper function
function getTimeLeft(targetDate) {
    const target = targetDate.getTime();
    const now = new Date().getTime();
    const difference = target - now;

    const rawDays = Math.floor(difference / (1000 * 60 * 60 * 24));
    const rawHours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const rawMinutes = Math.floor((difference / (1000 * 60)) % 60);
    const rawSeconds = Math.floor((difference / 1000) % 60);

    const time = {
        total: difference,
        days: String(rawDays).padStart(2, '0'),
        hours: String(rawHours).padStart(2, '0'),
        minutes: String(rawMinutes).padStart(2, '0'),
        seconds: String(rawSeconds).padStart(2, '0'),
    };

    return time;
}

export default FlashSales