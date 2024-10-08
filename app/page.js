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
                    <h1>for Future Success</h1>
                  </div>
                  <div className="thrown-btn slider three">
                    <a href="about" className="header-button">
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
                  <h4>PROVIDE BETTER EXPERIENCE!</h4>
                </div>
                <div className="section-main-title about3">
                  <h2>Unlock Profitable Deals with</h2>
                  <h2>Enterprise League</h2>
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion style-three">
                  <p>
                    Discover exclusive opportunities to maximize profits. Join
                    our network to access top deals instantly and elevate your
                    business growth.
                  </p>
                </div>

                <div className="about-bottom">
                  <div className="about-bottom-thumb">
                    <img
                      src="assets/images/about/profile-dp.png"
                      alt="image"
                      width={93}
                      height={93}
                    />
                  </div>
                  <div className="about-bottom-title">
                    <h4>Rhoda Igene</h4>
                    <span>Director</span>
                  </div>
                  <div className="about-signiture">
                    {/* <img src="assets/images/about/signiture.png" alt="image" /> */}
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
                    <a href="#"> +44 7780453714</a>
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
                        Exclusive Deal Access
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Gain priority access to exclusive, high-profit investment
                      opportunities before they hit the mainstream market.
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
                        Personalized Investment Strategies
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Receive tailored investment strategies based on your
                      unique financial goals and risk tolerance, crafted by our
                      team of experts.
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
                        Comprehensive Market Insights
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Stay ahead with in-depth market research and insights,
                      helping you to identify trends and seize the best
                      investment opportunities.
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
                        Expert Support and Guidance
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Access 24/7 support from our team of seasoned investment
                      professionals, providing you with expert guidance every
                      step of the way
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
                        Community of Investors
                      </Link>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Join a vibrant community of like-minded investors to share
                      insights, discuss strategies, and collaborate on
                      high-potential deals.
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
                      <a href="#">Comprehensive Due Diligence</a>
                    </h4>
                  </div>
                  <div className="underline">
                    <div className="br-line" />
                  </div>
                  <div className="serivice-discription style-three">
                    <p>
                      Access detailed reports and analysis to ensure every
                      investment decision is well-informed, ensuring a
                      diversified portfolio with minimal risk
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
      {/* <Work /> */}
      {/*==================================================*/}
      {/* End Thrown Project Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Sucsess Area */}
      {/*==================================================*/}
      {/* <Sucsess /> */}
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
                      <img
                        src="assets/images/testimonial/avatar.png"
                        width={161}
                        height={"164px"}
                        alt=""
                      />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Emma R</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          This service has saved me so much time and effort. The
                          curated deals are exactly what I need, and the
                          customer support team is always helpful. A must-have
                          for any serious investor.
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
                      <img
                        src="assets/images/testimonial/avatar.png"
                        width={161}
                        height={"164px"}
                        alt=""
                      />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Liam S</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          I was skeptical at first, but after trying out this
                          deal sourcing service, I'm impressed. The deals are
                          well-vetted, and I've found several great
                          opportunities that I wouldn't have discovered on my
                          own.
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
                      <img
                        src="assets/images/testimonial/avatar.png"
                        width={161}
                        height={"164px"}
                        alt=""
                      />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>Olivia T</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          The best part about this service is the variety of
                          deals. There's always something new and exciting. I've
                          closed a few deals already and can't wait for more!
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
                      <img
                        src="assets/images/testimonial/avatar.png"
                        width={161}
                        height={"164px"}
                        alt=""
                      />
                    </div>
                    <div className="testi-content">
                      <div className="testi-title">
                        <h4>William J</h4>
                        <span>Trainer</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          The deal sourcing service offers a great selection of
                          opportunities. I've been able to diversify my
                          portfolio significantly since I started using it. The
                          platform is easy to navigate, and the support is
                          excellent.
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
                        <h4>Noah B</h4>
                        <span>Admin Executive</span>
                      </div>
                      <div className="testi-discription">
                        <p>
                          Efficient, reliable, and worth every penny. This deal
                          sourcing service has streamlined my investment process
                          and connected me with some incredible opportunities
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
