import Heading from "../../CommonComponents/Heading";
import Product from "../../CommonComponents/Product";
import Timer from "../../CommonComponents/Timer";
const FlashSales = () => {
  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container m-auto">
        {/* Heading part */}
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today's"} description={"Flash Sales"} />
          <Timer />
        </div>
        {/* Product Item */}
        <Product />
      </div>
    </div>
  );
};

export default FlashSales;
