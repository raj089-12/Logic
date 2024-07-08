import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Industry() {
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
                            className="btn btn dropdown-toggle"
                          
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
                      <Link to="/">
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
                        <Link to="./Location" class="nav-link" id="stay">
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
      <div className="container-fluid">
        <h2
          className="hire"
          style={{
            marginTop: "10%",
            backgroundColor: "#E8E3FF",
            paddingBottom: "5%",
            paddingTop: "5%",
            paddingLeft: "5%",
          }}
        >
          Industries
        </h2>
      </div>
      <p style={{ fontStyle: "italic", marginTop: "5%" }}>
        Logic Planet’s 22-Year Legacy
      </p>
      <h2 className="hire"> Bridging Talent and Industry</h2>
      <h2 className="text-center hire" id="centro" style={{ marginTop: "5%" }}>
        Information Technology
      </h2>

      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="and" id="card" style={{ marginTop: "10%" }}>
              Revolutionizing Information Technology Hiring With A Trailblazing
              Approach
            </h2>
            <p className="did" id="wax">
              In the fast-paced world of Information Technology, Logic Planet
              stands out as a trailblazer, redefining the parameters of
              contingent hiring. We understand that the IT landscape thrives on
              the ability of its professionals to adapt quickly to ever-evolving
              industry trends. At Logic Planet, we prioritize communication
              skills, cultural alignment, and the capacity to navigate the
              ever-changing tech terrain as the guiding principles in our IT
              recruitment strategy.
            </p>
            <p className="did" id="wax">
              Our specialized team, composed of experts deeply immersed in the
              intricacies of the tech sector, ensures that each hire is not
              merely a skill match but a strategic fit for the industry’s
              forward trajectory. We’re not just hiring IT professionals; we’re
              forging connections that drive innovation and propel businesses
              towards a future of technological excellence.
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div
            className="col-sm-12 col-md-6 col-lg-6"
            style={{ display: "block" }}
          >
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Rectangle-785.png"
              width={"100%"}
              height={"500px"}
            />
          </div>
        </div>
      </div>
      <h2 className="text-center" id="take">
        Telecomunications
      </h2>
      <p className="text-center">
        In the expansive world of Telecommunications, Logic Planet has honed its
        artistry in navigating the intricate web of connectivity.
      </p>
      <div className="text-center">
        <button className="btn btn-warning" id="not">
          Know More
        </button>
      </div>
      <img
        src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Group-9009-1536x734.png"
        width={"100%"}
      />
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Group-9010.png"
              width={"100%"}
              height={"500px"}
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Banking & Finance
            </h2>
            <p className="did" id="wax">
              Logic Planet’s legacy in the Banking and Finance sector is
              characterized by a strategic and nuanced approach to talent
              acquisition. In an industry where precision and expertise are
              paramount, the company adheres to the core principle that
              qualifications serve as the first parameter for scrutiny.
            </p>
            <p className="did" id="wax">
              The financial landscape demands professionals who not only possess
              the necessary qualifications but also exhibit a profound
              understanding of the dynamic and ever-evolving financial markets.
              Logic Planet’s recruitment team, comprised of industry experts,
              navigates this delicate balance, ensuring that each placement is
              not just a match on paper but a harmonious integration into the
              intricate world of banking and finance.
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "cadetblue",
          color: "white",
          paddingTop: "5%",
          paddingBottom: "5%",
          fontWeight: "lighter",
          fontSize: "20px",
          marginTop: "10%",
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5">
            <h2
              id="core"
              style={{
                color: "#FFFFFF",
                fontFamily: "Bebas Neue Pro, Sans-serif",
                fontSize: "55px",
                fontWeight: "500",
              }}
            >
              Pharmaceuticals
            </h2>
            <p id="wax">
              In the high-stakes arena of Pharmaceuticals, Logic Planet
              demonstrates its expertise in pinpointing and securing top-tier
              talent. Our hiring strategy in this sector is built upon core
              principles of technical excellence, deep understanding of
              regulatory compliance, a global perspective, and an unwavering
              commitment to quality. These principles serve as the foundation
              for our precision-driven approach to talent acquisition in the
              pharmaceutical industry.
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div className="col-4 col-md-4 col-xl-2">
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-23.png"
              width={"100%"}
              height={"200px"}
              id="photo"
            />
          </div>
          <div className="col-4 col-md-4 col-xl-2">
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-24.png"
              width={"100%"}
              height={"200px"}
              id="photo"
            />
          </div>
          <div className="col-4 col-md-4 col-xl-2">
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/Ellipse-25.png"
              width={"100%"}
              height={"200px"}
              id="photo"
            />
          </div>
        </div>
      </div>

      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Automotive
            </h2>
            <p className="did" id="wax">
              In the dynamic and ever-evolving world of the Automotive industry,
              Logic Planet has carved out a legacy marked by its unwavering
              dedication to talent excellence. Acknowledging that the automotive
              sector thrives on technical expertise, our core principles in this
              domain are custom-tailored to meet the distinctive demands of
              innovation and precision.
            </p>
            <p className="did" id="wax">
              Logic Planet’s specialized recruitment team, deeply immersed in
              the intricacies of the automotive field, takes great care to
              ensure that each candidate not only aligns with the industry’s
              core principles but also actively contributes to the cutting-edge
              innovation that defines the automotive landscape. We’re not just
              recruiting for the automotive industry; we’re fueling its progress
              and driving it towards a future of technological advancement.
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div className="col-sm-12 col-md-6  col-lg-6">
            <img
              src="https://wgp2db.p3cdn1.secureserver.net/wp-content/uploads/2023/12/image-37.png"
              width={"110%"}
              height={"400px"}
              id="oil"
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Oil & Energy
            </h2>
            <p className="did" id="wax">
              In the expansive and critical realm of Oil and Energy, Logic
              Planet stands out as a visionary force, meticulously aligning
              talent with the crucial task of energizing the future. The core
              principles that steer Logic Planet’s talent acquisition strategy
              in this sector revolve around technical proficiency, an in-depth
              understanding of regulatory compliance, a global outlook, and an
              unwavering commitment to quality. These principles serve as the
              guiding pillars of our approach to talent acquisition in the oil
              and energy industry, where precision and expertise are paramount.
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSuMVjcJ0LKtmHDlaCb-gk-66U0N1vXfM_9SmPwTPw7Ge1GSHi"
              width={"121%"}
              height={"495px"}
              id="oil"
            />
          </div>
        </div>
      </div>

      <div className="foot container-fluid mt-5">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-2">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/image-18.png"
              id="mac"
            ></img>

            <h6 className="some">
              Connect:
              <i class="fa-brands fa-linkedin me-2" id="sugar"></i>
              <i class="fa-brands fa-facebook me-2" id="sugar"></i>
              <i class="fa-brands fa-instagram me-2" id="sugar"></i>
              <i class="fa-brands fa-product-hunt me-2" id="sugar"></i>
            </h6>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h5 className="off">Global Offices / Locations</h5>

            <h6 className="new" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              New Jersey Office
            </h6>

            <p className="mail" id="plus">
              4525 Route 27, Princeton, NJ 08540 Phone: 732-512-0009 Mail:
              info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Michigan Office{" "}
            </h6>

            <p
              className="mail"
              id="plus
              
              "
            >
              250 Monroe NW, Suite 400, Grand Rapids, Michigan, 49503, United
              States of America Phone: 616-717-5787 Mail: info@logicplanet.com
            </p>
          </div>
          <div className="col-sm-12 col-md-2 col-lg-2">
            <h6 className="wow" id="plus">
              <i class="fa-solid fa-location-dot" id="nike"></i>
              Hyderabad, India Office
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

export default Industry;
