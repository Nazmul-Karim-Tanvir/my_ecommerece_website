import React from 'react';
import speakerImage from '../assets/images/offerImages/speaker.svg';
import useCountdown from '../utils/useCountdown';

const ExclusiveOffer = () => {
    const targetDate = new Date('2025-07-30T00:00:00');
    const { days, hours, minutes, seconds, total } = useCountdown(targetDate);

    return (
        <div className='my-[100px]'>
            <div className='relative bg-black text-white rounded overflow-hidden h-[500px] flex items-center justify-between px-10'>

                {/* Text Content */}
                <div className="z-10 max-w-md">
                    <p className='font-sans font-semibold py-5 text-green-400'>categories</p>
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Enhance Your Music Experience</h2>
                    <p className="text-gray-300 mb-6">
                        Get the best sound experience with our top-rated speaker. Limited time offer. Don’t miss out!
                    </p>

                    {total > 0 ? (
                        <div className="flex gap-4 text-white text-xl font-mono mb-6">
                            <div className="text-center">
                                <div className="text-4xl font-bold">{days}</div>
                                <div className="text-sm text-green-400">Days</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{hours}</div>
                                <div className="text-sm text-green-400">Hours</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{minutes}</div>
                                <div className="text-sm text-green-400">Minutes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-4xl font-bold">{seconds}</div>
                                <div className="text-sm text-green-400">Seconds</div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-red-600 font-bold text-2xl mb-6">Offer Ended!</div>
                    )}

                    <button className="bg-green-400 hover:bg-red-600 transition text-white px-9 py-3 rounded font-semibold">
                        Buy Now
                    </button>
                </div>

                {/* Speaker Image - Vertically Centered */}
                <div className="absolute right-4 top-1/2 -translate-y-1/2 hidden md:block">
                    <img
                        src={speakerImage}
                        alt="Speaker"
                        className="h-[330px] object-contain drop-shadow-[0_4px_40px_rgba(255,255,255,0.4)]"
                    />
                </div>
            </div>
        </div>
    );
};

export default ExclusiveOffer;
