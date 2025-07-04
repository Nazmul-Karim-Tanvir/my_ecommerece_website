import React from 'react'

const Services = () => {
    return (
        <div className='max-w-[1170px] mx-auto px-4 mt-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                <div>
                    <h1 className='text-2xl font-semibold mb-4'>FREE AND FAST DELIVERY</h1>
                    <p className='text-gray-600 mb-5'>Free delivery for all orders over $140</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-4'>24/7 CUSTOMER SERVICE</h1>
                    <p className='text-gray-600 mb-5'>Friendly 24/7 customer support</p>
                </div>
                <div>
                    <h1 className='text-2xl font-semibold mb-4'>MONEY BACK GUARANTEE</h1>
                    <p className='text-gray-600 mb-5'>We return money within 30 days</p>
                </div>
            </div>
        </div>
    )
}

export default Services;
