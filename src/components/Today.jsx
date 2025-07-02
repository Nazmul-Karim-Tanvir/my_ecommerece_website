import ProductCard from './ProductCard';
import FlashSales from './FlashSales';
import products from '../store/products';

const Today = () => {
    const todayProducts = products.filter(product => product.section === "today");

    return (
        <div className='mt-30'>
            < div className="max-w-[1170px] mx-auto m-auto mb-7 flex items-center gap-3" >
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Today's</h1>
            </div >
            <FlashSales />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {todayProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            <div className='text-center mx-auto'>
                <button className='bg-red-600 hover:bg-red-400 text-white py-2 px-8 my-6 content-center rounded'>View All Products</button>
            </div>

            <hr className='border-gray-300' />
        </div>
    )
}

export default Today