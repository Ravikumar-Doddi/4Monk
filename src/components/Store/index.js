import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import scooty from "../../assets/scooty.png";
import scooty2 from '../../assets/scooty2.png'

function Store() {
  const [selectedColor, setSelectedColor] = useState('gray');
  
  const scootyImages = {
    blue: scooty2,
    gray : scooty,
    darkBlue : scooty2,
   skyBlue : scooty,
   lightSkyBlue : scooty2,
   red : scooty,
   white : scooty2,
   yellow : scooty
  };

  const handleColorSelection = (color) => {
    setSelectedColor(color);
  };
  return (
    <Container fluid className="mt-5">
      <Row className="total-container">
        <Col className="scooty-view p-5 fixed" xl={6}>
          <div className="d-flex justify-content-between storie-cont">
            <h6 className="storie">Stories</h6>
            <div className="sparkling">
              <div className={`default ${selectedColor}`}></div> {selectedColor}
            </div>
          </div>
          <hr />
          <div className="scooty-img-cont">
            <img src={scootyImages[selectedColor]} alt="scooty" className="scooty-pic" />
          </div>
          <hr className="mt-5" />
          <div className="price-cont">
            <div>
              <p>Booking Amount</p>
              <div className="rupee-cont">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-rupee rupee-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>{" "}
                <span className="rupees">2,500/-</span>
              </div>
            </div>

            <div>
              <div>
                <span className="ex-showroom">*Ex-showroom Price in</span>{" "}
                <span className="new-delhi">New Delhi</span>{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                  <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                </svg>
                <p className="incl">(Incl, FAME || Subsidy)</p>
              </div>
              <span className="rupees2">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-currency-rupee rupee-icon"
                  viewBox="0 0 16 16"
                >
                  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4v1.06Z" />
                </svg>
                <span className="rupees">1,17,357/-</span>
              </span>
            </div>
          </div>
        </Col>
        <Col className="scooty-color-view p-5" xl={6}>
          <div className="d-flex justify-content-between">
            <span className="select-mode d-none d-sm-block">
              01 Select Mode
            </span>
            <span className="select-mode">02 Select Color</span>
            <span className="details">
              03 Your Details And Prefered Location
            </span>
          </div>
          <h1 className="fs-2 choose-color mt-5">
            Choose <br /> a color
          </h1>
          <Card className="p-3 mt-5">
            <div className="p-3 p-md-5">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    class="bi bi-check-lg"
                    viewBox="0 0 16 16"
                  >
                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                  </svg>
                  <div className="fs-4 check">
                    Storie <br /> <span className="fs-6">Sparkling Green</span>
                  </div>
                </div>
                <img src={scootyImages[selectedColor]} alt="scooty" className="scooty-img" />
              </div>
              <div className="d-flex justify-content-between mt-5">
                <div className="picked-color selected-gray" onClick={() => handleColorSelection("gray")}></div>
                <div className="picked-color selected-blue " onClick={() => handleColorSelection("blue")}></div>
                <div className="picked-color selected-dark-blue" onClick={() => handleColorSelection("darkBlue")}></div>
                <div className="picked-color selected-sky-blue" onClick={() => handleColorSelection("skyBlue")}></div>
                <div className="picked-color selected-light-sky-blue" onClick={() => handleColorSelection("lightSkyBlue")}></div>
                <div className="picked-color selected-red" onClick={() => handleColorSelection("red")}></div>
                <div className="picked-color selected-white" onClick={() => handleColorSelection("white")}></div>
                <div className="picked-color selected-yellow" onClick={() => handleColorSelection("yellow")}></div>
              </div>
            </div>
          </Card>
          <div className="confirm-btn d-flex justify-content-between align-items-center mt-5">
            <span className="fs-6">CONFIRM</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="25"
              fill="currentColor"
              class="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </div>
        </Col>
        <Col className="p-5 footer-view">
          <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
            <h2 className="footer-head">
              Stay Informed <br />
              About Battre
            </h2>
            <div className="input-cont d-flex">
              {" "}
              <input placeholder="Your email ID" className="input-el" />
              <button className="sub-btn">Subscribe</button>
            </div>
          </div>
          <hr />
          <div className="d-flex flex-wrap justify-content-between mb-5">
            <Col xs={12} sm={6} md={6} lg={4}>
              <div className="d-none d-lg-block">
                <div className="adress">
                  Kasra No 351, 80 Feet Road Vinayak City <br /> Guru Marg,
                  Sirsi Road
                  <br />
                  Neemera, Bindayaka
                  <br />
                  <br /> Jaipur, Rajasthan, 302041
                  <br /> <br />
                  CIN: U29100RJ2017PTC059452
                </div>
              </div>
              <div className="d-block d-lg-none mb-4">
                <div className="adress ">
                  Kasra No 351, 80 Feet Road Vinayak City <br /> Guru Marg,
                  Sirsi Road Neemera, Bindayaka
                  <br />
                  <br />
                  Jaipur, Rajasthan, 302041
                  <br /> <br />
                  CIN: U29100RJ2017PTC059452
                </div>
              </div>
            </Col>
            <div></div>
            <Col xs={6} sm={6} md={6} lg={2}>
              <ul className="list-cont lg-2">
                <li className="child-head">Models</li>
                <li className="list-child">Storie</li>
                <li className="list-child">One</li>

                <li className="list-child">Loev</li>
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={2}>
              <ul className="list-cont lg-2">
                <li className="child-head">Company</li>
                <li className="list-child">About</li>
                <li className="list-child">Blog</li>
              </ul>
            </Col>

            <Col xs={6} sm={6} md={6} lg={2}>
              <ul className="list-cont">
                <li className="child-head">Quick Links</li>
                <li className="list-child">Become a Dealer</li>
                <li className="list-child">Locate a Dealer</li>
                <li className="list-child">Emagine</li>
              </ul>
            </Col>
            <Col xs={6} sm={6} md={6} lg={2}>
              <ul className="list-cont">
                <br />
                <li className="list-child">Book a Test Ride</li>
                <li className="list-child">Book Now</li>
                <li className="list-child">Contact</li>
              </ul>
            </Col>
          </div>
          <hr />
          <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row">
            <Col>
              <p className="privacy-policy">
                © 2023 Batt:RE. All rights reserved
              </p>
            </Col>
            <Col>
              <p className="privacy-policy">PRIVACY POLICY TERMS & CONDITION</p>
            </Col>
            <div className="icons-cont">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-facebook"
                viewBox="0 0 16 16"
              >
                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                fill="currentColor"
                class="bi bi-youtube"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
              </svg>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Store;
