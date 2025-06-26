import React from "react";
import { NavMenubar } from "./NavMenu";
import { NavLink } from "react-router";
import { GoSearch } from "react-icons/go";
import { GiSelfLove } from "react-icons/gi";
import { AiTwotoneShopping } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
const Navbar = () => {
  const navbar = NavMenubar();
  return (
    <div className="pt-10 pb-4 border-[0.5px] border-b-[#ddd]">
      <div className="container m-auto">
        <div className="flex justify-between">
          {/* Left side */}
          <div>
            <h1 className="text-[24px] font-bold font-inter text-black tracking-[3px] leading-[24px]">
              Exclusive
            </h1>
          </div>
          {/* Middle side */}
          <div className="fontcss flex items-center gap-x-[48px]">
            {navbar?.map(({ item, id }) => (
              <ul>
                <li className="navbarhover" key={id}>
                  <NavLink to={`/${item}`}>{item}</NavLink>
                </li>
              </ul>
            ))}
          </div>
          {/* right side */}
          <div className="flex gap-x-14">
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
            <div className="flex items-center gap-x-8">
              <span className="text-[26px]">
                <GiSelfLove />
              </span>
              <span className=" text-[32px] amount">
                <AiTwotoneShopping />
              </span>
              <span className="text-[26px] user">
                <FaUser />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
