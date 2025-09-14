import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";
import { GoSearch } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { AiTwotoneShopping } from "react-icons/ai";
import { FaRegStar, FaUser } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { BiLogOut } from "react-icons/bi";
import { NavMenubar } from "./NavMenu";
const Navbar = () => {
  const navbar = NavMenubar();

  const [account, setaccount] = useState(false);
  const userAccRef = useRef(null);

  const handleAccount = () => {
    setaccount((prev) => !prev);
  };

  /** ==== Close menu on click outside ==== */
  useEffect(() => {
    const close = window.addEventListener("click", (e) => {
      // console.log(e.target);
      if (userAccRef.current && !userAccRef.current.contains(e.target)) {
        setaccount(false);
      }
    });

    return () => close;
  }, []);

  return (
    <div className="pt-7 pb-4 border-b-[0.5px] border-b-[#ddd]">
      <div className="container m-auto">
        <div className="flex justify-between items-center">
          {/* Left side */}
          <div>
            <h1 className="text-[24px] font-bold font-inter text-black tracking-[3px] leading-[24px]">
              Exclusive
            </h1>
          </div>
          {/* Middle side navbar */}
          <div>
            <ul className="ragular flex items-center gap-x-[48px]">
              {navbar?.map(({ item, id, path }) => (
                <li className="navbarhover hover:text-text1" key={id}>
                  <NavLink to={`/${path}`}>{item}</NavLink>
                </li>
              ))}
            </ul>
          </div>
          {/* right side */}
          <div className="flex gap-x-14">
            {/* search bar  */}
            <div className="flex items-center relative font-poppins text-[15px]">
              <input
                type="search"
                placeholder="What are you looking for?"
                className="bg-Secondary outline outline-text1 rounded-[3px] p-1 ps-3 w-[243px]"
              />
              <span>
                <GoSearch className="absolute right-1.5 top-1/2 -translate-y-1/2" />
              </span>
            </div>
            {/* icons all */}
            <div className="flex items-center gap-x-8">
              <span className="text-[26px] cursor-pointer">
                <GiSelfLove />
              </span>
              <span className=" text-[32px] cursor-pointer amount">
                <AiTwotoneShopping />
              </span>
              <div className="relative group" ref={userAccRef}>
                {/* User icon*/}
                <div className="user" onClick={handleAccount}>
                  <span className="text-[26px] cursor-pointer">
                    <FaUser />
                  </span>
                </div>

                {/* Dropdown Menu */}
                {account && (
                  <div className="absolute right-[3%] top-[104%] w-[224px] bg-userbg bg-blur-[150px] ps-5 pt-3.5 pb-2.5 flex flex-col gap-y-3 text-primary rounded-[3PX] z-50">
                    <div className="flex items-center gap-x-4 hover:scale-105 transition-all">
                      <span className="text-[26px]">
                        <FaUser />
                      </span>
                      <h3 className="text-[14px] font-poppins font-normal text-primary cursor-pointer">
                        Manage My Account
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-4 hover:scale-105 transition-all">
                      <span className="text-[26px]">
                        <FiShoppingBag />
                      </span>
                      <h3 className="text-[14px] font-poppins font-normal text-primary cursor-pointer">
                        My Order
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-4 hover:scale-105 transition-all">
                      <span className="text-[26px]">
                        <RxCrossCircled />
                      </span>
                      <h3 className="text-[14px] font-poppins font-normal text-primary cursor-pointer">
                        My Cancellations
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-4 hover:scale-105 transition-all">
                      <span className="text-[26px]">
                        <FaRegStar />
                      </span>
                      <h3 className="text-[14px] font-poppins font-normal text-primary cursor-pointer">
                        My Reviews
                      </h3>
                    </div>
                    <div className="flex items-center gap-x-4 hover:scale-105 transition-all">
                      <span className="text-[26px]">
                        <BiLogOut />
                      </span>
                      <h3 className="text-[14px] font-poppins font-normal text-primary cursor-pointer">
                        Logout
                      </h3>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
