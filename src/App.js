import React from "react";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import NavScroll from "./components/NavScroll";
import TopCategories from "./components/TopCategories";
import SellProducts from "./components/SellProducts";
import CashbackAd from "./components/CashbackAd";
import AllDeals from "./components/AllDeals";
import ChooseBrand from "./components/ChooseBrand";
import Sec9_cards from "./components/Sec9_cards";
import TrendingProducts from "./components/TrendingProducts";
import BestSelling from "./components/BestSelling";
import Footer from "./components/Footer";
import Services from "./components/Services";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Scrollbar } from "swiper";
import "swiper/css";
import UimgDbody from "./components/UimgDbody";
import ab from "./ab.json";

function App() {
  return (
    <>
      <NavScroll />
      <div className="hero_wrapper">
        <div className="hero_text fadeInUp">
          <h1 className="mb-3 fw-bold text_green">
            Shopping and <br></br> Department Store
          </h1>
          <p className="mb-3 text_green">
            Shopping is a bit of a relaxing hobby for me, <br></br>which is
            sometimes troubling for the bank balance.
          </p>
          <a href="/" class="btn btn-outline-dark rounded-pill btn_green mb-3">
            Learn More
          </a>
        </div>
      </div>
      <TopCategories />
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Todays Best Deals For You!</h2>
        </div>
        <div className="slider_wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            pagination={{ clickable: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1920: { slidesPerView: 4 },
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"
          >
            {ab.products.map((i) => (
              <SwiperSlide className="ml-3">
                <UimgDbody
                  title={i.title}
                  description={i.description}
                  price={i.price}
                  img={i.img}
                  altr={i.altr}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <ChooseBrand />
      <SellProducts />
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Weekly Popular Products</h2>
        </div>
        <div className="slider_wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            pagination={{ clickable: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1920: { slidesPerView: 4 },
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"
          >
            {ab.products.map((i) => (
              <SwiperSlide className="ml-3">
                <UimgDbody
                  title={i.title}
                  description={i.description}
                  price={i.price}
                  img={i.img}
                  altr={i.altr}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <CashbackAd />
      <AllDeals />
      <Sec9_cards />
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Most Selling Products</h2>
        </div>
        <div className="slider_wrapper">
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            freeMode={true}
            navigation={true}
            pagination={{ clickable: false }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
              1920: { slidesPerView: 4 },
            }}
            modules={[FreeMode, Autoplay, Navigation]}
            className="mySwiper"
          >
            {ab.products.map((i) => (
              <SwiperSlide className="ml-3">
                <UimgDbody
                  title={i.title}
                  description={i.description}
                  price={i.price}
                  img={i.img}
                  altr={i.altr}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <TrendingProducts />
      <BestSelling />
      <Services />
      <Footer />
    </>
  );
}

export default App;
