import React from "react";

const ChatGpt = () => {
  return (
    <div>
      <div className="relative group">
        {/* User Icon */}
        <div className="user">
          <span className="text-[26px] cursor-pointer">
            <FaUser />
          </span>
        </div>

        {/* Dropdown Menu */}
        <div className="absolute right-[3%] top-full mt-2 w-[224px] bg-amber-500 backdrop-blur-[4px] ps-5 pt-3.5 pb-2.5 flex-col gap-y-3 text-primary rounded-[3px] hidden group-hover:flex transition-all duration-300 z-50">
          <div className="flex items-center gap-x-4">
            <span className="text-[26px]">
              <FaUser />
            </span>
            <h3 className="text-[14px] font-poppins font-normal text-primary">
              Manage My Account
            </h3>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-[26px]">
              <FiShoppingBag />
            </span>
            <h3 className="text-[14px] font-poppins font-normal text-primary">
              My Order
            </h3>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-[26px]">
              <RxCrossCircled />
            </span>
            <h3 className="text-[14px] font-poppins font-normal text-primary">
              My Cancellations
            </h3>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-[26px]">
              <FaRegStar />
            </span>
            <h3 className="text-[14px] font-poppins font-normal text-primary">
              My Reviews
            </h3>
          </div>
          <div className="flex items-center gap-x-4">
            <span className="text-[26px]">
              <BiLogOut />
            </span>
            <h3 className="text-[14px] font-poppins font-normal text-primary">
              Logout
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatGpt;
