import Navbar from "../../Components/HomeComponent/Navbar/Navbar";
import Banner from "../../Components/HomeComponent/Banner/Banner";
import Header from "../../Components/HomeComponent/Navbar/Header";
import FlashSales from "../../Components/HomeComponent/FlashSales/FlashSales";

const Home = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSales />
    </div>
  );
};

export default Home;
