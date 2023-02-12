import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavScroll from "./components/NavScroll";
import Hero from "./components/Hero";
import TopCategories from "./components/TopCategories";
import TodaysBestDeals from "./components/TodaysBestDeals";
import SellProducts from "./components/SellProducts";
import WeeklyPopular from "./components/WeeklyPopular";
import CashbackAd from "./components/CashbackAd";
import AllDeals from "./components/AllDeals";
import ChooseBrand from "./components/ChooseBrand";
import Sec9_cards from "./components/Sec9_cards";
import MostSelling from "./components/MostSelling";
import TrendingProducts from "./components/TrendingProducts";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";
import Services from "./components/Services";

function App() {
  return (
    <>
      <NavScroll />
      <Hero />
      <TopCategories />
      <TodaysBestDeals />
      <ChooseBrand />
      <SellProducts />
      <WeeklyPopular />
      <CashbackAd />
      <AllDeals />
      <Sec9_cards />
      <MostSelling />
      <TrendingProducts />
      <BestSelling />
      <Services />
      <Footer />
    </>
  );
}

export default App;
