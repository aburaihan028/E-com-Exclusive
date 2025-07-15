import { CaregoryItems } from "../../../../Data/category";
import { FaChevronRight } from "react-icons/fa";
import BannerImg from "../../../assets/BannerImg/Frame 561.jpg";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { useState } from "react";
const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul style={{ margin: "0px", display: "flex", textAlign: "center" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "12px",
            height: "12px",
            border: "2px solid #fff",
            borderRadius: "50%",
            background: "#DB4444",
            marginRight: "12px",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "12px",
            height: "12px",
            // border: "5px blue solid",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.5)",
            marginRight: "12px",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setCurrentSlide(currentSlide);
      console.log("after change", currentSlide);
    },
  };
  return (
    <div>
      <div className="container m-auto">
        <div className="flex justify-center">
          <div className="ragular w-[20%] border-e-[1.5px] border-r-[#ddd]">
            <ul className="pt-10">
              {CaregoryItems?.map((item) => (
                <li
                  className="relative font-poppins text-md text-black font-normal py-3.5 hover:ps-3 hover:bg-gray-200 transition-all"
                  key={item?.id}
                >
                  {item?.category}
                  {item?.subCategory && (
                    <span className="absolute top-1/2 -translate-y-1/2 right-10">
                      <FaChevronRight />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[80%]">
            <div className="slider-container ps-[55px] pt-[45px]">
              <Slider {...settings}>
                {[...new Array(10)].map((_, index) => (
                  <div key={index}>
                    <picture>
                      <img
                        src={BannerImg}
                        alt={BannerImg}
                        className=" w-full h-full object-cover"
                      />
                    </picture>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
