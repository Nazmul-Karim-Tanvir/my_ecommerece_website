import { Camera, Monitor, Watch, Headphones, Gamepad } from 'lucide-react'

const Categories = () => {
    return (
        <div className='mt-30'>
            < div className="max-w-[1170px] mx-auto m-auto mb-7 flex items-center gap-3" >
                <div className="bg-red-600 w-[20px] h-[40px] rounded"></div>
                <h1 className="font-semibold text-xl text-red-600 font-mono">Categories</h1>
            </div >
            <div className='flex justify-between mx-auto pb-9'>
                <h1 className='text-4xl pr-6 font-semibold'>Browse By Category</h1>
                <button className='text-white bg-red-600 rounded px-6'></button>
            </div>
            <div>
                <ul>
                    <li><Smartphone /></li>
                    <li><Monitor /></li>
                    <li><Watch /></li>
                    <li><Camera /></li>
                    <li><Headphones /></li>
                    <li><Gamepad /></li>
                </ul>
            </div>
            <hr className='border-gray-300 my-8' />
        </div>
    )
}

export default Categories