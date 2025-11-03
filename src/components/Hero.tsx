
// import cakes from '../assets/YummyCake.jpg'
const Hero = () => {
  return (
    <div className='max-w-[1240px] mx-auto p-4' >
      <div className='max-h-[500px]  relative flex '>
        {/* overlay */}
        <div className='absolute w-full h-full text-gray-200 max-h-[500px] bg-black/30 flex flex-col justify-center'>
          <h2 className='px-4 text-white/70'>People trust us to get</h2>
          <h1 className='px-4 text-gray-200 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold'>The <span className='text-amber-700'>Best</span></h1>
          <h1 className='px-4 text-gray-100 text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-bold' >Cakes <span className='text-amber-700'>Delivered</span></h1>
          <p className='px-4 text-white/70'>Order to get your favorite cake delivered</p>
        </div>
        <button className="border-white bg-white text-black mx-4 absolute bottom-12">Place Order</button>
        <img className='w-full max-h-[500px] object-cover' src='https://media.istockphoto.com/id/1137038601/photo/home-baked-iced-cupcakes-with-red-berries.webp?a=1&b=1&s=612x612&w=0&k=20&c=1V00TrrAE_d3IstfzsWNr4ZI9cop4qDys1ZYXTa29P4=' alt="" />
      </div>
    </div>
  )
}

export default Hero
