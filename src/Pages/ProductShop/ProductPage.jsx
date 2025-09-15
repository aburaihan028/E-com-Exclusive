import React from "react";
import ProductLeft from "../../Components/ProductPageComponent/ProductLeft";
import BreadCrumb from "../../Components/CommonComponents/BreadCrumb";
import { useGetCategoryListProductQuery } from "../../Features/AllSlice/Api/product.Api";
import ProductRight from "../../Components/ProductPageComponent/ProductRight";

const ProductPage = () => {
  const { data, error, isLoading } = useGetCategoryListProductQuery();

  return (
    <div className="container m-auto">
      <div className="pt-[80px]">
        <div>
          <BreadCrumb />
        </div>
        <div className="flex gap-x-4 mt-[55px]">
          {" "}
          {/* Product Left Part */}
          <div className="w-[20%]">
            <ProductLeft
              CategoryData={data}
              isLoading={isLoading}
              error={error}
            />
          </div>
          {/* Product Right Part */}
          <div className="w-[80%]">
            <ProductRight />
          </div>
          {/* Product Right Part */}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
