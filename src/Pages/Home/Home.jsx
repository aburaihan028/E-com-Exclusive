import Navbar from "../../Components/HomeComponent/Navbar/Navbar";
import Banner from "../../Components/HomeComponent/Banner/Banner";
import Header from "../../Components/HomeComponent/Navbar/Header";
import Category from "../../Components/HomeComponent/Category/Category";
import FlashSales from "../../Components/HomeComponent/FlashSales/FlashSales";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSales />
      <Category />
    </div>
  );
};

export default Home;
