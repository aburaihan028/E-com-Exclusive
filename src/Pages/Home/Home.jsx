import Navbar from "../../Components/HomeComponent/Navbar/Navbar";
import Banner from "../../Components/HomeComponent/Banner/Banner";
import Header from "../../Components/HomeComponent/Navbar/Header";
import Category from "../../Components/HomeComponent/Category/Category";
import FlashSales from "../../Components/HomeComponent/FlashSales/FlashSales";
import BestSelling from "../../Components/HomeComponent/BestSelling/BestSelling";
import Experience from "../../Components/HomeComponent/Experience/Experience";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSales />
      <Category />
      <BestSelling />
      <Experience />
    </div>
  );
};

export default Home;
