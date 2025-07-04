import React, { useReducer } from "react";
import { useLoaderData } from "react-router";
import StarIcon from "@mui/icons-material/Star";
import ApiIcon from "@mui/icons-material/Api";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { addToCart } from "../../redux/amazonSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const dispatch = useDispatch();
  const data = useLoaderData();
  const productsData = data.data;

  return (
    <div
      className="max-w-screen-2xl mx-auto grid grid-cols-1 
      md:grid-cols-2 xl:grid-cols-4 xl:gap-10 px-4 py-5 gap-4"
    >
      {productsData.map((product) => (
        <div
          key={product.id}
          className="bg-white h-auto border-[1px] border-gray-200 py-3 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4"
        >
          <div className="w-full h-auto flex items-center justify-center relative px-4 group">
            <img
              className="w-52 h-64 object-contain"
              src={product.image}
              alt="ProductImg"
            />
            <ul className="w-full h-36 bg-gray-100 absolute bottom-[-170px] flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r group-hover:bottom-0 duration-700">
              <li className="productLi">
                Compare
                <span>
                  <ApiIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Cart
                <span>
                  <ShoppingCartIcon />
                </span>
              </li>
              <li className="productLi">
                View Details
                <span>
                  <ArrowCircleRightIcon />
                </span>
              </li>
              <li className="productLi">
                Add to Wishlist
                <span>
                  <FavoriteIcon />
                </span>
              </li>
            </ul>
            <span className="text-xs capitalize italic absolute top-0 right-3 text-gray-500">
              {product.category}
            </span>
          </div>
          <div className="px-2 z-10 bg-white">
            <div className="flex items-center justify-between">
              <h2 className="font-titleFont tracking-wide text-lg text-amazon_blue font-medium">
                {product.title.substring(0, 20)}
              </h2>
              <p className="text-sm text-gray-600 font-semibold">
                ${product.price.toFixed(2)}
              </p>
            </div>
            <div>
              <p className="text-sm">
                {product.description.substring(0, 100)}...
              </p>
              <div className="text-yellow-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button
              onClick={() =>
                dispatch(
                  addToCart({
                    id: product.id,
                    title: product.title,
                    description: product.description,
                    price: product.price,
                    category: product.category,
                    image: product.image,
                    quantity: 1,
                  })
                )
              }
              className="w-full font-titleFont font-medium text-base 
              bg-gradient-to-tr from-yellow-400 to-yellow-200 border hover:from-yellow-300
               hover:to-yellow-500 border-yellow-500 hover:border-yellow-700 
               active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3 mb-[-10px]"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
