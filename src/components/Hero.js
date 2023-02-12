import React from "react";

function Hero() {
  
  return (
    <div>
      <div className="hero_wrapper">
        <div className="hero_text fadeInUp"  >
          <h1 className="mb-3 fw-bold text_green">Shopping and <br></br> Department Store</h1>
          <p className="mb-3 text_green">
            Shopping is a bit of a relaxing hobby for me, <br></br>which is sometimes
            troubling for the bank balance.
          </p>
          <a href="/" class="btn btn-outline-dark rounded-pill btn_green mb-3">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
