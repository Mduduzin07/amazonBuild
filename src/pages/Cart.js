import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { emptyCart } from "../assets/index";
import {
  decreamentQuantity,
  deleteItem,
  increamentQuantity,
  resetCart,
} from "../redux/amazonSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.amazon.products);
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [products]);

  return (
    <div className="w-full bg-gray-100 p-4">
      {products.length > 0 ? (
        <div className="container mx-auto h-auto grid grid-cols-5 gap-8">
          <div className="w-full bg-white h-full px-4 col-span-4">
            <div
              className="font-titleFont flex items-center justify-between
            border-b-[1px] border-b-gray-400 py-3"
            >
              <h2 className="text-3xl font-medium">Shopping Cart</h2>
              <h4 className="text-xl font-normal">Subtotal</h4>
            </div>
            {/* Products start here */}
            <div>
              {products.map((item) => (
                <div
                  key={item.id}
                  className="w-full border-b-[1px] border-b-gray-300 p-4
                 flex items-center gap-6 "
                >
                  <div className="w-full flex items-center gap-6">
                    <div className="w-1/5">
                      <img
                        className="w-full h-44 object-contain"
                        src={item.image}
                        alt="ProductImg"
                      />
                    </div>
                    <div className="w-3/5">
                      <h2 className="font-semibold text-lg">{item.title}</h2>
                      <p className="text-sm">
                        {item.description.substring(0, 300)}
                      </p>
                      <p className="text-base">
                        Unit Price{" "}
                        <span className="font-semibold">
                          ${item.price.toFixed(2)}
                        </span>
                      </p>
                      <div
                        className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24
                       py-1 text-center drop-shadow-lg rounded"
                      >
                        <p>Qty:</p>
                        <p
                          onClick={() => dispatch(decreamentQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md
                       hover:bg-gray-400 duration-300"
                        >
                          -
                        </p>
                        <p>{item.quantity}</p>
                        <p
                          onClick={() => dispatch(increamentQuantity(item.id))}
                          className="cursor-pointer bg-gray-200 px-1 rounded-md
                        hover:bg-gray-400 duration-300"
                        >
                          +
                        </p>
                      </div>
                      <button
                        onClick={() => {
                          dispatch(deleteItem(item.id));
                        }}
                        className="bg-red-500 w-36 py-1 rounded-lg text-white mt-2
                       hover:bg-red-700 active:bg-red-900 duration-300"
                      >
                        Delete Item
                      </button>
                    </div>
                    <div>
                      <p className="text-lg font-titleFont font-semibold">
                        ${item.price * item.quantity.toFixed(2)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full py-3">
              <button
                onClick={() => {
                  dispatch(resetCart());
                }}
                className="px-10 py-2 bg-red-500 hover:bg-red-600 active:bg-red-500
            text-white rounded-lg font-titleFont font-semibold text-lg tracking-wide"
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="w-full bg-white h-52 col-span-1 flex flex-col justify-center items-center p-4">
            <div>
              <p className="flex gap-2 items-start text-sm">
                <span>
                  <CheckCircleIcon className="bg-white text-green-500 rounded-full" />
                </span>
                Your order qualifies for FREE shipping Choose this option at
                checkout. See details...
              </p>
            </div>
            <div>
              <p className="font-semibold px-10 py-1 gap-2 flex items-center justify-between">
                Total: <span className="text-lg font-bold ">${totalPrice}</span>
              </p>
            </div>
            <button
              className="w-full font-titleFont font-medium text-base bg-gradient-to-tr
           from-yellow-400 to-yellow-200 border hover:from-yellow-300 hover:to-yellow-500
           border-yellow-500 hover:border-yellow-700 active:bg-gradient-to-bl
           active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3"
            >
              Proceed to Pay
            </button>
          </div>
        </div>
      ) : (
        <motion.div
          initial={{ y: 70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center items-center gap-4 py-10"
        >
          <div>
            <img
              className="w-80 rounded-lg p-4 mx-auto"
              src={emptyCart}
              alt="emptyCart"
            />
          </div>
          <div className="w-96 p-4 bg-white flex flex-col items-center rounded-md shadow-lg">
            <h1 className="font-titleFont text-xl font-bold">
              Your Cart feels lonely.
            </h1>
            <p className="text-sm text-center">
              Your Shopping cart lives to serve. Give it purpose - fill it with
              books, electronics, videos, etc. and make it happy.
            </p>
            <Link to="/">
              <button
                className="mt-6 bg-yellow-400 rounded-md cursor-pointer hover:bg-yellow-500
              active:bg-yellow-700 px-8 py-2 font-titleFont font-semibold text-lg"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Cart;
