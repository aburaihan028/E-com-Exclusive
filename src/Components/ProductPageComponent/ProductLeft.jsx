import React from "react";

const ProductLeft = ({ CategoryData, error, isLoading }) => {
  return (
    <div className="border-e-[1.5px] border-r-[#ddd]">
      <div className="ragular">
        <h2 className="font-poppins font-bold text-[20px] leading-[100%] mb-4">
          Shop by Category
        </h2>
        {/* category menu list */}
        <ul className="cursor-pointer">
          {isLoading ? (
            // Skeleton while loading
            [...Array(8)].map((_, index) => (
              <li
                key={index}
                className="relative font-poppins text-md font-normal py-3.5"
              >
                <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse"></div>
              </li>
            ))
          ) : error ? (
            <p className="text-red-500 p-3">Failed to load categories</p>
          ) : (
            // Show actual data
            CategoryData?.map((item, index) => (
              <li
                key={index}
                className="relative font-poppins text-md text-black font-normal py-3.5 hover:ps-3 hover:bg-gray-200 transition-all"
              >
                {item}
              </li>
            ))
          )}
        </ul>
        {/* category menu list */}

        {/* shop by color */}
        <div className="mt-8">
          <h2 className="font-poppins font-bold text-[20px] leading-[100%]">
            Shop by Color
          </h2>
          {/* select color */}
          <ul className="mt-6">
            <li className="font-poppins text-black font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-4">
                <span className="inline-block w-5 h-5 rounded-full bg-red-500"></span>
                <p>Red</p>
              </div>
            </li>
            <li className="font-poppins text-black font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-4">
                <span className="inline-block w-5 h-5 rounded-full bg-green-500"></span>
                <p>Green</p>
              </div>
            </li>
            <li className="font-poppins text-black font-normal py-3 cursor-pointer capitalize">
              <div className="flex items-center gap-x-4">
                <span className="inline-block w-5 h-5 rounded-full bg-blue-500"></span>
                <p>Blue</p>
              </div>
            </li>
          </ul>
        </div>
        {/* shop by color */}
      </div>
    </div>
  );
};

export default ProductLeft;
