import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import CategoryCardItem from "../../CommonComponents/CategoryCardItem";
import { CategoryBrowse } from "../../../../Data/category";

const Category = () => {
  return (
    <div className="mt-[60px]">
      <div className="container m-auto pt-[80px] border-t border-t-[#ddd]">
        <ProductCommonLayout
          heading={"Categories"}
          description={"Browse By Category"}
          ProductCard={CategoryCardItem}
          isArrowsTrue={true}
          pertialItemShow={6}
          componentData={CategoryBrowse}
        />
      </div>
    </div>
  );
};

export default Category;
