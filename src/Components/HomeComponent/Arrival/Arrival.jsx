import React from "react";
import Heading from "../../CommonComponents/Heading";
import Frame963 from "../../../assets/Arrival/Frame963.png";
import Frame962 from "../../../assets/Arrival/Frame962.png";
import Frame660 from "../../../assets/Arrival/Frame660.png";
import Frame961 from "../../../assets/Arrival/Frame961.png";

const Arrival = () => {
  return (
    <div className="mb-[200px] mt-[160px]">
      <div className="container m-auto">
        <Heading title={"Featured"} description={"New Arrival"} />

        <div className="h-[700px] flex gap-x-[30px] mt-[60px]">
          {/* left part */}
          <div className="w-1/2 bg-black flex justify-center items-end relative">
            <picture>
              <img
                src={Frame963}
                alt={Frame963}
                className="w-full h-full object-cover"
              />
            </picture>

            <div className="text-primary absolute bottom-[32px] left-[32px] ">
              <div className="relative flex flex-col items-start gap-y-4">
                <h3 className="font-inter font-semibold text-[24px] leading-[24px]">
                  PlayStation 5
                </h3>
                <p className="font-poppins text-[14px] leading-[21px]">
                  Black and White version of the PS5 <br /> coming out on sale.
                </p>
                <a
                  href=""
                  className="Arrival relative font-poppins font-medium text-[16px] leading-[24px]"
                >
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          {/* right part */}
          <div className="w-1/2 flex flex-col gap-y-6">
            {/* right part top img */}
            <div className="h-1/2  relative">
              <picture className="">
                <img
                  src={Frame962}
                  alt={Frame962}
                  className="w-full h-full object-cover block"
                />
              </picture>
              <div className="text-primary absolute bottom-[32px] left-[32px] ">
                <div className="relative flex flex-col items-start gap-y-4">
                  <h3 className="font-inter font-semibold text-[24px] leading-[24px]">
                    Women’s Collections
                  </h3>
                  <p className="font-poppins text-[14px] leading-[21px]">
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <a
                    href=""
                    className="Arrival relative font-poppins font-medium text-[16px] leading-[24px]"
                  >
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            {/* right part bottom img */}
            <div className="h-1/2  flex gap-x-6">
              <div className="w-1/2 bg-black flex justify-center items-center relative">
                <picture>
                  <img src={Frame660} alt={Frame660} />
                </picture>
                <div className="text-primary absolute bottom-[32px] left-[32px] ">
                  <div className="relative flex flex-col items-start gap-y-4">
                    <h3 className="font-inter font-semibold text-[24px] leading-[24px]">
                      Speakers
                    </h3>
                    <p className="font-poppins text-[14px] leading-[21px]">
                      Amazon wireless speakers
                    </p>
                    <a
                      href=""
                      className="Arrival relative font-poppins font-medium text-[16px] leading-[24px]"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="w-1/2 bg-black flex justify-center items-center relative">
                {" "}
                <picture>
                  <img src={Frame961} alt={Frame961} />
                </picture>{" "}
                <div className="text-primary absolute bottom-[32px] left-[32px] ">
                  <div className="relative flex flex-col items-start gap-y-4">
                    <h3 className="font-inter font-semibold text-[24px] leading-[24px]">
                      Perfume
                    </h3>
                    <p className="font-poppins text-[14px] leading-[21px]">
                      GUCCI INTENSE OUD EDP
                    </p>
                    <a
                      href=""
                      className="Arrival relative font-poppins font-medium text-[16px] leading-[24px]"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
