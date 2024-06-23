import Link from "next/link";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row gx-6">
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-log">
                <Link legacyBehavior href="/">
                  <a>
                    <img src="assets/images/footer-logo.png" alt="" />
                  </a>
                </Link>
              </div>
              <div className="footer-wiget-text">
                {/* <h5>Source Deals Faster, Invest Smarter</h5> */}
              </div>
              <div className="footer-shape-title pt-10"></div>
              <div className="footer-wiget-shape">
                <p>
                  Company registered in England & Wales. Company Number:
                  15722751
                </p>
              </div>
              <div className="footer-wiget-shape">
                {/* <img src="assets/images/footer/Play-Store.png" alt="" /> */}
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Links</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> About us</a>
                  </li>
                  <li>
                    <a href="#"> Deals</a>
                  </li>
                  <li>
                    <a href="#"> Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-wiget">
              <div className="footer-wiget-title">
                <h4>Other Link</h4>
              </div>
              <div className="footer-wiget-menu">
                <ul>
                  <li>
                    <a href="#"> Faq</a>
                  </li>
                  <li>
                    <a href="#"> Tearm of user</a>
                  </li>
                  <li>
                    <a href="#"> Disclaimer</a>
                  </li>
                  <li>
                    <a href="#"> Privacy Policy</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 pr-0">
            <div className="foter-box">
              <div className="footer-wiget-icon">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="footer-widget-contct-menu">
                <ul>
                  <li>
                    <a href="#">(+44) 7780453714</a>
                  </li>
                  <li className="line">
                    <a href="#">customer@destinyinvestmentproperties.co.uk</a>
                  </li>
                  <li>
                    <a href="#">175 10h Street, Office 375 Berlin, De 21562</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row align-items-center mt-100">
          <div className="col-lg-6 col-md-12">
            <div className="copyright-text">
              <p>
                Copyright © <a href="#">Destiny Investment Properties Ltd.</a>{" "}
                All Rights Reserved.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="footer-condition">
              <ul>
                <li>
                  <a href="#">Terms of use</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
