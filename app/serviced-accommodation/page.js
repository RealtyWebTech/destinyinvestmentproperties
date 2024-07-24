import Faq from "@/components/Faq";
import PageBanner from "@/components/PageBanner";
import ThrownLayout from "@/layouts/ThrownLayout";
const page = () => {
  return (
    <ThrownLayout>
      <PageBanner pageName={"Houses in Multiple Occupation (HMO)"} />
      {/*==================================================*/}
      {/* Start Thrown About Area */}
      {/*==================================================*/}
      <div className="about-area inner-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="about-thumb">
                <img
                  src="assets/images/serviced-accommodation/pic-2.jpg"
                  alt=""
                />
                <div className="about-shape bounce-animate">
                  <img
                    src="assets/images/serviced-accommodation/pic-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="about-main-title">
                  <h2>What is Serviced Accommodation ?</h2>
                  {/* <h2>With The World</h2> */}
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion">
                  <p>
                    Serviced Accommodation (SA) is where a landlord lets out a
                    residential property on a short-term basis with a range of
                    amenities included. These include furniture and appliances
                    alongside cleaning, housekeeping, high-speed broadband,
                    TV/movie/sports streaming and 24-hour concierge services.
                    Facilitated by a number of well-recognised portals such as
                    Airbnb, acquiring/managing serviced apartments can broadly
                    be described as a hybrid of investing in buy-to-let
                    properties and hotels.
                  </p>
                </div>
                <div className="about-main-title">
                  <h2>Why host with us?</h2>
                </div>
                <div className="about-discribtion">
                  <p>
                    We specializes in hassle-free short-term let property
                    management, optimizing rental income for landlords. We offer
                    a range of services including professional cleaning,
                    property maintenance, and dynamic pricing strategies. Our
                    platform allows landlords to manage listings easily and
                    maximize their rental yields.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThrownLayout>
  );
};
export default page;
