import cakes from '../assets/YummyCake.jpg'
const TopCards = () => {
    return (
        <div className='max-w-[1240px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Premium cakes</p>
                    <p className="px-2">Through 24/7</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGNha2VzfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=1000" alt="" />
            </div>
             {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">Tasty treats</p>
                    <p className="px-2">Added daily</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1596223575327-99a5be4faf1e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU4fHxjYWtlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=1000" alt="" />
            </div>
             {/* card */}
            <div className="rounded-xl relative">
                {/* overlay */}
                <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
                    <p className="font-bold text-2xl px-2 pt-4">We deliver</p>
                    <p className="px-2">flavoured cupcakes</p>
                    <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
                </div>
                <img className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl" src={cakes} alt="" />
            </div>
        </div>
    )
}

export default TopCards
