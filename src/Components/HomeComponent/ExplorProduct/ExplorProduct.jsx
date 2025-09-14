import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetSellingProductQuery } from "../../../Features/AllSlice/Api/product.Api";
import Button from "../../CommonComponents/Button";

const ExplorProduct = () => {
  const { data, error, isLoading } = useGetSellingProductQuery();

  return (
    <div>
      <div className="container m-auto">
        <ProductCommonLayout
          ProductCard={ProductCard}
          heading={"Our Products"}
          description={"Explore Our Products"}
          pertialItemShow={5}
          componentData={data && data?.products}
          isArrowsTrue={true}
          rows={2}
        />
        {/* View ALL Product btn */}
        <div className="flex justify-center items-center mt-[60px]">
          <Button text={" View All Products"} />
        </div>
      </div>
    </div>
  );
};

export default ExplorProduct;
