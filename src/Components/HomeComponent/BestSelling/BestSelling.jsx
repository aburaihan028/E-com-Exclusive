import React from "react";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import ProductCard from "../../CommonComponents/ProductCard";
import { useGetSellingProductQuery } from "../../../Features/AllSlice/Api/product.Api";

const BestSelling = () => {
  const { data, error, isLoading } = useGetSellingProductQuery();
  //   console.log(data?.products);

  return (
    <div className="mt-[70px]">
      {" "}
      <div className="container m-auto pt-[80px] border-t border-t-[#ddd]">
        <ProductCommonLayout
          ProductCard={ProductCard}
          heading={"This Month"}
          description={"Best Selling Products"}
          viewBtn={true}
          pertialItemShow={5}
          componentData={data && data?.products}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
};

export default BestSelling;
