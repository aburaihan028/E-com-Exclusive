// import React from "react";
// import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

// const Star = ({ rating = 4 }) => {
//   const star = Array.from({ length: 5 }, (_, index) => {
//     if (rating >= index) {
//       return <FaStar key={index} className="text-[#FFAD33]" />;
//     }
//   });
//   return <div>{star}</div>;
// };

// export default Star;

import React from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const Star = ({ rating = 4 }) => {
  // ৫টা স্টার বানানো হচ্ছে
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starValue = index + 1;

    if (rating >= starValue) {
      // পুরো স্টার
      return <FaStar key={index} className="text-[#FFAD33]" />;
    } else if (rating >= starValue - 0.5) {
      // অর্ধেক স্টার
      return <FaStarHalfAlt key={index} className="text-[#FFAD33]" />;
    } else {
      // ফাঁকা স্টার
      return <FaRegStar key={index} className="text-[#FFAD33]" />;
    }
  });

  return <div className="flex items-center gap-[2px]">{stars}</div>;
};

export default Star;
