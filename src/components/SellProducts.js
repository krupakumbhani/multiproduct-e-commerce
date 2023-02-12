import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation} from "swiper";
import "swiper/css";
export default function SellProducts() {
  return (
    <>
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Get Upto 70% Off</h2>
        </div>

        <div className="slider_wrapper" >
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
            960: { slidesPerView: 2},
            1200: { slidesPerView: 3 },
            1920: { slidesPerView: 4 },
          }}
          // scrollbar={{
          //   hide: true,
          // }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="ml-3">
          <div className="card TodaysBestDeals_card" >
              <div className="card-body sellproduct_body" id="sellbody_1">
                <h5 className="card-title me-auto">Save</h5>
                <h5 className="card-title sellproduct_price fst-italic" id="sellprice_1">$100</h5>
                <p className="card-text mb-0">Explore our furniture & home furnishing range</p>
              </div>
              <img
                src="/assets/img/sec5_furniture.jpg"
                alt="..."
                className="sellproduct_img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
          <div className="card TodaysBestDeals_card" >
              <div className="card-body sellproduct_body" id="sellbody_2">
                <h5 className="card-title me-auto">Save</h5>
                <h5 className="card-title sellproduct_price fst-italic" id="sellprice_2">$29</h5>
                <p className="card-text mb-0">Explore our furniture & home furnishing range</p>
              </div>
              <img
                src="/assets/img/sec5_books.jpg"
                alt="..."
                className="sellproduct_img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
          <div className="card TodaysBestDeals_card" >
              <div className="card-body sellproduct_body" id="sellbody_3">
                <h5 className="card-title me-auto">Save</h5>
                <h5 className="card-title sellproduct_price fst-italic" id="sellprice_3">$67</h5>
                <p className="card-text mb-0">Explore our furniture & home furnishing range</p>
              </div>
              <img
                src="/assets/img/sec5_cloths.jpg"
                alt="..."
                className="sellproduct_img"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
          <div className="card TodaysBestDeals_card" >
              <div className="card-body sellproduct_body" id="sellbody_4">
                <h5 className="card-title me-auto">Save</h5>
                <h5 className="card-title sellproduct_price fst-italic" id="sellprice_4">$59</h5>
                <p className="card-text mb-0">Explore our furniture & home furnishing range</p>
              </div>
              <img
                src="/assets/img/sec5_education.jpg"
                alt="..."
                className="sellproduct_img"
              />
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
       


      </div>
    </>
  );
}
