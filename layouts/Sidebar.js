import { thrownutility } from "@/utility";
import Link from "next/link";
import { useState } from "react";

const Sidebar = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeLi = (value) => setActiveMenu(activeMenu === value ? "" : value);
  return (
    <div className="sidebar-group info-group">
      <div className="sidebar-widget">
        <div className="sidebar-widget-container">
          <div className="widget-heading">
            <a
              href="#"
              className="close-side-widget"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}>
              <i className="bi bi-x-lg" />
            </a>
          </div>
          <div className="sidebar-textwidget">
            <div className="sidebar-info-contents">
              <div className="content-inner">
                <div className="sidebar-logo">
                  <Link legacyBehavior href="/">
                    <a>
                      <img src="assets/images/logo.png" alt="logo" />
                    </a>
                  </Link>
                </div>
                <div className="sidebar-widget-menu">
                  <ul>
                    <li className="dropdown">
                      <Link legacyBehavior href="/">
                        <a data-toggle="dropdown">Home</a>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link legacyBehavior href="deals">
                        <a data-toggle="dropdown">Deals</a>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link legacyBehavior href="about">
                        <a data-toggle="dropdown">About</a>
                      </Link>
                    </li>

                    <li className="dropdown">
                      <Link legacyBehavior href="contact">
                        <a data-toggle="dropdown">Contact</a>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="contact-info">
                  <h2>Contact Info</h2>
                  <ul className="list-style-one">
                    <li>
                      <i className="bi bi-geo-alt-fill" />
                      Flat 1, 170 Woodcote Road Wallington SM6 0PA London
                    </li>
                    <li>
                      <i className="bi bi-telephone-fill" />
                      (+44) 7780453714
                    </li>
                    <li>
                      <i className="bi bi-envelope" />{" "}
                      customer@destinyinvestmentproperties.co.uk
                    </li>
                    <li>
                      <i className="bi bi-alarm-fill" /> Week Days: 08.00 to
                      10.00
                    </li>
                  </ul>
                </div>
                <ul className="social-box">
                  <li className="facebook">
                    <a
                      href="https://www.facebook.com/Dipropertiesltd/"
                      className="fab fa-facebook-f"
                    />
                  </li>
                  <li className="twitter">
                    <a
                      href="https://www.instagram.com/dipropertiesltd/"
                      className="fab fa-instagram"
                    />
                  </li>
                  {/* <li className="linkedin">
                    <a href="" className="fab fa-twitter" />
                  </li>
                  <li className="instagram">
                    <a
                      href="https://www.instagram.com/dipropertiesltd/"
                      className="fab fa-pinterest-p"
                    />
                  </li> */}
                  {/* <li className="youtube">
                    <a href="#" className="fab fa-linkedin-in" />
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
