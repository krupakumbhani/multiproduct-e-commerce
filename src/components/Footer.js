import React from "react";

function footer() {
  return (
    <>
      <section className="footer_padding footer_bg footer_margin">
        <div className="container">
        <div className="footer_border my-lg-4 my-3"></div>
          <div className="row">
            <div className="col-lg-3 col-md-12 col-12 mb-lg-0 mb-2 pb-lg-0 pb-4 border_add_bottom me-auto">
              <div className="row d-flex flex-column footer_height">
                {/* footer logo */}
                <div className="col-lg-12 col-md-12 col-6 text-start footer_logo p-2">
                  <img className="logo_img" src="/assets/img/logo.png" alt="" />
                  <span className="fw_600 text_green p-1">Shopcart</span>
                </div>
                <div className="col-lg-12 col-6 col-md-6 mt-md-3 mt-0  text-end text-sm-start p-2">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ex placeat impedit odio, quod labore. Ullam laborum quisquam magnam eum laudantium veniam omnis!
                </div>
                {/* community desktop section start */}
                <div className="col-lg-12 col-md-6  mt-auto p-2">
                  <p className="mb-2  text-start fw-bold">
                    Accepted Payments
                  </p>
                  <div className="row gy-2">
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                    <div className="col-3">
                      <img
                        src="/assets/img/gpay.png"
                        alt="social_media"
                        className="payment_img"
                      />
                      </div>
                     
                    
                     
                            
                  </div>
                </div>
              
              </div>
            </div>
            <div className="col-lg-2 col-sm-3 col-6 mt-3 mt-lg-0 offset-lg-1">
              <p className="fw-bold mb-2">
                Department
              </p>
              <ul className="ps-0">
                <li className="pb-2">Fashion</li>
                <li className="pb-2">Education Product</li>
                <li className="pb-2">Frozen Food</li>
                <li className="pb-2">Bavarages</li>
                <li className="pb-2">Organic Grocary</li>
                <li className="pb-2">Office Supplies</li>
                <li className="pb-2">Beauty Products</li>
                <li className="pb-2">Books</li>
                <li className="pb-2">Elecronics & Gadget</li>
                <li className="pb-2">Travel Accasories</li>
                <li className="pb-2">Fitness</li>
                <li className="pb-2">Snickers</li>
                <li className="pb-2">Toys</li>
                <li className="pb-2">Furniture</li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-sm-3 col-6 mt-3 mt-lg-0 d-flex justify-content-between flex-column">
              <div className="mb-3">
                <p className="fw-bold mb-2">
                  About us
                </p>
                <ul className="ps-0">
                  <li className="pb-2">About Shopcart</li>
                  <li className="pb-2">Careers</li>
                  <li className="pb-2">News & Blog</li>
                  <li className="pb-2">Help</li>
                  <li className="pb-2">Press Center</li>
                  <li className="pb-2">Shop by Brands</li>
                  <li className="pb-2">Shopcart Brands</li>
                  <li className="pb-2">Affilate & Partners</li>
                  
                </ul>
              </div>
             
            </div>
            <div className="col-lg-2 col-sm-3 col-6 mt-3 mt-lg-0 ">
              <p className="fw-bold mb-2">
                Services
              </p>
              <ul className="ps-0">
                <li className="pb-2">Gift Card</li>
                <li className="pb-2">Mobile App</li>
                <li className="pb-2">Shipping & Delivery</li>
                <li className="pb-2">Order Pickup</li>
                <li className="pb-2">Account Signup</li>
                
              </ul>
            </div>
            <div className="col-lg-2 col-sm-3 col-6 mt-3 mt-lg-0">
              <p className="fw-bold mb-2">Help</p>
              <ul className="ps-0">
                <li className="pb-2">Shopcart Help</li>
                <li className="pb-2">Returns</li>
                <li className="pb-2">Track Orders</li>
                <li className="pb-2">Contact us</li>
                <li className="pb-2">Feedback</li>
                <li className="pb-2">Security & Fraud</li>
                
              </ul>
            </div>
            {/* community mobile section start */}
            {/* <div className="social col-sm-6 d-block d-md-none">
              <div className="mt-3">
                <p className="text-custom-white mb-3 font-20 text-center">
                  Join the community
                </p>
                <div className="d-flex align-items-center justify-content-center">
                  <a href="https://t.me/BlockchainLandOfficial" target="_blank">
                    <img src="/assets/img/saidbar/s1.svg" alt="social_media" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/blockchain-land/"
                    target="_blank"
                  >
                    <img src="/assets/img/saidbar/s2.svg" alt="social_media" />
                  </a>
                  <a
                    href="https://discord.com/invite/8hZVg9ACNz"
                    target="_blank"
                  >
                    <img src="/assets/img/saidbar/s3.svg" alt="social_media" />
                  </a>
                  <a
                    href="https://www.facebook.com/Blockchain-Land-103061128803396"
                    target="_blank"
                  >
                    <img src="/assets/img/saidbar/s4.svg" alt="social_media" />
                  </a>
                  <a href="https://twitter.com/land_blockchain" target="_blank">
                    <img src="/assets/img/saidbar/s5.svg" alt="social_media" />
                  </a>
                  <a href="https://blockchainland.medium.com/" target="_blank">
                    <img src="/assets/img/saidbar/s6.svg" alt="social_media" />
                  </a>
                  <a
                    href="https://www.instagram.com/theblockchainland/"
                    target="_blank"
                  >
                    <img src="/assets/img/saidbar/s7.svg" alt="social_media" />
                  </a>
                  <a
                    href="https://www.youtube.com/channel/UCyM4Z0ZDNpcB7Cjr14Q0G3A"
                    target="_blank"
                  >
                    <img src="/assets/img/saidbar/s8.svg" alt="social_media" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* community mobile section end */}
          </div>
          <div className="footer_border my-lg-4 my-3"></div>
        </div>
      </section>
    </>
  );
}

export default footer;
