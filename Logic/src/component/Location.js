import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Location() {
  const [showNavbar, setShowNavbar] = React.useState(false);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-32.png"
              width={"35%"}
              id="pole"
              className="back"
            />
          </div>
          <div className="col-sm-12 col-md-8 col-lg-8">
            <nav class="navbar navbar-expand-lg ">
              <div class="container-fluid">
                <button
                  className="navbar-toggle"
                  onClick={() => setShowNavbar(!showNavbar)}
                >
                  {showNavbar ? (
                    <i class="fa-solid fa-xmark"></i>
                  ) : (
                    <i class="fa-solid fa-bars"></i>
                  )}
                </button>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div
                    className={`navbar-collapse ${showNavbar ? "show" : ""}`}
                  >
                    <div class="dropdown" id="mob">
                      <div className="know">
                        <Link to="./Logic">
                          {" "}
                          <button
                            className="btn btn dropdown-toggle nav-link"
                            type="button"
                            id="stay"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            
                          >
                            Solutions
                          </button>
                        </Link>
                      </div>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Workforce Augmentation
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            IT Services
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Enterprise Solutions{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            AI Augmentation
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown">
                      <Link to="./Industry">
                        {" "}
                        <button
                          class="btn btn dropdown-toggle nav-link"
                          
                          type="button"
                          id="stay"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Industries
                        </button>
                      </Link>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Information Technology
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Telecommunication
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Automotive{" "}
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            {" "}
                            Oil & Energy
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Pharmaceuticals
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Banking & Finance
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div class="dropdown">
                      <button
                        class="btn btn dropdown-toggle"
                        type="button"
                        id="stay"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Staffing
                      </button>
                      <ul
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <a class="dropdown-item" href="#">
                            Candidates
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="#">
                            Clients
                          </a>
                        </li>
                      </ul>
                    </div>
                    <ul className="lol">
                      <li class="nav-item ">
                        <Link to="/" class="nav-link" id="stay">
                          Locations
                        </Link>
                      </li>
                    </ul>

                    <button className="btn btn" id="but">
                      Get&nbsp;In&nbsp;Touch
                    </button>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      <h1 className="hire" id="local">
        Locations
      </h1>
      <ul className="rate">
        <li>
          <h4 className="text-center">Usa</h4>
        </li>
        <li>
          <h4 className="text-center">India</h4>
        </li>
      </ul>
      <div className="container">
        <h1 className="price" id="usa">
          Usa
        </h1>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=1iTCxx6t8ervpU6wlr8FJuRAV1LkRHpA&ehbc=2E312F"
          width="100%"
          height="600px"
          id="hope"
        ></iframe>
        <h4 className="price" id="usa">
          India
        </h4>
        <iframe
          src="https://www.google.com/maps/d/embed?mid=19n09rya5HeXpyQvkfifj9DgFvwyGSVQ&ehbc=2E312F"
          width="100%"
          height="600px"
          id="hope"
        ></iframe>
      </div>

      <div className="foot container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-18.png"
              id="mac"
            ></img>
            <h2 className="some">
              Connect:
              <i class="fa-brands fa-linkedin me-2" id="sugar"></i>
              <i class="fa-brands fa-facebook me-2" id="sugar"></i>
              <i class="fa-brands fa-instagram me-2" id="sugar"></i>
              <i class="fa-brands fa-product-hunt me-2" id="sugar"></i>
            </h2>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h2 className="off">Global Offices / Locations</h2>

            <strong>
              <h6 className="new" id="plus">
                <i class="fa-solid fa-location-dot" id="nike"></i>
                New Jersey Office{" "}
              </h6>
            </strong>
            <p className="mail" id="plus">
              4525 Route 27, Princeton, NJ 08540 Phone: 732-512-0009 Mail:
              info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Michigan Office
            </h6>
            <p className="mail" id="plus">
              250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United
              States of America Phone: 616-717-5787 Mail: info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Hyderabad, India Office{" "}
            </h6>
            <p className="mail" id="plus">
              4th Floor, Unit # D 1, D No : 1-89/A/8/C/2, Vittal Rao Nagar,
              Madhapur, Hyderabad-500081 Telangana State. Phone: 040-49901212
              Mail: info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Gurugram, India Office{" "}
            </h6>
            <p className="mail" id="plus">
              {" "}
              Unit 002 Ground Floor, Tower C, Unitech Cyber Park, Sector 39,
              Gurugram, Haryana -122003 Phone: 0124-6831814 Mail:
              info@logicplanet.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Location;
