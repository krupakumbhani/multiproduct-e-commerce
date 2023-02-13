import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


export default function TopCategories() {
  return (
    <>
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Shop Our Top Categories</h2>
        </div>
        <div className="slider_wrapper">


          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            freeMode={true}
            pagination={{ clickable: true }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              960: { slidesPerView: 3 },
              1200: { slidesPerView: 5 },
              1920: { slidesPerView: 6 },
            }}
            className="mySwiper"
          >
            <SwiperSlide className="ml-3" >
              <div className="card" >
                <h4 className="top_categories_text_on_img">Furniture</h4>

                <img
                  src="/assets/img/sec2_furniture.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Handbag</h4>
                <img
                  src="/assets/img/sec2_handbag.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-5">
              <div className="card" >
                <h4 className="top_categories_text_on_img">Travel</h4>
                <img
                  src="/assets/img/sec2_travel.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Tech</h4>
                <img
                  src="/assets/img/sec2_tech.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Beauty</h4>
                <img
                  src="/assets/img/sec2_beauty.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
           

            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Art</h4>
                <img
                  src="/assets/img/sec2_art.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Education</h4>
                <img
                  src="/assets/img/sec2_education.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">fashion</h4>
                <img
                  src="/assets/img/sec2_fashion.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide className="ml-3" >
              <div className="card" >
                <h4 className="top_categories_text_on_img">Furniture</h4>

                <img
                  src="/assets/img/sec2_furniture.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card" >
                <h4 className="top_categories_text_on_img">Hats</h4>
                <img
                  src="/assets/img/sec2_hats.png"
                  className="top_categories_bg_img"
                  alt="..."
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
}
