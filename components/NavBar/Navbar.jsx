/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Row, Col, Container, NavDropdown, Navbar } from "react-bootstrap";

export default function MainNavbar() {
  const [showAutoDoorsDropdown, setShowAutoDoorsDropdown] = useState(false);
  const [showMailBoxDropdown, setShowMailBoxDropdown] = useState(false);
  const [showEnterDoorsDropdown, setShowEnterDoorsDropdown] = useState(false);
  const [navbarScrolledCls, setNavbarScrolledCls] = useState("start-style");

  const handleWindowScrolled = () => {
    var scroll = window.scrollY;
    if (scroll >= 30) {
      setNavbarScrolledCls("scroll-on");
    } else {
      setNavbarScrolledCls("start-style");
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleWindowScrolled);
    return () => {
      document.removeEventListener("scroll", handleWindowScrolled);
    };
  }, []);

  const toogleTo = (value) => {
    if (typeof window !== "undefined") {
      if (window) {
        if (window.innerWidth >= 1400) window.location.href = value;
      }
    }
  };

  return (
    <div className={styles.navbar}>
      <div
        className={`${styles.navigationWrap} ${styles.startHeader} ${navbarScrolledCls}`}
      >
        <Container className={styles.navbarContainer}>
          <Row>
            <Col sm={12}>
              <Navbar
                className={`${styles.navbar} navbar-expand-xxl`}
                expand="xxl"
              >
                <div style={{ position: "relative" }}>
                  <div className={styles.logo}>
                    <Link href="/">
                      <a aria-label="לוגו פאר אנפון" className={styles.navbarBrand}>
                        <img
                          src="/images/companyLogo.png"
                          className="undragablle-image"
                          alt="פאר אנפון"
                        />
                        {/* <img
                          src="/images/‏‏company-logo-symbol.png"
                          className="undragablle-image"
                          alt="פאר אנפון"
                        />
                        <div className={` ${styles.navbarLogoTextDiv}`}>
                          <span className={`${styles.navbarLogoText}`}>
                            <span>פאר</span>
                            <span>אנפון</span>
                            <span>תעשיות בע&quot;מ</span>
                          </span>
                        </div> */}
                        {/* ${styles.shine}  */}
                      </a>
                    </Link>
                  </div>
                </div>

                <Navbar.Toggle
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarSupportedContent">
                  <div className="collapse navbar-collapse show">
                    <ul className="navbar-nav ml-auto py-4 py-md-0">
                      {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active-navbar">
                        <Link className="nav-link" href="/">
                          בית
                        </Link>
                      </li> */}

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                        onMouseLeave={() => setShowAutoDoorsDropdown(false)}>
                        <NavDropdown
                          className="dropdown-toggle"
                          title="דלתות אוטומטיות"
                          onToggle={() => toogleTo("/דלתות-אוטומטיות")}
                          show={showAutoDoorsDropdown}
                          onMouseEnter={() => setShowAutoDoorsDropdown(true)}
                        >
                          <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/דלתות-אוטומטיות">
                            דלתות אוטומטיות - כללי
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף">
                            אוטומטית הזזה דו-כנף
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף">
                            אוטומטית הזזה חד-כנף
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית">
                            אוטומטית טלסקופית
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת">
                            אוטומטית קורסת
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-פנים-אוטומטית">
                            דלתות פנים אוטומטיות
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                        onMouseLeave={() => setShowMailBoxDropdown(false)}>
                        <NavDropdown
                          className="dropdown-toggle"
                          title="תיבות דואר"
                          onToggle={() => toogleTo("/תיבות-דואר")}
                          show={showMailBoxDropdown}
                          onMouseEnter={() => setShowMailBoxDropdown(true)}
                        >
                          <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/תיבות-דואר">
                            תיבות דואר - כללי
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-לבתים-משותפים">
                            תיבות דואר לבתים משותפים
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-למוסדות">
                            תיבות דואר למוסדות
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-לבתים-פרטיים">
                            תיבות דואר לבתים פרטיים
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/תיבות-דואר/חדרי-תיבות-דואר">
                            חדרי תיבות דואר
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים">
                            ארון הפקדה לטלפונים סלולריים
                          </NavDropdown.Item>
                          {/*
                          <NavDropdown.Divider />
                          <NavDropdown.Item href="#action/3.4">משהו אחר</NavDropdown.Item>
                          */}
                        </NavDropdown>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/quick-access">
                          מעברים מהירים
                        </Link>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                        onMouseLeave={() => setShowEnterDoorsDropdown(false)}>
                        <NavDropdown
                          className="dropdown-toggle"
                          title="דלתות כניסה"
                          onToggle={() => toogleTo("/דלתות-כניסה")}
                          show={showEnterDoorsDropdown}
                          onMouseEnter={() => setShowEnterDoorsDropdown(true)}
                        >
                          <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/דלתות-כניסה">
                            דלתות כניסה - כללי
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-כניסה/דלתות-כניסה-אלומיניום">
                            דלתות כניסה אלומיניום
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/דלתות-כניסה/דלתות-כניסה-זכוכית">
                            דלתות כניסה זכוכית
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>


                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/intercom">
                          מערכות אינטרקום
                        </Link>
                      </li>

                      {/* <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/about-us">
                          אודותינו
                        </Link>
                      </li> */}

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/contact-us">
                          צור קשר
                        </Link>
                      </li>

                      <li className={styles.phoneText}>
                        <a href="tel:0723712701">
                          <i className={`${styles.phone} fas fa-phone`} aria-hidden="true"></i><span>072-371-2701</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        {/* <div className={styles.extraLinksDiv}>
          <div className={styles.menuContainer}>
            <nav className={styles.sideNavbar}>
              <ul className={styles.sideNavbarMenu}>
                <li className={`${styles.sideNavbarDropdown} ${styles.sideNavbarDropdown4}`}>
                <img src="https://img.icons8.com/ios/50/000000/menu--v4.png"/>
                  <ul className={`${styles.sideNavbarDropdownMenu} ${styles.sideNavbarDropdownMenu4}`}>
                    <li className={styles.sideNavbarDropdownItem1}>Item 1</li>
                    <li className={styles.sideNavbarDropdownItem2}>Item 2</li>
                    <li className={styles.sideNavbarDropdownItem3}>Item 3</li>
                    <li className={styles.sideNavbarDropdownItem4}>Item 4</li>
                    <li className={styles.sideNavbarDropdownItem5}>Item 5</li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div> */}
        <div className={`${styles.extraLinksDiv} ${styles.notDispalyOnMobile}`}>
          <nav role="sideNavbarNevigation">
            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              {/* <Row className={styles.row}>
                <Col>
                </Col>
                <Col> */}
                  <ul className={styles.menu}>
                    <li>
                      <i className="fas fa-home"></i>
                      <Link className="nav-link" href="/quick-access">
                        עמוד הבית
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-user-friends"></i>
                      <Link className="nav-link" href="/quick-access">
                        אודותינו
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-award"></i>
                      <Link className="nav-link" href="/quick-access">
                        המלצות
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-book-open"></i>
                      <Link className="nav-link" href="/quick-access">
                        מאמרים
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-tasks"></i>
                      <Link className="nav-link" href="/quick-access">
                        פרוייקטים
                      </Link>
                    </li>
                    <li>
                      <i className="fas fa-images"></i>
                      <Link className="nav-link" href="/quick-access">
                        גלריית תמונות
                      </Link>
                    </li>
                    <li>
                      {/* <i className="fas fa-certificate"></i> */}
                      <i className="fab fa-hotjar"></i>
                      <Link className="nav-link" href="/quick-access">
                        מוצרים חדשים
                      </Link>
                    </li>
                  </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
