import Link from "next/link";

function Deals({ dark }) {
  return (
    <div className={`project-area ${dark ? "dark" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title">
                <h4>Popular Deals</h4>
              </div>
              <div className={`section-main-title ${dark ? "dark" : ""}`}>
                <h2>We Are Passionate About Our</h2>
                <h2>Clients And Our Work.</h2>
              </div>
            </div>
          </div>
        </div>
        {/* Photo Grid */}
        <div className="row">
          <div class="row d-flex justify-content-center">
            <div class="col-12 col-md-5 ">
              <div className="project-thumb ">
                <img
                  src="assets/images/properties/prop (1).png"
                  alt="image"
                  style={{ width: "100%" }}
                />
                <div className="portfolio-content ">
                  <div className="protfolio-title">
                    <h6>2 bed flat for sale</h6>
                    <h5>Bedrooms 2 Bathrooms 1</h5>
                    <h3>
                      <Link legacyBehavior href="#">
                        £950,000
                      </Link>
                    </h3>
                    <h6>Carnation Gardens, Hayes</h6>
                  </div>
                </div>
              </div>

              <div className="project-thumb">
                <img
                  src="assets/images/properties/prop (2).png"
                  alt="image"
                  style={{ width: "100%" }}
                />
                <div className="portfolio-content">
                  <div className="protfolio-title">
                    <h6>4 bed flat for sale</h6>
                    <h5>Bedrooms 4 Bathrooms 5 Living rooms 2</h5>
                    <h3>
                      <Link legacyBehavior href="#">
                        £5,000,000
                      </Link>
                    </h3>
                    <h6>Laburnum Road, Hayes</h6>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-12 col-md-5">
              <div className="project-thumb">
                <img
                  src="assets/images/properties/prop 1.webp"
                  alt="image"
                  style={{ width: "100%" }}
                />
                <div className="portfolio-content">
                  <div className="protfolio-title">
                    <h6>2 bed flat for sale</h6>
                    <h5>Bedrooms 2 Bathrooms 3 Living rooms 1</h5>
                    <h3>
                      <Link legacyBehavior href="#">
                        £2,500,000
                      </Link>
                    </h3>
                    <h6>Northolt Road, Harrow HA2</h6>
                  </div>
                </div>
              </div>

              <div className="project-thumb">
                <img
                  src="assets/images/properties/prop (3).png"
                  alt="image"
                  style={{ width: "100%" }}
                />
                <div className="portfolio-content">
                  <div className="protfolio-title">
                    <h6>2 bed flat for sale</h6>
                    <h5>Bedrooms 2 Bathrooms 1</h5>
                    <h3>
                      <Link legacyBehavior href="#">
                        £875,000
                      </Link>
                      <h6>Buckland, London, NW3</h6>
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
