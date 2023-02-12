import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/scrollbar";
function TrendingProducts() {
  return (
    <>
      <div className='container'>
        <div className="section_heading ">
          <h2 className="text-start">Trending Products For You</h2>
        </div>
        <div className="slider_wrapper">
        <Swiper
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          navigation={true}
          pagination={{ clickable: false }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            991: { slidesPerView: 1 },
            1200: { slidesPerView: 2 },
            1920: { slidesPerView: 2 },
          }}

          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="ml-3">
            <div className="card" >
              <img
                src="/assets/img/sec7_bg.jpg"
                className=""
                alt="..."
              />
              <div class="card-body bg_grey">

                <h5 class="card-title me-auto fw-bold">Furniture Village</h5>
                <p class="card-text mb_02rem">Delivery within 24 hours</p>

                <a href="/" class="btn btn-outline-dark rounded-pill btn_green mt-2">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card" >
              <img
                src="/assets/img/sec7_bg.jpg"
                className=""
                alt="..."
              />
              <div class="card-body bg_grey">

                <h5 class="card-title me-auto fw-bold">Furniture Village</h5>
                <p class="card-text mb_02rem">Delivery within 24 hours</p>

                <a href="/" class="btn btn-outline-dark rounded-pill btn_green mt-2">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card" >
              <img
                src="/assets/img/sec7_bg.jpg"
                className=""
                alt="..."
              />
              <div class="card-body bg_grey">

                <h5 class="card-title me-auto fw-bold">Furniture Village</h5>
                <p class="card-text mb_02rem">Delivery within 24 hours</p>

                <a href="/" class="btn btn-outline-dark rounded-pill btn_green mt-2">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card" >
              <img
                src="/assets/img/sec7_bg.jpg"
                className=""
                alt="..."
              />
              <div class="card-body bg_grey">

                <h5 class="card-title me-auto fw-bold">Furniture Village</h5>
                <p class="card-text mb_02rem">Delivery within 24 hours</p>

                <a href="/" class="btn btn-outline-dark rounded-pill btn_green mt-2">
                  Shop Now
                </a>
              </div>
            </div>
          </SwiperSlide>
          

        </Swiper>
        </div>
       
      </div>
    </>
  )
}

export default TrendingProducts
