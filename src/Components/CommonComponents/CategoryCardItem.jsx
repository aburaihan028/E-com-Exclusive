import React from "react";

const CategoryItem = ({ itemData }) => {
  return (
    <div>
      <div className="mt-[60px] w-[240px] h-[165px] bg-transparent rounded border border-[#ddd] flex items-center justify-center cursor-pointer group hover:bg-button2 transition-all">
        <div className="flex flex-col items-center gap-y-2.5">
          {" "}
          <span className="text-[50px] group-hover:text-white group-hover:scale-[1.2]">
            {<itemData.img />}
          </span>
          <h1 className="text-lg text-black font-poppins font-normal group-hover:text-white group-hover:scale-[1.2]">
            {itemData.name}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default CategoryItem;
