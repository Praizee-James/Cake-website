import { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [cart, setCart] = useState(false);
  
  // Sample cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Pepperoni Pizza",
      price: 12.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=100&h=100&fit=crop"
    },
    {
      id: 2,
      name: "Chicken Burger",
      price: 8.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=100&h=100&fit=crop"
    },
    {
      id: 3,
      name: "Caesar Salad",
      price: 6.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=100&h=100&fit=crop"
    }
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(cartItems.map(item => 
      item.id === id 
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    ));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

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
        className={`fixed top-0 left-0 w-[300px] h-screen bg-white z-20 duration-300 ${
          nav ? "translate-x-0" : "-translate-x-full"
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

      {/* Cart Overlay */}
      {cart && (
        <div 
          onClick={() => setCart(!cart)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        ></div>
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-white z-20 duration-300 flex flex-col ${
          cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Cart Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold flex items-center">
            <BsFillCartFill className="mr-3" />
            Your Cart
          </h2>
          <AiOutlineClose
            onClick={() => setCart(!cart)}
            size={28}
            className="cursor-pointer hover:bg-gray-100 rounded-full p-1 transition-colors"
          />
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-400">
              <BsFillCartFill size={80} className="mb-4 opacity-20" />
              <p className="text-xl">Your cart is empty</p>
              <p className="text-sm mt-2">Add some delicious items!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-gray-50 rounded-xl p-4 hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-20 h-20 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{item.name}</h3>
                      <p className="text-orange-500 font-bold text-lg">${item.price.toFixed(2)}</p>
                      
                      <div className="flex items-center justify-between mt-2">
                        {/* Quantity Controls */}
                        <div className="flex items-center bg-white rounded-full border-2 border-gray-200">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <AiOutlineMinus size={16} />
                          </button>
                          <span className="px-4 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                          >
                            <AiOutlinePlus size={16} />
                          </button>
                        </div>

                        {/* Delete Button */}
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:bg-red-50 p-2 rounded-full transition-colors"
                        >
                          <RiDeleteBin6Line size={20} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 p-6 bg-gray-50">
            {/* Price Breakdown */}
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold pt-2 border-t-2 border-gray-300">
                <span>Total</span>
                <span className="text-orange-500">${total.toFixed(2)}</span>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="w-full bg-black text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-colors shadow-lg">
              Checkout
            </button>

            {/* Continue Shopping */}
            <button 
              onClick={() => setCart(!cart)}
              className="w-full mt-3 text-gray-600 py-2 hover:text-black transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;