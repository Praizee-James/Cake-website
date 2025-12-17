import type { FC } from "react";
import {
  // AiFillTag,
  AiOutlineClose,
  // AiOutlineMenu,
  // AiOutlineSearch,
  AiOutlineMinus,
  AiOutlinePlus,
} from "react-icons/ai";
import { BsFillCartFill} from "react-icons/bs";
// import { FaUserFriends, FaWallet } from "react-icons/fa";
// import { MdFavorite, MdHelp } from "react-icons/md";
// import { TbTruckDelivery } from "react-icons/tb";
import { RiDeleteBin6Line } from "react-icons/ri";

interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
}

interface CartProps {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: CartItem[];
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Cart: FC<CartProps> = ({
  cart,
  setCart,
  cartItems,
  setCartItems,
}) => {

  const updateQuantity = (id: number, change: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = 2.99;
  const total = subtotal + deliveryFee;

  return (
    <>
      {/* Cart Overlay */}
      {cart && (
        <div
          onClick={() => setCart(false)}
          className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"
        />
      )}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 w-full sm:w-[400px] h-screen bg-white z-20 duration-300 ${
          cart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <h2 className="text-2xl font-bold flex items-center">
            <BsFillCartFill className="mr-3" />
            Your Cart
          </h2>
          <AiOutlineClose
            onClick={() => setCart(false)}
            size={28}
            className="cursor-pointer"
          />
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {cartItems.length === 0 ? (
            <p className="text-center text-gray-400">Your cart is empty</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-gray-50 p-4 rounded-xl mb-3">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-orange-500 font-bold">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded-full">
                        <button onClick={() => updateQuantity(item.id, -1)}>
                          <AiOutlineMinus />
                        </button>
                        <span className="px-3">{item.quantity}</span>
                        <button onClick={() => updateQuantity(item.id, 1)}>
                          <AiOutlinePlus />
                        </button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500"
                      >
                        <RiDeleteBin6Line />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6">
            <div className="flex justify-between">
              <span>Total</span>
              <span className="font-bold text-orange-500">
                ${total.toFixed(2)}
              </span>
            </div>
            <button className="w-full bg-black text-white py-3 rounded-xl mt-4">
              Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
