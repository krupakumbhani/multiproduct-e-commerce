import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay, Navigation, Scrollbar } from "swiper";
import "swiper/css";
function UimgDbody(props) {
  return (
    <div>
      
        <div className="card TodaysBestDeals_card">
          <img
            src={props.img}
            className="TodaysBestDeals_bg_img"
            alt={props.altr}
          />
          <img
            src="/assets/img/heart.png"
            alt=""
            className="TodaysBestDeals_heart_on_img"
          />
          <div class="card-body bg_grey">
            <div className="d-flex">
              <h5 class="card-title me-auto">{props.title}</h5>
              <h5 class="card-title fw-bold fst-italic">{props.price}</h5>
            </div>

            <p class="card-text mb_02rem">{props.description}</p>
            <div>
              <img
                src="/assets/img/RatingGreen.png"
                alt=""
                className="rating"
              />
              <span> (121)</span>
            </div>
            <a
              href="/"
              class="btn btn-outline-dark rounded-pill mt-2 btn_transperent "
            >
              Add to cart
            </a>
          </div>
        </div>
     
    </div>
  );
}

export default UimgDbody;
