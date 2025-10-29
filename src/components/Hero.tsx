import React from 'react'
// import cakes from '../assets/YummyCake.jpg'
const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4' >
      <div className='max-h-[500px] relative'>
        {/* overlay */}
        <div className='absolute w-full h-full text-grau-200 max-h-[500px] bg-black/40 flex flex-col justify-center'>
            <h1 className='px-4 text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold'>The <span className='text-orange-700'>Best</span></h1>
            <h1 className='px-4 text-gray-100 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold' >Cakes <span className='text-orange-700'>Delivered</span></h1>
        </div>
        <img className='w-full max-h-[500px] object-cover' src='https://images.unsplash.com/photo-1599785209615-a35f883d93c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHxjYWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' alt="" />
      </div>
    </div>
  )
}

export default Hero
