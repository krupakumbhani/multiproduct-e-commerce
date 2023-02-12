import React from "react";

function NavScroll() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_padding">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img className="logo_img" src="/assets/img/logo.png" alt="" />
          <span className="fw_600 text_green p-1">Shopcart</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item  me-2 dropdown">
              <a
                className="nav-link text_dark dropdown-toggle"
                href="/"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/">
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item me-2">
              <a className="nav-link text_dark" href="/">
                Deals
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text_dark" href="/">
                What's New
              </a>
            </li>
            <li className="nav-item me-2">
              <a className="nav-link text_dark" href="/">Delivery</a>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search Products" aria-label="Search Products" aria-describedby="basic-addon2" />
              <span className="input-group-text" id="basic-addon2"><img className="w_20" src="/assets/img/loupe.png" alt="" /></span>
            </div>

            <div className="ms-5 d-flex" role="button">
              <img src="/assets/img/user.png" className="nav_icon" alt="" />
              <span>Account</span>
            </div>
            <div className="ms-5 d-flex" role="button">
              <img src="/assets/img/cart.png" className="nav_icon" alt="" />
              <span>Cart</span>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </nav>
  );
}

export default NavScroll;
