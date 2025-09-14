import Banner from "../../Components/HomeComponent/Banner/Banner";
import Category from "../../Components/HomeComponent/Category/Category";
import FlashSales from "../../Components/HomeComponent/FlashSales/FlashSales";
import BestSelling from "../../Components/HomeComponent/BestSelling/BestSelling";
import Experience from "../../Components/HomeComponent/Experience/Experience";
import ExplorProduct from "../../Components/HomeComponent/ExplorProduct/ExplorProduct";
import Arrival from "../../Components/HomeComponent/Arrival/Arrival";
import CustomerService from "../../Components/HomeComponent/CustomerService/CustomerService";

const Home = () => {
  return (
    <div>
      <Banner />
      <FlashSales />
      <Category />
      <BestSelling />
      <Experience />
      <ExplorProduct />
      <Arrival />
      <CustomerService />
    </div>
  );
};

export default Home;
