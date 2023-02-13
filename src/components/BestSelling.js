import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation } from "swiper";
function BestSelling() {
  return (
    <div>
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Best Selling Products</h2>
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
            768: { slidesPerView: 3 },
            960: { slidesPerView: 2 },
            1200: { slidesPerView: 3 },
            1920: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card ">
              <img src="/assets/img/bestsell_card.png"  alt="..." />
              <img src="/assets/img/sec4_logo1.png" className="img_overlap" alt="..." />
              <div class="card-body bg_grey">
                <h5 class="card-title me-auto">Staples</h5>
                <p class="card-text mb_02rem">Buy • Furniture</p>
                <p class="card-text mb_02rem text_red">Delivery within 24 hours</p>
              </div>
            </div>
          </SwiperSlide>
         
        </Swiper>
        </div>
      </div>
    </div>
  );
}

export default BestSelling;
