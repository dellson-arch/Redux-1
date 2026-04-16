import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, decrementQuantity, removeFromCart } from "../features/cartSlice";
import { useLocation } from "react-router";

const ProductCard = ({ product, quantity }) => {
  // Destructuring for cleaner code
  const { title, price, image, category, rating } = product;

  const {pathname} = useLocation()

  const dispatch = useDispatch();

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      {/* Product Image */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
        />
        {category && (
          <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h5 className="text-xl font-bold tracking-tight text-gray-900 line-clamp-1">
            {title}
          </h5>
        </div>

        {/* Rating */}
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 text-sm">★ ★ ★ ★ ☆</span>
          <span className="text-gray-500 text-xs ml-2">
            ({rating?.count || 0})
          </span>
        </div>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-bold text-gray-900">${price}</span>
         
         {pathname === '/cart' ? (
            <div>
              <p>Quantity-{quantity}</p>
                <button onClick={()=>dispatch(removeFromCart(product))}
              className="w-full mt-4 bg-red-600 text-white p-2 rounded-lg  transition"
            >
              Remove from cart
            </button>
            </div>
         ) : (
            quantity ? (
            <div className="flex gap-6 items-center">
              <p onClick={()=>dispatch(decrementQuantity(product))} className="p-2 bg-red-500">-</p>
              <p className="text-xl">{quantity}</p>
              <p onClick={()=>{dispatch(addToCart(product))}} className="p-2 bg-green-500">+</p>
            </div>
          ) : (
            <button
              onClick={() => {
                dispatch(addToCart(product))

            }}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center transition-colors"
            >
              Add to Cart
            </button>

          )
         )}
          
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
