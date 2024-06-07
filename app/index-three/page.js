"use client";
import Faq from "@/components/Faq";
import Sucsess from "@/components/Sucsess";
import Work from "@/components/Work";
import ThrownLayout from "@/layouts/ThrownLayout";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const page = () => {
  return (
    <ThrownLayout header={3}>
      {/*==================================================*/}
      {/* Start Thrown Slider Area */}
      {/*==================================================*/}
      <section className="banner-section style-three">
        <div className="banner-carousel">
          <Swiper {...sliderProps.hero1}>
            <SwiperSlide className="slide-item two">
              <div
                className="image-layer"
                style={{
                  backgroundImage: 'url("assets/images/slider/slider6.png")',
                }}
              />
              <div className="container">
                <div className="slider-content style-three">
                  <div className="slider-main-title style-three">
                    <h1>Revolutionizing </h1>
                    <h1>Deal Sourcing</h1>
                    <h1>Success Future</h1>
                  </div>
                  <div className="thrown-btn slider three">
                    <a className="header-button">
                      Read More <span />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
      {/*==================================================*/}
      {/* End Thrown Slider Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb style-three">
                <img src="assets/images/about/about-thumb3.png" alt="image" />
                <div className="about-shape-three bounce-animate ">
                  <img src="assets/images/about/shape3.png" alt="image" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title about3">
                  <h4>PROVIDE BETTER EXPERIENCES!</h4>
                </div>
                <div className="section-main-title about3">
                  <h2>Transforming businesses with </h2>
                  <h2>Enterprise League</h2>
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-three">
                  <p>
                    Quisque dignissim enim diam, eget pulvinar ex viverra id.
                    Nulla a lobortis lectus, id volutpat magna. Morbi consequat
                    porttitor fermentum. Nulla vestibulum tincidunt viverra.
                    Vestibulum accumsan
                  </p>
                </div>

                <div className="about-bottom">
                  <div className="about-bottom-thumb">
                    <img
                      src="assets/images/about/about-bottom.png"
                      alt="image"
                    />
                  </div>
                  <div className="about-bottom-title">
                    <h4>Max Benjamin</h4>
                    <span>Director</span>
                  </div>
                  <div className="about-signiture">
                    <img src="assets/images/about/signiture.png" alt="image" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown About Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Contact Us Area */}
      {/*==================================================*/}
      <div className="contact-us-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="contact-us-items">
                <div className="contact-us-content style-three">
                  <h4>REASON TO CHOOSE US</h4>
                  <h2>Small Businesses, Big Dreams</h2>
                </div>
                <div className="contact-us-list">
                  <span>
                    <i className="bi bi-check" /> Maximize your market reach
                  </span>
                  <span>
                    <i className="bi bi-check" /> Establish trust and
                    credibility
                  </span>
                  <span>
                    <i className="bi bi-check" /> Real-time analytics
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="contact-us-items-box">
                <div className="contact-icon-thumb">
                  <img
                    src="assets/images/resource/contact-icon.png"
                    alt="image"
                  />
                </div>
                <div className="contact-items-content">
                  <h6>Need Help? Call us</h6>
                  <h4>
                    <a href="#">+91 458 654 528</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Contact Us Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Area */}
      {/*==================================================*/}
      <div className="service-area style-three">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>Provide Services</h4>
                </div>
                <div className="section-main-title">
                  <h2>Provide Creative Services For</h2>
                  <h2>Your Business Growth</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Complete Overview
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon1.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Business Strategy Growth
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon2.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Smart Profile Integration
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon3.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        SEO Powered
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon4.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <Link legacyBehavior href="service-details">
                        Solution Regenerating Easily
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon5.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <a className="header-button" href="#">
                      Learn More <span />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="service-single-box style-three">
                <div className="service-conten style-three">
                  <div className="service-title style-three">
                    <h4>
                      <a href="#">Customer Care &amp; Support</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Transmax is the world’s driving worldwide coordinations
                      supplierwe uphold industry and exchange the worldwide
                    </p>
                  </div>
                </div>
                <div className="service-bottom">
                  <div className="service-icon">
                    <img
                      src="assets/images/service/service-icon6.png"
                      alt="image"
                    />
                  </div>
                  <div className="thrown-btn service">
                    <Link legacyBehavior href="/contact-us">
                      <a className="header-button">
                        Learn More <span />
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Project Area */}
      {/*==================================================*/}
      <Work />
      {/*==================================================*/}
      {/* End Thrown Project Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Sucsess Area */}
      {/*==================================================*/}
      <Sucsess />
      {/*==================================================*/}
      {/* End Thrown Sucsess Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Team Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Thrown Team Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
      {/* <div className="faq-area style-three">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="faq-thumb">
                <img src="assets/images/resource/faq-thumb.png" alt="image" />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <Faq />
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End Thrown Faq Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Testimonial Area */}
      {/*==================================================*/}
      <div className="testimonial-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h4>OUR WORKERS</h4>
                </div>
                <div className="section-main-title">
                  <h2>Working With Excellentour</h2>
                  <h2>Great Team</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="testi_list">
              <Swiper {...sliderProps.testimonial}>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi1.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="testi-single-box">
                    <div className="testi-thumb">
                      <img src="assets/images/testimonial/testi2.png" alt="" />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Charlize Theron</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Foundation was established with a small idea that was
                          incepted in the minds of its promoters in the year
                          1994! We skilfully guide applicants for immigration
                          process to any country they aspire to settle down
                        </p>
                      </div>
                    </div>
                    <div className="testi-icon-thumb">
                      <img
                        src="assets/images/testimonial/testi-icon.png"
                        alt=""
                      />
                    </div>
                    <div className="testi-rating">
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                      <i className="bi bi-star-fill" />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="owl-dots"></div>
            </div>
          </div>
        </div>
      </div>
      {/*==================================================*/}
      {/* End Thrown Testimonial Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Blog Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Thrown Blog Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
