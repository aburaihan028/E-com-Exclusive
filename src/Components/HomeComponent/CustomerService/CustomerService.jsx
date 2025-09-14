import React from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const CustomerService = () => {
  const service = [
    {
      id: 1,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over $140",
      icon: <TbTruckDelivery />,
    },
    {
      id: 2,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
      icon: <TfiHeadphoneAlt />,
    },
    {
      id: 3,
      title: "MONEY BACK GUARANTEE",
      description: "We reurn money within 30 days",
      icon: <HiOutlineShieldCheck />,
    },
  ];
  return (
    <div className="mb-[150px]">
      <div className="container m-auto">
        <div className="flex justify-around">
          {service?.map((item) => (
            <div key={item?.id} className="flex flex-col items-center gap-y-2">
              <div className="w-[80px] h-[80px] bg-primary1 rounded-full flex justify-center items-center mb-4">
                <span className="text-text text-[40px] rounded-full p-3 bg-black ">
                  {item?.icon}
                </span>
              </div>
              <h2 className="font-poppins font-semibold text-[20px] leading-[28px]">
                {item?.title}
              </h2>
              <h4>{item?.description}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
