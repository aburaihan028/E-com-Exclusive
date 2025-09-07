import { useEffect } from "react";
import Button from "../../CommonComponents/Button";
import ProductCard from "../../CommonComponents/ProductCard";
import ProductCommonLayout from "../../CommonComponents/ProductCommonLayout";
import { useGetAllProductQuery } from "../../../Features/AllSlice/Api/product.Api";

const FlashSales = () => {
  // fech data
  const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <div className="mt-[140px]">
      <div className="container m-auto pb-[60px] border-b border-b-[#ddd]">
        <ProductCommonLayout
          ProductCard={ProductCard}
          isArrowsTrue={true}
          heading="Today's"
          description="Flash Sales"
          timeShow={true}
          setTime={"2025-07-20T00:00:00"}
          pertialItemShow={5}
          componentData={data && data?.products}
          // componentData={[...new Array(15)]}
          isLoading={isLoading}
        />
        {/* View ALL Product btn */}
        <div className="flex justify-center items-center mt-[60px]">
          <Button text={" View All Products"} />
        </div>
      </div>
    </div>
  );
};

export default FlashSales;
