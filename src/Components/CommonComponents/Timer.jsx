import React, { useEffect, useState } from "react";

const Timer = ({ setTime }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date set ====
  // const targetDate = new Date("2025-07-20T00:00:00");
  const targetDate = new Date(setTime);

  // time comedown web worker easy to your website
  useEffect(() => {
    const worker = new Worker(
      new URL("../../CountDownWorker.js", import.meta.url)
    );
    // targetDate send self.onMessage
    worker.postMessage(targetDate);
    worker.onmessage = (e) => {
      // console.log(e.data);
      setTimeLeft(e.data);
    };
    // cleanup function
    return () => {
      worker.terminate();
    };
  }, []);

  // Time comedown
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const now = new Date();
  //     const difference = targetDate - now;
  //     //
  //     if (difference <= 0) {
  //       clearInterval(interval);
  //       setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  //       return;
  //     }

  //     const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  //     const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  //     const minutes = Math.floor((difference / (1000 * 60)) % 60);
  //     const seconds = Math.floor((difference / 1000) % 60);

  //     setTimeLeft({ days, hours, minutes, seconds });
  //   }, 1000);
  //   // Cleanup Function
  //   return () => clearInterval(interval);
  // }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  const format = (n) => String(n).padStart(2, "0");

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
