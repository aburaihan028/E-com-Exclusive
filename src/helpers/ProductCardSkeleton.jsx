import React from "react";

const ProductCardSkeleton = () => {
  return (
    <div className="mt-[40px] animate-pulse">
      <div className="w-[270px]">
        {/*=== Image Placeholder ===*/}
        <div className="w-[300px] h-[300px] px-[40px] py-[35px] bg-gray-200 rounded flex justify-center relative overflow-hidden">
          <div className="w-full h-full bg-gray-300 rounded"></div>

          <span className="absolute top-[12px] left-[12px] w-[55px] h-[26px] bg-gray-300 rounded"></span>

          <div className="absolute top-[12px] right-[12px] flex flex-col gap-y-[12px]">
            <span className="w-[40px] h-[40px] bg-gray-300 rounded-full"></span>
            <span className="w-[40px] h-[40px] bg-gray-300 rounded-full"></span>
          </div>

          <div className="absolute bottom-[-60px] group-hover:bottom-0 bg-gray-300 h-[41px] w-full rounded"></div>
        </div>

        {/*=== Description Placeholder ===*/}
        <div className="flex flex-col gap-y-3 mt-4">
          <div className="w-[70%] h-[20px] bg-gray-300 rounded"></div>
          <div className="w-[50%] h-[20px] bg-gray-300 rounded"></div>

          <div className="flex items-center gap-x-3 mt-2">
            <div className="flex gap-x-1">
              {[...new Array(5)].map((_, index) => (
                <span
                  key={index}
                  className="w-[16px] h-[16px] bg-gray-300 rounded"
                ></span>
              ))}
            </div>
            <div className="w-[30px] h-[16px] bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
