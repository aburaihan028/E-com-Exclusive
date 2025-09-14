import React from "react";
import ProductLeft from "../../Components/ProductPageComponent/ProductLeft";
import BreadCrumb from "../../Components/CommonComponents/BreadCrumb";

const ProductPage = () => {
  return (
    <div>
      <div className="container m-auto">
        <BreadCrumb />
        <ProductLeft />
      </div>
    </div>
  );
};

export default ProductPage;
