import React from "react";
import Home from "../Pages/Home/Home";

const Header = () => {
  return (
    <div className="bg-(--black) font-inter">
      <div className="text-(--primary) container m-auto">
        <div className="flex justify-between items-center pt-[12px] pb-[12px] ">
          {/* Left side */}
          <div></div>
          {/* Middle side */}
          <div>
            <p className="text-(--primary) text-[15px]">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <span className="ms-3">ShopNow</span>
            </p>
          </div>
          {/* right side */}
          <div>
            <select name="" id="" className="text-[14px] bg-transparent">
              <option value="">English</option>
              <option value="">Bangla</option>
              <option value="">French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
