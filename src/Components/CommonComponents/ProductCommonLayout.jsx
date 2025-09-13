import React, { useRef } from "react";
import Timer from "./Timer";
import Heading from "./Heading";
import Slider from "react-slick";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import ProductCardSkeleton from "../../helpers/ProductCardSkeleton";
const ProductCommonLayout = ({
  ProductCard = () => <ProductCardSkeleton />,
  isArrowsTrue,
  heading = "head missing",
  description = "description missing",
  timeShow = false,
  setTime = "0",
  pertialItemShow = 4,
  componentData = [],
  isLoading,
  viewBtn = false,
}) => {
  const slideRef = useRef(null);

  const next = () => {
    console.log(slideRef.current.slickNext());
  };
  const prev = () => {
    console.log(slideRef.current.slickPrev());
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: pertialItemShow || 4,
    slidesToScroll: 2,
  };
  return (
    <div>
      {" "}
      {/* Heading part */}
      <div className="flex items-end justify-between">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={heading} description={description} />
          {timeShow && <Timer setTime={setTime} />}
        </div>

        {isArrowsTrue && (
          <div className="flex items-center gap-x-3">
            <h2
              className="w-[46px] h-[46px] bg-Secondary rounded-full flex justify-center items-center cursor-pointer"
              onClick={prev}
            >
              <span className="text-[24px]">
                <IoMdArrowBack />
              </span>
            </h2>
            <h2
              className="w-[46px] h-[46px] bg-Secondary rounded-full flex justify-center items-center cursor-pointer"
              onClick={next}
            >
              <span className="text-[24px]">
                <IoMdArrowForward />
              </span>
            </h2>
          </div>
        )}
        {viewBtn && (
          <div className="bg-button2 text-md font-poppins font-medium text-primary py-[16px] px-[48px] rounded cursor-pointer">
            View All
          </div>
        )}
      </div>
      {/* Product Item */}
      <Slider ref={slideRef} {...settings}>
        {/* {componentData?.map((item, index) =>
          // <ProductCard itemData={item ? item : []} />
          item ? (
            <ProductCard key={index} itemData={item} />
          ) : (
            <ProductCardSkeleton key={index} />
          )
        )} */}
        {(isLoading ? [...new Array(6)] : componentData)?.map((item, index) =>
          item ? (
            <ProductCard key={index} itemData={item} />
          ) : (
            <ProductCardSkeleton key={index} />
          )
        )}
      </Slider>
    </div>
  );
};

export default ProductCommonLayout;
