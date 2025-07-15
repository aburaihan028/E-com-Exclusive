const Heading = ({ title, description }) => {
  return (
    <div className="mb-0">
      <div className="flex items-center gap-x-4 mb-[24px]">
        <span className="w-[20px] h-[40px] bg-Secondary2 inline-block rounded"></span>
        <span className="text-Secondary2 font-poppins font-semibold text-md">
          {title ? title : "heading title missing"}
        </span>
      </div>
      <div>
        <h1 className="font-inter font-semibold text-[36px]">
          {description ? description : "description missing"}
        </h1>
      </div>
    </div>
  );
};

export default Heading;
