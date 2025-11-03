import { useState } from 'react'
import { data } from '../data/data.ts'
const Cakes = () => {
    // console.log(data)
    const [cakes, setCakes] = useState(data);

    // filter cake name
    const filterType = (name: string) => {
        setCakes(
            data.filter((item) => {
                return item.name === name;
            })
        );
    };


    // filter by price
    // filter by price
    const filterPrice = (price: number) => {
        const filtered = data.filter((item) => item.price === price);
        console.log('Filtering by price:', price);
        console.log('Filtered:', filtered);
        setCakes(filtered);
    };



    return (
        <div className='max-w-[1640px] m-auto px-4 py-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center' >Top Rated Menu Items</h1>
            {/* filter */}
            <div className='flex flex-col lg:flex-row justify-between'>
                {/* Filter Row */}
                <div>
                    {/* Filter Type */}
                    <div>
                        <p className='font-bold text-gray-700'>Filter Type</p>
                        <div className='flex justify-between flex-wrap'>
                            <button onClick={() => setCakes(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                            <button onClick={() => filterType('Vanilla cake')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Vanilla cake</button>
                            <button onClick={() => filterType('Chocolate cake')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >Chocolate cake</button>
                            <button onClick={() => filterType('Red velvet cake')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >Red velvet cake</button>
                        </div>
                    </div>
                </div>
                {/* Filter Price */}
                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>
                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => filterPrice(1000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >1000</button>
                        <button onClick={() => filterPrice(1500)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >1500</button>
                        <button onClick={() => filterPrice(2000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >2000</button>
                        <button onClick={() => filterPrice(2500)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white' >2500</button>
                    </div>
                </div>
            </div>
            {/* Display images */}
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {cakes.map((item) => (
                    <div key={item.id} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p><span className='bg-orange-500 text-white p-1 rounded-xl'>{item.price}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cakes
