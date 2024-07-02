import { thrownutility } from "@/utility";
import Link from "next/link";
import { Fragment } from "react";
import Sidebar from "./Sidebar";
const Header = ({ headers, dark }) => {
  const getHeader = () => {
    switch (headers) {
      case 1:
        return <Header1 dark={dark} />;
      case 2:
        return <Header2 dark={dark} />;
      case 3:
        return <Header3 dark={dark} />;
      case 4:
        return <Header4 dark={dark} />;

      default:
        return <Header1 dark={dark} />;
    }
  };
  return (
    <Fragment>
      {getHeader()}
      <MobileMenu />
      <Sidebar />
    </Fragment>
  );
};
export default Header;

const Header1 = ({ dark }) => {
  return (
    <Fragment>
      {/* <TopBar /> */}
      {/* <MobileMenu /> */}
      <Sidebar />

      <div
        className={`thrown-header-area style-three ${dark ? "dark" : ""}`}
        id={dark ? "navbar" : "sticky-header"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-logo style-three">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logo.png"
                          : "assets/images/logo2.png"
                      }
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={`thrown-menu style-three ${dark ? "dark" : ""}`}>
                <Nav />
              </div>
              <div className="thrown-search-button style-three">
                {/* <SearchBtn /> */}
              </div>
            </div>
          </div>
          <div className="side-menu-info">
            <div className="sidebar-menu">
              <a className="navSidebar-button" href="#">
                <i className="bi bi-justify-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const Header2 = ({ dark }) => {
  return (
    <div className="thrown-header-area style-two" id="navbar">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="header-logo style-two">
              <Link legacyBehavior href="/">
                <a>
                  <img src="assets/images/logo.png" alt="logo" />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className="thrown-menu style-two">
              <Nav />
            </div>
            <div className="thrown-search-button style-two">
              {/* <SearchBtn btnStyle={"style-two"} /> */}
            </div>
          </div>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a className="navSidebar-button" href="#">
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header3 = ({ dark }) => {
  return (
    <div
      className={`thrown-header-area style-three ${dark ? "dark" : ""}`}
      id={dark ? "navbar" : "sticky-header"}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-3">
            <div className="header-logo style-three">
              <Link legacyBehavior href="/">
                <a>
                  <img
                    src={
                      dark
                        ? "assets/images/logo.png"
                        : "assets/images/logo2.png"
                    }
                    alt="image"
                  />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-9">
            <div className={`thrown-menu style-three ${dark ? "dark" : ""}`}>
              <Nav />
            </div>
            <div className="thrown-search-button style-three">
              {/* <SearchBtn /> */}
            </div>
          </div>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a className="navSidebar-button" href="#">
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header4 = ({ dark }) => {
  return (
    <Fragment>
      <TopBar2 />
      <div
        className={`thrown-header-area style-five ${dark ? "dark" : ""}`}
        id={dark ? "navbar" : "sticky-header"}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <div className="header-logo style-five">
                <Link legacyBehavior href="/">
                  <a>
                    <img
                      src={
                        dark
                          ? "assets/images/logo.png"
                          : "assets/images/logo5.png"
                      }
                      alt="image"
                    />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-9">
              <div className={`thrown-menu style-five ${dark ? "dark" : ""}`}>
                <Nav />
              </div>
              <div className="thrown-search-button style-five">
                {/* <SearchBtn /> */}
              </div>
            </div>
          </div>
          <div className="side-menu-info">
            <div className="sidebar-menu">
              <a className="navSidebar-button" href="#">
                <i className="bi bi-justify-right" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const TopBar = () => {
  return (
    <div className="thrown-topbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-2" />
          <div className="col-lg-6">
            <div className="topbar-info">
              <span>
                <i className="bi bi-geo-alt-fill" /> 5010 Avenue of the Moon New
                York, NY 10018 US.
              </span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="topbar-social-item">
              <h4>FOLLOW US</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const TopBar2 = () => {
  return (
    <div className="thrown-topbar-area style-five">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="topbar-info style-five">
              <span>
                <i className="bi bi-geo-alt-fill" /> 5010 Avenue of the Moon New
                York, NY 10018 US.
              </span>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="topbar-social-item">
              <h4>FOLLOW US</h4>
              <ul>
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="active">
                  <a href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  return (
    <div className="mobile-menu-area" id="navbar">
      <div className="mobile-menu">
        <div className="mobile-logo">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logo.png" alt="image" />
            </a>
          </Link>
        </div>
        <div className="side-menu-info">
          <div className="sidebar-menu">
            <a
              className="navSidebar-button"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                thrownutility.sidebarToggle();
              }}>
              <i className="bi bi-justify-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Nav = () => {
  return (
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <Link legacyBehavior href="deals">
          Deals
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="about">
          About
        </Link>
      </li>
      <li>
        <Link legacyBehavior href="contact">
          Contact
        </Link>
      </li>
      {/* <li>
        <Link legacyBehavior href="#">
          Contact
        </Link>
      </li> */}
    </ul>
  );
};
