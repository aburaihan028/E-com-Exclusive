import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-Secondary2 py-[16px] px-[48px] rounded text-text font-poppins font-medium text-[16px] cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default Button;
