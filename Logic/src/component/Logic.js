import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Logic() {
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
            <nav class="navbar navbar-expand-lg  " id="pain">
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
                    <div class="dropdown">
                      <Link to="">
                        {" "}
                        <button
                          class="btn btn dropdown-toggle "
                          
                          type="button"
                          id="stay"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                          
                        >
                          Solutions
                        </button>
                      </Link>
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
                      <li class="nav-item">
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
      <div className="car">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="log.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="planet.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="pole.png" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="net.png" class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid ">
        {" "}
        <div className="row">
          {" "}
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Hire right for an ever-changing
              <br />
              digital world{" "}
            </h2>{" "}
            <p
              className="
            did"
              id="wax"
            >
              Did you know that a whopping 88% of companies worldwide are
              tapping into the power of AI in their hiring processes, cutting
              down hiring costs by roughly 75%? Imagine a world where your
              hiring needs are met with pinpoint precision – our groundbreaking
              approach isn’t just a response to industry trends; it’s a
              game-changer backed by data.
            </p>
            <p className="did content" id="wax">
              {" "}
              AI isn’t just a tool; it’s your strategic partner, and our digital
              transformation takes you leaps ahead, ensuring a staggering 44%
              boost in candidate screening efficiency. It’s the perfect blend of
              human expertise and AI brilliance, crafting a hiring ecosystem
              that’s not just effective, but genuinely groundbreaking.{" "}
            </p>{" "}
          </div>{" "}
          <div className="col-sm-12 col-md-6 col-lg-6">
            {" "}
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/Group-1.png"
              width={"70%"}
              id="tub"
            />{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <img
        src="https://www.logicplanet.com/wp-content/uploads/2023/12/Group-9013-1.png"
        width={"600px"}
        id="tub"
      />{" "}
      <div className="container-fluid">
        {" "}
        <div className="row">
          {" "}
          <div className="col-sm-12 col-md-6 col-lg-6">
            {" "}
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/6548442-1-1.png"
              width={"90%"}
            />{" "}
          </div>{" "}
          <div className="col-sm-12 col-md-6 col-lg-6">
            {" "}
            <h2 className="hire" id="core">
              Embrace the change with AI{" "}
            </h2>
            <p className="did" id="wax">
              {" "}
              Elevate your hiring game with our cutting-edge AI-powered
              contingent hiring solutions. From simplifying resume screening to
              harnessing predictive analytics, our AI-driven approach guarantees
              swift, impartial recruitment.
            </p>
            <p className="did" id="wax">
              {" "}
              86% of recruiters believe that using ATS Machine Learning speeds
              up the hiring process significantly.
            </p>
            <p className="did" id="wax">
              {" "}
              Experience personalized interactions, automated interviews, and
              data-powered decision-making that catapults your hiring strategy
              into the future. Embrace a seamless fusion of human expertise and
              AI innovation, forging a dynamic and globally competitive
              workforce with Logic Planet.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      {/* <h1 className="text-center">
    Your Vision. Our Solution.
    </h1> */}
      <div
        className="container-fluid text-center need"
        style={{ marginTop: "5%" }}
      >
        <div className="row">
          <strong>
            <h1 className="text-center joy" id="core">
              Your Vision. Our Solution.
            </h1>
          </strong>

          <div className="col-4 col-md-4 col-xl-2">
            <strong>
              <h4 className="force">Workforce Augmentation</h4>
            </strong>
          </div>
          <div className="col-4 col-md-4 col-xl-3">
            <strong>
              <h4 className="force">AI augmentation</h4>
            </strong>
          </div>
          <div className="col-4 col-md-4 col-xl-3">
            <strong>
              <h4 className="force">Enterprise Solution</h4>
            </strong>
          </div>
        </div>
      </div>
      <div className="container-fluid need">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="met" id="core" style={{ marginTop: "10%" }}>
              Workforce needs, met right!
            </h2>
            <p className="exit" id="wax">
              At Logic Planet, we are experts in delivering efficient contingent
              hiring solutions with a strategic approach to sourcing the perfect
              resources and deploying them precisely when needed, seamlessly
              complementing your hiring process and overall strategy. With a
              track record of deploying over 5000 skilled employees across the
              globe in diverse industries, Logic Planet empowers you to tap into
              resource pools worldwide, ensuring that you can hire the
              best-suited talent for all your specific requirements. Your global
              talent needs, our specialized expertise!
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/undraw_working_re_ddwy-1.png"
              width={"50%"}
              height={"200px"}
              id="cook"
              style={{ marginTop: "20%" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/6876640-2.png"
              width={"85%"}
              height={"450px"}
              id="tub"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Into the digital transformation
            </h2>
            <p className="did" id="hello">
              Welcome to the future of hiring – where innovation and talent
              collide! At Logic Planet, we’re not just recruiters; we’re
              architects of your workforce’s digital transformation. Wave
              goodbye to cumbersome processes and say hello to unparalleled
              efficiency, as we effortlessly blend cutting-edge technologies
              such as AI, ATS, and collaborative tools into the mix. Our online
              recruitment platforms and mobile-friendly approach ensure that
              your dream team is just a click away. With data analytics steering
              the ship and video interviews shattering geographical barriers,
              we’re rewriting the rulebook on hiring experiences. Join us at the
              crossroads of innovation and recruitment excellence, where the
              future of talent awaits.
            </p>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "10%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <h2 className="hire" id="core">
              Helping Businesses to hire better and faster.
            </h2>
            <p className="did" id="hello">
              Say goodbye to staffing challenges with our expert team, AI-driven
              processes, and Digital Transformation solutions. We empower
              businesses to hire better and faster, ensuring a seamless and
              efficient recruitment journey. Elevate your workforce with Logic
              Planet’s innovative solutions today!
            </p>
            <button className="btn btn-warning" id="not">
              Know More
            </button>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/6876640-1.png"
              width={"85%"}
              height={"450px"}
              id="tub"
            />
          </div>
        </div>
      </div>
      <h2 className="hire" id="act" style={{ marginTop: "10%" }}>
        A journey through time!
      </h2>
      <img
        src="https://www.logicplanet.com/wp-content/uploads/2024/02/585435850-web-graph.png"
        id="tub"
      />
      <div className="container-fluid" style={{ backgroundColor: "#E8E3FF" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div id="">
              <h2 className="that" id="one">
                Hiring that is,
              </h2>
              <h2 className="fast" id="one">
                Fast.
              </h2>
              <h2 className="fast" id="one">
                Fair.
              </h2>
              <h2 className="fast" id="one">
                Precise.
              </h2>
            </div>
            <p className="lazy" id="wax">
              Logic Planet proudly stands as a trailblazer, setting remarkable
              benchmarks in the ever-evolving hiring landscape. Our mission is
              crystal clear: to empower businesses to enhance their productivity
              and profitability by strategically selecting the perfect
              candidates.
            </p>
            <p className="lazy" id="wax">
              Experience the transformative impact that Logic Planet can have on
              your hiring strategies. Witness an impressive surge of over 50% in
              your hiring funnel, a testament to our unwavering commitment to
              expanding your talent pool with exceptionally qualified
              individuals. But our innovative approach doesn’t stop at quantity;
              we’re here to redefine the efficiency of the entire hiring
              process. From streamlined candidate sourcing to cutting-edge
              evaluation methodologies, Logic Planet is your trusted partner in
              shaping a workforce that not only meets but exceeds expectations,
              fueling sustained growth and success for your organization
            </p>
          </div>

          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/Group-7.png"
              width={"87%"}
              height={"350px"}
              id="soul"
              style={{ marginTop: "20%" }}
            />
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "5%" }}>
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6 mt-5">
            <h1 className="hire" id="core">
              Our process
            </h1>
            <div className="onwer">
              <h6 className="mt-4 text-center ">
                AI-Powered Skill Identification:
              </h6>
              <h6 id="process" className="text-center did">
                Utilize advanced AI algorithms the precisely identify candidates
                with necessary skills contingent roles.
              </h6>
              <br />
            </div>
            <div id="offer">
              <h6 id="skill" className="mt-4 text-center did">
                Efficient ATS Management
              </h6>
              <h6 id="process" className="text-center">
                Streamline recruitment process leveraging Applicant Tracking
                System (ATS)organized candidate tracking and workflow
                efficiency.
              </h6>
              <br />
            </div>
            <div id="offer">
              <h6 id="skill" className="mt-4 text-center did">
                Automated Interview Scheduling
              </h6>
              <h6 id="process" className="text-center">
                Enhance candidate experienceautomated tools for seamless
                interview scheduling, minimizing delays and ensuring
                flexibility.
              </h6>
              <br />
            </div>
            <div id="offer">
              <h6 id="skill" className="mt-4 text-center did">
                Swift Offer Letter Deployment
              </h6>
              <h6 id="process" className="text-center">
                Expedite the offer pro through automated systems, swiftly
                generating and delivering offer letters for a smooth onboarding
                experience.
              </h6>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            <img
              src="https://www.logicplanet.com/wp-content/uploads/2023/12/5362885-1.png"
              width={"80%"}
              height={"300px"}
              id="tub"
              style={{ marginTop: "20%" }}
            />
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          marginTop: "10%",
          backgroundColor: "cadetblue",
          color: "white",
          paddingTop: "5%",
          paddingBottom: "5%",
        }}
      >
        <div className="row">
          <div className="col-sm-12 col-md-7 col-lg-7">
            <p className="end" id="core" style={{ paddingLeft: "15%" }}>
              In the end, it is all about people.
            </p>
            <p
              className="join"
              id="wax"
              style={{ color: "white", paddingLeft: "15%" }}
            >
              At Logic Planet, we don’t just embrace the future; we sculpt it.
              Picture a hiring journey where innovation meets intuition, where
              data dances with human insight. We’re not merely matching trends;
              we’re defining them. It’s time to be a part of a hiring revolution
              that goes beyond CVs and interviews – join us in shaping careers
              and fostering connections that transcend the ordinary.
            </p>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5">
            <button className="btn btn-" id="ton" style={{ marginTop: "7%" }}>
              Get Started
            </button>
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
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,192L34.3,197.3C68.6,203,137,213,206,202.7C274.3,192,343,160,411,154.7C480,149,549,171,617,181.3C685.7,192,754,192,823,208C891.4,224,960,256,1029,234.7C1097.1,213,1166,139,1234,122.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path></svg> */}
      {/* 
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="log.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="planet.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="pole.png" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="net.png" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div> */}
    </div>
  );
}

export default Logic;
