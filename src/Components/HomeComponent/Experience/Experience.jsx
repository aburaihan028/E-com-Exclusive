import { useEffect, useState } from "react";
import frame694 from "../../../assets/ProductImg/Frame694.png";
const Experience = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Target date set ====
  // const targetDate = new Date("2025-07-20T00:00:00");
  const targetDate = new Date("2025-09-25T00:00:00");

  // time comedown web worker easy to your website
  useEffect(() => {
    const worker = new Worker(
      new URL("../../../CountDownWorker.js", import.meta.url)
    );
    // targetDate send self.onMessage
    worker.postMessage(targetDate);
    worker.onmessage = (e) => {
      setTimeLeft(e.data);
    };
    // cleanup function
    return () => {
      worker.terminate();
    };
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;
  const format = (n) => String(n).padStart(2, "0");

  return (
    <div className="mt-[140px] mb-[100px]">
      <div className="container m-auto bg-black">
        <div className="flex">
          <div className="w-[45%] py-[69px] ps-[56px] flex flex-col items-start gap-y-[32px]">
            <h6 className="text-button1 text-base font-poppins font-semibold">
              Categories
            </h6>
            <h1 className="font-inter font-semibold text-5xl text-primary leading-[60px] tracking-[4%]">
              Enhance Your <br /> Music Experience
            </h1>
            {/* Offer time */}
            <div className="flex gap-x-6">
              <div className="w-[62px] h-[62px] bg-text p-[24px] rounded-full flex flex-col justify-center items-center">
                <p className="text-[16px] font-semibold font-poppins">
                  {format(days)}
                </p>
                <p className="text-[11px] font-normal font-poppins">Days</p>
              </div>
              <div className="w-[62px] h-[62px] bg-text p-[24px] rounded-full flex flex-col justify-center items-center">
                <p className="text-[16px] font-semibold font-poppins">
                  {format(hours)}
                </p>
                <p className="text-[11px] font-normal font-poppins">Hours</p>
              </div>
              <div className="w-[62px] h-[62px] bg-text p-[24px] rounded-full flex flex-col justify-center items-center">
                <p className="text-[16px] font-semibold font-poppins">
                  {format(minutes)}
                </p>
                <p className="text-[11px] font-normal font-poppins">Minutes</p>
              </div>
              <div className="w-[62px] h-[62px] bg-text p-[24px] rounded-full flex flex-col justify-center items-center">
                <p className="text-[16px] font-semibold font-poppins">
                  {format(seconds)}
                </p>
                <p className="text-[11px] font-normal font-poppins">Seconds</p>
              </div>
            </div>
            <a className="bg-button1 py-[16px] px-[48px] rounded font-poppins font-medium text-[16px] leading-[24px] text-primary">
              Buy Now!
            </a>
          </div>
          {/*  */}
          <div className="w-1/2">
            <div className="">
              {" "}
              <picture className="w-full">
                <img
                  src={frame694}
                  alt={frame694}
                  className="w-full drop-shadow-[0_0_80px_rgba(255,255,255,0.5)] "
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
