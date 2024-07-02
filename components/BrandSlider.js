"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
const BrandSlider = ({ dark }) => {
  return (
    <div className={`brand-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="brand_list">
            <Swiper {...sliderProps.brand_list}>
              <SwiperSlide className="col-lg-12">
                <div className="col-lg-4 col-md-6">
                  <div className="pricing-single-box">
                    <div className="pricing-content">
                      <div className="pricing-title">
                        <h3>Basic Pack</h3>
                      </div>
                      <div className="pricing-rate">
                        <h3>
                          <span>$</span>30
                        </h3>
                        <span>.99</span>
                      </div>
                      <div className="pricing-time">
                        <span>
                          <i className="bi bi-alarm" /> 33 Min
                        </span>
                      </div>
                      <div className="pricing-list">
                        <span>
                          <i className="bi bi-check2" /> Powerful Admin Panel
                        </span>
                        <span>
                          <i className="bi bi-check2" /> 1 Native Android App
                        </span>
                        <span>
                          <i className="bi bi-check2" /> Multi-Language Support
                        </span>
                        <span className="inner">
                          <i className="bi bi-x" /> Advance Options
                        </span>
                      </div>
                    </div>
                    <div className="thrown-btn pircing">
                      <Link legacyBehavior href="/contact-us">
                        <a className="header-button">
                          Purchase Now <span />
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand2.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand3.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand4.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand5.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand6.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand6.svg" alt="image" />
                </div>
              </SwiperSlide>
              <SwiperSlide className="col-lg-12">
                <div className="brand-thumb">
                  <img src="assets/images/brand/brand6.svg" alt="image" />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BrandSlider;
