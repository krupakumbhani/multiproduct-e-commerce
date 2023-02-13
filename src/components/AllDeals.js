import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

function AllDeals() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState([]);
  const [activeButton, setActiveButton] = useState(null);
  async function fetchData() {
    try {
      const res = await axios.get("http://127.0.0.1:3200/users");
      console.log(res);
      setData(res.data);
      setFilter(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  function handleFilter(val) {
    setActiveButton(val);
    if (val === "ALL") {
      setFilter(data);
    } else {
      const fltr = data.filter((i) => i.gender === val);
      console.log(fltr);
      setFilter(fltr);
    }
  }
  return (
    <>
      <div className="container">
        
        <div className="section_heading">
          <h2 className="text-start">Todays Best Deals For You!</h2>
        </div>
         
          <ul className="nav nav-pills my-3">
            <li className="nav-tem">
              <button
                type="button"
                className={`"btn btn-outline-dark rounded-pill me-3 btn_transperent btn_padding ${activeButton === "ALL" ? "active_btn" : ""}"`}
                onClick={() => handleFilter("ALL")}
              >
                ALL
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`"btn btn-outline-dark rounded-pill me-3 btn_transperent  btn_padding ${activeButton === "Female" ? "active_btn" : ""}"`}
                onClick={() => handleFilter("Female")}
              >
                Beauty
              </button>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className={`"btn btn-outline-dark rounded-pill me-3 btn_transperent btn_padding ${activeButton === "Male" ? "active_btn" : ""}"`}
                onClick={() => handleFilter("Male")}
              >
                Travel
              </button>
            </li>
          </ul>
          <div className="row gy-3 ">
            {filter.map((i) => (
              <div className="col-xxl-3 col-xl-4 col-md-6 col-12 ">
                <div className="card TodaysBestDeals_card m-auto" >
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
                  <h5 class="card-title me-auto">{i.first_name}</h5>
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
              </div>
            ))}
          </div>
        </div>
      
    </>
  );
}

export default AllDeals;
