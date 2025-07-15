import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(5 * 24 * 60 * 60 * 1000);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => (prev > 0 ? prev - 1000 : 0));
    }, 1000);

    //cleanup function
    return () => clearInterval(interval);
    // setTimeout(() => {
    //   setTime(time - 1000);
    // }, 1000);
  }, []);

  // const days = Math.floor(time / (1000 * 60 * 60 * 24));
  // const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  // const minutes = Math.floor((time / (1000 * 60)) % 60);
  // const seconds = Math.floor((time / 1000) % 60);
  // const format = (n) => String(n).padStart(2, "0");
  const formatDate = (miliSecond) => {
    let total_second = parseInt(Math.floor(miliSecond / 1000));
    let total_minutes = parseInt(Math.floor(total_second / 60));
    let total_Hours = parseInt(Math.floor(total_minutes / 60));
    let day = parseInt(Math.floor(total_Hours / 24));
    let second = parseInt(Math.floor(total_Hours % 60));
    let minutes = parseInt(Math.floor(total_Hours % 60));
    let hours = parseInt(Math.floor(total_Hours % 60));
  };
  return (
    <div>
      <div className="flex gap-x-4">
        {""}
        <div className="flex items-end gap-x-4">
          <div>
            <span className="font-medium font-poppins text-[12px]">Days</span>
            <h1 className="font-bold font-inter text-[32px]">{format(days)}</h1>
          </div>
          <span className="text-[40px] text-Secondary2">:</span>
        </div>
        {""}
        <div className="flex items-end gap-x-4">
          <div>
            <span className="font-medium font-poppins text-[12px]">Hours</span>
            <h1 className="font-bold font-inter text-[32px]">
              {format(hours)}
            </h1>
          </div>
          <span className="text-[40px] text-Secondary2">:</span>
        </div>
        {""}
        <div className="flex items-end gap-x-4">
          <div>
            <span className="font-medium font-poppins text-[12px]">
              Minutes
            </span>
            <h1 className="font-bold font-inter text-[32px]">
              {format(minutes)}
            </h1>
          </div>
          <span className="text-[40px] text-Secondary2">:</span>
        </div>
        {""}
        <div>
          <div>
            <span className="font-medium font-poppins text-[12px]">
              Seconds
            </span>
            <h1 className="font-bold font-inter text-[32px]">
              {format(seconds)}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timer;
