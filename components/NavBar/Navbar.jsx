/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { Row, Col, Container, NavDropdown, Navbar } from "react-bootstrap";

export default function MainNavbar() {
  const [showAutoDoorsDropdown, setShowAutoDoorsDropdown] = useState(false);
  const [showMailBoxDropdown, setShowMailBoxDropdown] = useState(false);
  const [showTransitionsDoorsDropdown, setShowTransitionsDoorsDropdown] = useState(false);
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
                          className={`undragablle-image navbar-brand-img`}
                          alt="פאר אנפון"
                        />
                      </a>
                    </Link>
                  </div>
                </div>

                <Navbar.Toggle
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="navbarSupportedContent">
                  <div className="collapse navbar-collapse show">

                    <div className={styles.navbarRow}>
                      <div className={styles.navbarCol}>

                        <ul className="navbar-nav ml-auto py-md-0">
                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            onMouseLeave={() => setShowAutoDoorsDropdown(false)}>
                            {/* <img className={styles.navIcon} src="/images/navbarIcons/inside-door.png" alt="" /> */}
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
                            {/* <img className={styles.navIcon} src="/images/navbarIcons/mailbox.png" alt="" /> */}
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

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4"
                            onMouseLeave={() => setShowTransitionsDoorsDropdown(false)}>
                            <NavDropdown
                              className="dropdown-toggle"
                              title="מעברי כניסה"
                              onToggle={() => toogleTo("/מעברי-כניסה")}
                              show={showTransitionsDoorsDropdown}
                              onMouseEnter={() => setShowTransitionsDoorsDropdown(true)}
                            >
                              <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/מעברי-כניסה">
                                מעברי כניסה - כללי
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/מעברי-כניסה/מעברים-מהירים">
                                מעברים מהירים
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/מעברי-כניסה/קרוסלות-חצובה">
                                קרוסלות חצובה
                              </NavDropdown.Item>
                            </NavDropdown>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/דלתות-כניסה">
                              דלתות כניסה
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/מערכות-אינטרקום"
                              data-bs-toggle="collapse"
                              data-toggle="collapse"
                              data-bs-target=".navbar-collapse.show">
                              מערכות אינטרקום
                            </Link>
                          </li>

                          <div className={styles.displayOnlyOnMobile}>
                            <div className={styles.seperatorProductsAndOthers}></div>
                          </div>

                          <li className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${styles.notDispalyOnMobile}`}>
                            <Link className="nav-link" href="/צור-קשר"
                              data-toggle="collapse"
                              data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">
                              צור קשר
                            </Link>
                          </li>

                          <li className={`${styles.phoneText} ${styles.notDispalyOnMobile}`}>
                            <a href="tel:0723712701">
                              <i className={`${styles.phone} fas fa-phone`} aria-hidden="true"></i><span>072-371-2701</span>
                            </a>
                          </li>
                        </ul>
                      </div>

                      <div className={`${styles.navbarCol} ${styles.displayOnlyOnMobile}`}>
                        <ul className="navbar-nav ml-auto py-md-0">

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/">
                              עמוד הבית
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/אודותינו">
                              אודותינו
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/המלצות">
                              המלצות
                            </Link>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/מאמרים">
                              מאמרים
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/פרוייקטים">
                              פרוייקטים
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/גלריית-תמונות">
                              גלריית תמונות
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                            <Link className="nav-link" href="/מוצרים-חדשים">
                              מוצרים חדשים
                            </Link>
                          </li>

                          <li className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${styles.displayOnlyOnMobile}`}>
                            <Link className="nav-link" href="/צור-קשר">
                              צור קשר
                            </Link>
                          </li>

                        </ul>
                      </div>
                    </div>
                    <div className={`${styles.navbarRow} ${styles.displayOnlyOnMobile}`} style={{ justifyContent: "center", marginTop: "25px" }}>
                      <ul className="navbar-nav ml-auto py-md-0">
                        <li className={`${styles.phoneText}`}>
                          <a href="tel:0723712701">
                            <i className={`${styles.phone} fas fa-phone`} aria-hidden="true"></i><span>072-371-2701</span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
        <div className={`${styles.extraLinksDiv} ${styles.notDispalyOnMobile}`}>
          <nav role="sideNavbarNevigation">
            <div className={styles.menuToggle}>
              <input type="checkbox" />
              <span></span>
              <span></span>
              <span></span>
              <ul className={styles.menu}>

                <li>
                  <i className="fas fa-home"></i>
                  <Link className="nav-link" href="/">
                    עמוד הבית
                  </Link>
                </li>

                <li>
                  <i className="fas fa-user-friends"></i>
                  <Link className="nav-link" href="/אודותינו">
                    אודותינו
                  </Link>
                </li>

                <li>
                  <i className="fas fa-award"></i>
                  <Link className="nav-link" href="/המלצות">
                    המלצות
                  </Link>
                </li>

                <li>
                  <i className="fas fa-book-open"></i>
                  <Link className="nav-link" href="/מאמרים">
                    מאמרים
                  </Link>
                </li>

                <li>
                  <i className="fas fa-tasks"></i>
                  <Link className="nav-link" href="/פרוייקטים">
                    פרוייקטים
                  </Link>
                </li>

                <li>
                  <i className="fas fa-images"></i>
                  <Link className="nav-link" href="/גלריית-תמונות">
                    גלריית תמונות
                  </Link>
                </li>

                <li>
                  <i className="fab fa-hotjar"></i>
                  <Link className="nav-link" href="/מוצרים-חדשים">
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
