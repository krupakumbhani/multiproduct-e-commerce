import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Scrollbar } from "swiper";
import "swiper/css";


export default function TodaysBestDeals() {
  return (
    <>
      <div className="container">
        <div className="section_heading">
          <h2 className="text-start">Todays Best Deals For You!</h2>
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
            960: { slidesPerView: 2 },
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
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent ">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide><SwiperSlide className="ml-3">
            <div className="card TodaysBestDeals_card" >
              <img
                src="/assets/img/sec3_homepod.jpg"
                className="TodaysBestDeals_bg_img"
                alt="..."
              />
              <img
                src="/assets/img/heart.png"
                alt=""
                className="TodaysBestDeals_heart_on_img"
              />
              <div class="card-body bg_grey">
                <div className="d-flex">
                  <h5 class="card-title me-auto">HomePod mini</h5>
                  <h5 class="card-title fw-bold fst-italic">$99.00</h5>
                </div>

                <p class="card-text mb_02rem">5 Colors Available</p>
                <div>
                  <img src="/assets/img/RatingGreen.png" alt="" className="rating" />
                  <span> (121)</span>
                </div>
                <a href="/" class="btn btn-outline-dark rounded-pill mt-2 btn_transperent">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
      </div>
    </>
  );
}
