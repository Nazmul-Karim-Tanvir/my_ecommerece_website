import { CircleDollarSign, Landmark, ShoppingBag, Store } from 'lucide-react'
import React from 'react'

const Growth = () => {
    return (
        <div className='max-w-[1170px] mx-auto flex justify-between text-center mb-28'>
            <div className='flex flex-col items-center border border-gray-300 rounded px-6 py-6 gap-2 w-[270px] h-[230px] hover:bg-red-600/80 hover:text-white transition-all'>
                <div className='className="w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center mb-4'>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                        <Store className="text-white" size={40} />
                    </div>
                </div>
                <h1 className='font-sans font-semibold text-3xl'>10.5k </h1>
                <p>Sellers active on our site</p>
            </div>
            <div className='flex flex-col items-center border border-gray-300 rounded px-6 py-6 gap-2 w-[270px] h-[230px] hover:bg-red-600/80 hover:text-white transition-all'>
                <div className='className="w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center mb-4'>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                        <CircleDollarSign className="text-white" size={40} />
                    </div>
                </div>
                <h1 className='font-sans font-semibold text-3xl'>33k </h1>
                <p>Mopnthly Produduct Sale</p>
            </div>
            <div className='flex flex-col items-center border border-gray-300 rounded px-6 py-6 gap-2 w-[270px] h-[230px] hover:bg-red-600/80 hover:text-white transition-all'>
                <div className='className="w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center mb-4'>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                        <ShoppingBag className="text-white" size={40} />
                    </div>
                </div>
                <h1 className='font-sans font-semibold text-3xl'>45.5k </h1>
                <p>Customer active in our site</p>
            </div>
            <div className='flex flex-col items-center border border-gray-300 rounded px-6 py-6 gap-2 w-[270px] h-[230px] hover:bg-red-600/80 hover:text-white transition-all'>
                <div className='className="w-20 h-20 rounded-full border-8 border-gray-300 flex items-center justify-center mb-4'>
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white">
                        <Landmark className="text-white" size={40} />
                    </div>
                </div>
                <h1 className='font-sans font-semibold text-3xl'>25k </h1>
                <p>Anual gross sale in our site</p>
            </div>
        </div>

    )
}

export default Growth