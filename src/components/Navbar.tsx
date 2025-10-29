import React, {useState} from "react"
import { AiFillTag, AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai"
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs"
import { FaUserFriends, FaWallet } from "react-icons/fa"
import { MdFavorite, MdHelp } from "react-icons/md"
import {TbTruckDelivery} from "react-icons/tb"
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
            <div className='flex items-center'>
                <div onClick={() => setNav(!nav)} className='cursor-pointer'>
                    <AiOutlineMenu size={25} />
                </div>
                <h1 className='text-xl sm:test-2xl lg:text-3xl px-2'>Fluffy<span className="font-bold">Treats</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]" >
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p>PickUp</p>
                </div>
            </div>
            {/* search */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]" >
                <AiOutlineSearch size = {20}/>
                <input className="bg-transparent p-2 focus:outline-none w-full" type="text" placeholder="Search food" />
            </div>
            {/* cart */}
            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-xl">
                <BsFillCartFill size = {20} className="mr-2" />Cart
            </button>
            {/* Mobile menu */}
            {nav ? <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div> : ''}
            
            {/* sidebar menu */}
            <div className={ nav ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300" : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"} >
                <AiOutlineClose onClick= {() => setNav (!nav)} size= {30} className="absolute right-4 top-4 cursor-pointer"/>
                <h2 className="text-2xl p-4">Go <span className="font-bold" >Foods</span></h2>
                <nav>
                    <ul className="flex flex-col p-4 text-black">
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><TbTruckDelivery size = {25} className = "mr-4" />Orders</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><MdFavorite size = {25} className = "mr-4" />Favorites</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><FaWallet size = {25} className = "mr-4" />Wallet</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><MdHelp size = {25} className = "mr-4" />Help</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><AiFillTag size = {25} className = "mr-4" />Promotions</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><BsFillSaveFill size = {25} className = "mr-4" />Best options</li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl"><FaUserFriends size = {25} className = "mr-4" />Invites</li>  
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Navbar
