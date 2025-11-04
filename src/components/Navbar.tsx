import { useState } from "react";
import {
    AiFillTag,
    AiOutlineClose,
    AiOutlineMenu,
    AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import Cart from "./Cart";
import { data } from "../data/data"; // Import your data

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [cart, setCart] = useState(false);

    // Sample cart items using actual data
    const [cartItems, setCartItems] = useState([
        {
            ...data[0],
            quantity: 2
        },
        {
            ...data[4],
            quantity: 1
        },
        {
            ...data[8],
            quantity: 1
        }
    ]);

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
            {/* Left side */}
            <div className="flex items-center">
                <div onClick={() => setNav(!nav)} className="cursor-pointer">
                    <AiOutlineMenu size={25} />
                </div>

                <h1 className="text-xl sm:text-2xl lg:text-3xl px-2">
                    Fluffy<span className="font-bold">Treats</span>
                </h1>

                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="px-2">Pickup</p>
                </div>
            </div>

            {/* Search input */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={20} />
                <input
                    className="bg-transparent p-2 focus:outline-none w-full"
                    type="text"
                    placeholder="Search food"
                />
            </div>

            {/* Cart button */}
            <button
                onClick={() => setCart(!cart)}
                className="bg-black text-white hidden md:flex items-center py-2 px-3 rounded-xl relative hover:bg-gray-800 transition-colors"
            >
                <BsFillCartFill size={20} className="mr-2" />
                Cart
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold">
                        {cartItems.length}
                    </span>
                )}
            </button>

            {/* Mobile cart button */}
            <button
                onClick={() => setCart(!cart)}
                className="bg-black text-white md:hidden flex items-center p-2 rounded-xl relative hover:bg-gray-800 transition-colors"
            >
                <BsFillCartFill size={20} />
                {cartItems.length > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                        {cartItems.length}
                    </span>
                )}
            </button>

            {/* Left Sidebar Overlay */}
            {nav && (
                <div
                    onClick={() => setNav(!nav)}
                    className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
                ></div>
            )}

            {/* Left Sidebar menu */}
            <div
                className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 ${nav ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className="absolute right-4 top-4 cursor-pointer"
                />
                <h2 className="text-2xl p-4">
                    Fluffy<span className="font-bold">Treats</span>
                </h2>
                <nav>
                    <ul className="flex flex-col p-4 text-black">
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <TbTruckDelivery size={25} className="mr-4" /> Orders
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <MdFavorite size={25} className="mr-4" /> Favorites
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <FaWallet size={25} className="mr-4" /> Wallet
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <MdHelp size={25} className="mr-4" /> Help
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <AiFillTag size={25} className="mr-4" /> Promotions
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <BsFillSaveFill size={25} className="mr-4" /> Best options
                        </li>
                        <li className="text-xl py-4 flex hover:bg-gray-200 hover:rounded-xl cursor-pointer px-2">
                            <FaUserFriends size={25} className="mr-4" /> Invites
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Cart Component */}
            <Cart
                cart={cart}
                setCart={setCart}
                cartItems={cartItems}
                setCartItems={setCartItems}
            />
        </div>
    );
};

export default Navbar;