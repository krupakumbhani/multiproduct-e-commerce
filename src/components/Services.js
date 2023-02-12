import React from 'react'


function Services() {
  return (
    <>
      <div className='container '>
      <div className="section_heading ">
          <h2 className="text-start">Services To Help You Shop</h2>
        </div>
        <div className="row gy-3">
          <div className="col-lg-4">
          <div className="card " >
              <div className="card-body service_card bg_grey ">
                <h5 className="card-title fw-bold fst-italic">Frequently Asked <br /> Questions</h5>
                <p className="card-text mb-0">Updates on safe shopping in our stores</p>
              </div>
                <img
                  src="/assets/img/services_card.webp"
                  alt="..."
                  className=""
                />
              </div>
          </div>
          <div className="col-lg-4">
          <div className="card " >
              <div className="card-body service_card bg_grey ">
                <h5 className="card-title fw-bold fst-italic">Online Payment <br />  Process</h5>
                <p className="card-text mb-0">Updates on safe shopping in our stores</p>
              </div>
                <img
                  src="/assets/img/services_card.webp"
                  alt="..."
                  className=""
                />
              </div>
          </div>
          <div className="col-lg-4">
          <div className="card " >
              <div className="card-body service_card bg_grey ">
                <h5 className="card-title fw-bold fst-italic">Home Delivery  <br /> Options</h5>
                <p className="card-text mb-0">Updates on safe shopping in our stores</p>
              </div>
                <img
                  src="/assets/img/services_card.webp"
                  alt="..."
                  className=""
                />
              </div>
          </div>
        </div>
       
       
        </div>
    </>
  )
}

export default Services
