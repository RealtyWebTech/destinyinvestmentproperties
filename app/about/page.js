import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"About Us"} />
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img src="assets/images/about/about-thumb.jpg" alt="" />
                <div className="about-shape bounce-animate">
                  <img src="assets/images/about/about-shape.png" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="about-sub-title">
                  <h4>Destiny Investment Properties</h4>
                </div>
                <div className="about-main-title">
                  <h2>Vision</h2>
                </div>
                <div className="about-discribtion">
                  <p>
                    Our vision is to revolutionise property management and deal
                    sourcing in the United Kingdom by transforming real estate
                    into thriving, stress-free investments that benefit both
                    landlords, investors and the community.
                  </p>
                </div>
                <div className="about-main-title">
                  <h2>Mission</h2>
                </div>
                <div className="about-discribtion">
                  <p>
                    Our mission is to empower entrepreneurs, investors, and
                    dealmakers to connect and transact with ease by offering a
                    thorough and intuitive deal-sourcing platform. Our goal is
                    to become the preferred location for transaction flow,
                    offering a carefully chosen range of superior investment
                    options.
                  </p>
                </div>
                <div className="about-main-title">
                  <h2>What We Do</h2>
                  {/* <h2>With The World</h2> */}
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion">
                  <p>
                    Destiny Investment Properties specializes in relieving
                    landlords of their burden. We manage your property from
                    start to finish, assuring a consistent rental income, no
                    maintenance issues, and no gaps in occupancy. We transform
                    your homes into high-yield assets by modifying and
                    converting them into serviced accommodations, Houses in
                    Multiple Occupation (HMO), or short-term rental properties
                    like Airbnb. Our complete strategy not only ensures your
                    income but also increases the value and appeal of your
                    property, all while giving you peace of mind that your
                    investment is in capable hands
                  </p>
                </div>

                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4>Significant Growth</h4>
                      </div>
                    </div>
                    {/*end about single box */}
                  </div>
                  <div className="col-lg-6 col-md-6">
                    {/*start about single box */}
                    <div className="about-single-box">
                      <div className="about-icon">
                        <i className="bi bi-patch-check" />
                      </div>
                      <div className="about-text">
                        <h4>Best in Class</h4>
                      </div>
                    </div>
                    {/*end about single box */}
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
      {/* Start Thrown Choose Area */}
      {/*==================================================*/}
      {/* <div className="choose-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="section-sub-title choose">
                  <h4>We Provide Best Solution</h4>
                </div>
                <div className="section-main-title choose">
                  <h2>Reason For Choosing</h2>
                  <h2>Our Consultancy</h2>
                </div>
              </div>
              <div className="choose-discription">
                <p>
                  Providing legal advice, contract drafting, coance assistance,
                  intellectual property protection, and other legal support for
                  businesses. Creating visual content, such as logos, brochures,
                  infographics, and other branding materials.
                </p>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose1.png" alt="" />
                </div>
                <div className="choose-content">
                  <h4>Accounting and Bookkeeping</h4>
                  <p>We provide a range of digital marketing solutions.</p>
                </div>
              </div>
              <div className="choose-single-box">
                <div className="choose-icon">
                  <img src="assets/images/resource/choose2.png" alt="" />
                </div>
                <div className="choose-content">
                  <h4>Customer Service And Support</h4>
                  <p>
                    Our pricing varies depending on the specific services you
                    require.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="single-video style-two">
                <div className="video-icon style-two">
                  <a
                    className="video-vemo-icon venobox vbox-item"
                    data-vbtype="youtube"
                    data-autoplay="true"
                    href="https://youtu.be/BS4TUd7FJSg">
                    <i className="bi bi-play" />
                  </a>
                </div>
              </div>
              <div className="choose-contact">
                <div className="row">
                  <div className="col-lg-4 col-md-6">
                    <div className="subscribe-title">
                      <h4>Subscribe Our Newslatter</h4>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <form
                      action="https://formspree.io/f/myyleorq"
                      method="post"
                      id="#">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box">
                            <input
                              type="text"
                              name="email"
                              placeholder="Email Address"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-6 col-6">
                          <div className="form-box-button choose">
                            <button type="Submit">
                              Subscribe <i className="bi bi-arrow-right" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/*==================================================*/}
      {/* End Thrown Choose Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Service Area */}
      {/*==================================================*/}

      {/*==================================================*/}
      {/* End Thrown Service Area */}
      {/*==================================================*/}
      {/*==================================================*/}
      {/* Start Thrown Faq Area */}
      {/*==================================================*/}
    </ThrownLayout>
  );
};
export default page;
