import React from 'react'
import {category} from '../data/data.js'
const Category = () => {
    console.log(category)
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Items</h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-6 py-6'>
{category.map((item) => (
    <div key={item.id} className='bg-gray-100 rounded-lg p-4 flex justify-between items-center'>
<h2 className='font-bold sm:text-xl'>{item.name}</h2>
<img src={item.image} className='w-20' alt={item.name} />
    </div>
))}
      </div>
    </div>
  )
}

export default Category
