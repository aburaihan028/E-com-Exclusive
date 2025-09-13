import React from "react";
import Frame611 from "../../assets/ProductImg/Frame611.png";
import { GiSelfLove } from "react-icons/gi";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import Star from "./Star";

const ProductCard = ({ itemData }) => {
  // console.log(itemData);
  return (
    <div>
      <div className="mt-[40px]">
        <div className="group w-[270px] h-[430px]">
          {/*=== Img part ====*/}
          <div className="w-[300px] h-[300px] px-[40px] py-[35px] bg-Secondary rounded flex justify-center relative cursor-pointer overflow-hidden">
            <div>
              <picture>
                <img
                  src={itemData ? itemData.thumbnail : Frame611}
                  alt={Frame611}
                  className="w-full h-full object-contain"
                />
              </picture>
            </div>
            {itemData.discountPercentage && (
              <div className="flex items-center justify-center w-[65px] h-[26px] bg-Secondary2 text-text text-[14px] font-poppins font-normal rounded absolute top-[12px] left-[12px]">
                - {itemData ? itemData.discountPercentage : 0}%
              </div>
            )}
            <div className="absolute top-[12px] right-[12px] flex flex-col gap-y-[12px]">
              <span className="w-[40px] h-[40px] text-[18px] rounded-full bg-primary flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:scale-[1.1] transition-all cursor-pointer">
                <GiSelfLove />
              </span>
              <span className="w-[40px] h-[40px] text-[20px] rounded-full bg-primary flex justify-center items-center hover:bg-Secondary2 hover:text-white hover:scale-[1.1] transition-all cursor-pointer">
                <IoEyeOutline />
              </span>
            </div>
            {/* ADD TO CARD */}
            <div className=" absolute bottom-[-60px] group-hover:bottom-0 transition-all duration-400 bg-black h-[41px] w-full text-text font-poppins font-medium text-[16px] flex justify-center items-center">
              ADD TO CARD
            </div>
          </div>
          {/*==== description part =====*/}
          <div className="flex flex-col gap-y-2 mt-4">
            <h2 className="font-poppins font-bold line-clamp-1 group-hover:line-clamp-none transition-all duration-300 cursor-pointer">
              {itemData ? itemData.title : "HAVIT HV-G92 title Missing"}
            </h2>
            {/* Discount price */}
            <span className="font-poppins font-bold text-Secondary2">
              {/* or */}
              {itemData
                ? (
                    itemData.price -
                    (itemData.price * itemData.discountPercentage) / 100
                  ).toFixed(2)
                : "0.00"}
              <del className="text-[#00000080] ms-3">
                ${itemData ? itemData.price.toFixed(2) : "0.00"}
              </del>
            </span>
            {/*  */}
            <div className="flex items-center justify-start gap-x-3">
              <div className="flex items-center gap-x-1">
                {" "}
                <Star rating={itemData ? itemData.rating : 0} />
                {/* {[...new Array(5)].map((item, index) => (
                  <span key={index} className="text-[#FFAD33]">
                    {itemData ? <FaStar /> : itemData.rating}
                  </span>
                ))} */}
              </div>
              <span>(88)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
