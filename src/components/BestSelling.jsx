import products from '../store/products'
import ProductCard from './ProductCard'
const BestSelling = () => {
    const todayProducts = products.filter(product => product.section === "thismonth");
    return (
        <div className='max-w-[1170px] mx-auto mt-30'>
            < div className="max-w-[1170px] mx-auto m-auto mb-7 flex items-center gap-3" >
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">This Month</h1>
            </div >
            <div className='flex justify-between mx-auto pb-9'>
                <h1 className='text-4xl pr-6 font-semibold'>Best Selling Products</h1>
                <button className='text-white bg-red-600 rounded px-6'>View All</button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {todayProducts.map(product => (
                    <ProductCard key={product.id} {...product} />
                ))}
            </div>
            <hr className='border-gray-300 my-8' />
        </div>
    )
}

export default BestSelling