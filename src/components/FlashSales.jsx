import React from 'react'
import { useEffect, useState } from 'react';
const FlashSales = () => {
    // Set your countdown target date here
    const targetDate = new Date('2025-07-05T00:00:00'); // YYYY-MM-DDTHH:mm:ss

    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const interval = setInterval(() => {
            const updatedTime = getTimeLeft();
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
        <div className='max-w-[1170px] mx-auto font-semibold flex items-start pb-9'>
            <h1 className='text-4xl pr-6'>Flash Sales</h1>
            <div className="pl-6 text-4xl font-semibold flex gap-2">
                <span>{timeLeft.days}d</span> :
                <span>{timeLeft.hours}h</span> :
                <span>{timeLeft.minutes}m</span> :
                <span>{timeLeft.seconds}s</span>
            </div>
        </div>


    )
}
// Helper function
function getTimeLeft() {
    const target = new Date('2025-07-05T00:00:00').getTime();
    const now = new Date().getTime();
    const difference = target - now;

    const time = {
        total: difference,
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
    };

    return time;
}

export default FlashSales