import React, { useState } from "react";
import { amazonLogo } from "../../assets/index";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LogoutIcon from "@mui/icons-material/Logout";
import { getAuth, signOut } from "firebase/auth";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { allItems } from "../../constants";
import { motion } from "framer-motion";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { userSignOut } from "../../redux/amazonSlice";

const Header = () => {
  const dispatch = useDispatch();
  const auth = getAuth();
  const [showAll, setShowAll] = useState(false);
  const products = useSelector((state) => state.amazon.products);
  const userInfo = useSelector((state) => state.amazon.userInfo);
  console.log(userInfo);
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log("Sign out successfully");
        dispatch(userSignOut());
      })
      .catch((error) => {
        // An error happened.
        console.log(`Sign out error: ${error}`);
      });
  };

  return (
    <div className="w-full sticky top-0 z-50">
      <div className="w-full h-[90px] bg-amazon_blue text-white px-4 py-3 flex items-center gap-4">
        {/* ==================== Image Start here ==================== */}
        <Link to="/">
          <div className="headerHover">
            <img
              className="w-20 h-[52.7969px] mt-2"
              src={amazonLogo}
              alt="Logo"
            />
          </div>
        </Link>
        {/* ==================== Image End here ==================== */}
        {/* ==================== Deliver Start here ==================== */}
        <div className="headerHover hidden mdl:inline-flex">
          <LocationOnIcon />
          <p className="text-sm text-lightText font-light flex flex-col">
            Delivery to{" "}
            <span className="text-sm font-semibold -mt-1 text-whiteText">
              Gauteng, SA
            </span>
          </p>
        </div>
        {/* ==================== Deliver End here ==================== */}

        {/* ==================== Search Start here ==================== */}
        <div className="h-10 rounded-md lgl:flex hidden flex-grow relative ">
          <span onClick={() => setShowAll(!showAll)} className="allSpan">
            All<span></span>
            <ArrowDropDownIcon />
          </span>
          {showAll && (
            <div>
              <ul className="allUl">
                {allItems.map((item) => (
                  <li key={item._id} className="allLI">
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2"
            type="text"
          />
          <span className="searchButton">
            <SearchIcon />
          </span>
        </div>
        {/* ==================== Search End here ==================== */}

        {/* ==================== Signin Start here ==================== */}

        <Link to="/signin">
          <div className="headerHover flex flex-col items-start justify-center">
            {userInfo ? (
              <p className="text-sm  lgl:text-xs text-gray-100 font-medium mdl:text-lightText">
                {userInfo.userName}
              </p>
            ) : (
              <p className="text-sm lgl:text-xs text-white mdl:text-lightText font-light">
                Hello, sign in
              </p>
            )}
            <p className="text-sm font-semibold -mt-1 text-whiteText hidden mdl:inline-flex">
              Accounts & Lists
              <span>
                <ArrowDropDownIcon />
              </span>
            </p>
          </div>
        </Link>

        {/* ==================== Signin End here ==================== */}

        {/* ==================== Orders Start here ==================== */}
        <div className="headerHover hidden lgl:flex flex-col items-start justify-center">
          <p className="text-xs text-lightText font-light">Returns</p>
          <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
        </div>
        {/* ==================== Orders End here ==================== */}

        {/* ==================== Cart Start here ==================== */}
        <Link to="/cart">
          <div className="flex items-start justify-center headerHover relative">
            <ShoppingCartIcon />
            <p className="text-xs font-semibold mt-3 text-whiteText">
              Cart
              <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                {products.length > 0 ? products.length : 0}
              </span>
            </p>
          </div>
        </Link>
        {/* ==================== Cart End here ==================== */}
        {userInfo && (
          <div
            onClick={handleLogout}
            className="flex flex-col justify-center items-center headerHover relative"
          >
            <LogoutIcon />
            <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
              Log out
            </p>
          </div>
        )}
      </div>
      <HeaderBottom />
    </div>
  );
};

export default Header;
