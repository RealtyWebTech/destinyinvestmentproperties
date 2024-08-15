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
                <img src="assets/images/about/about-thumb.jpg" alt="" />
                <div className="about-shape bounce-animate">
                  <img src="assets/images/about/hmo.jpg" alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="section-title">
                <div className="about-main-title">
                  <h2>What is Houses in Multiple Occupation (HMO)?</h2>
                  {/* <h2>With The World</h2> */}
                </div>
              </div>
              <div className="about-content">
                <div className="about-discribtion">
                  <p>
                    A house in multiple occupation (HMO) refers to a residential
                    property where multiple tenants from different households
                    share common facilities such as kitchens, bathrooms, or
                    toilets. The classification of HMOs is significant in the
                    UK, particularly for regulatory and safety reasons.
                  </p>
                </div>
                <div className="about-main-title">
                  <h2>How we offer HMO?</h2>
                </div>
                <div className="about-discribtion">
                  <p>
                    Our firm serves as a comprehensive hub for HMO-related
                    information and resources, connecting landlords and tenants.
                    We provide valuable insights into the HMO market and share
                    best practices for effective management. Explore our
                    resources to stay informed and make the most of your HMO
                    investments.
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
