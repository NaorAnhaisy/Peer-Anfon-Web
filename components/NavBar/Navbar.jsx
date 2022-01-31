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
  const [expanded, setExpanded] = useState(false);
  const [sideNavExpanded, setSideNavExpanded] = useState(false);

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
                expanded={expanded}
              >
                <div style={{ position: "relative" }}>
                  <div className={styles.logo}>
                    <Link href="/">
                      <a aria-label="לוגו פאר אנפון" className={styles.navbarBrand}>
                        <img
                          src="/images/company-logo/white-logo.png"
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
                  onClick={() => setExpanded(expanded ? false : "expanded")}
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
                              <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/דלתות-אוטומטיות" onClick={() => setExpanded(false)}>
                                דלתות אוטומטיות - כללי
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף" onClick={() => setExpanded(false)}>
                                אוטומטית הזזה דו-כנף
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף" onClick={() => setExpanded(false)}>
                                אוטומטית הזזה חד-כנף
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית" onClick={() => setExpanded(false)}>
                                אוטומטית טלסקופית
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת" onClick={() => setExpanded(false)}>
                                אוטומטית קורסת
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/דלתות-אוטומטיות/דלת-פנים-אוטומטית" onClick={() => setExpanded(false)}>
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
                              <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/תיבות-דואר" onClick={() => setExpanded(false)}>
                                תיבות דואר - כללי
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-לבתים-משותפים" onClick={() => setExpanded(false)}>
                                תיבות דואר לבתים משותפים
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-למוסדות" onClick={() => setExpanded(false)}>
                                תיבות דואר למוסדות
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/תיבות-דואר/תיבות-דואר-לבתים-פרטיים" onClick={() => setExpanded(false)}>
                                תיבות דואר לבתים פרטיים
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/תיבות-דואר/חדרי-תיבות-דואר" onClick={() => setExpanded(false)}>
                                חדרי תיבות דואר
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים" onClick={() => setExpanded(false)}>
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
                              <NavDropdown.Item className={styles.displayOnlyOnMobile} href="/מעברי-כניסה" onClick={() => setExpanded(false)}>
                                מעברי כניסה - כללי
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/מעברי-כניסה/מעברים-מהירים" onClick={() => setExpanded(false)}>
                                מעברים מהירים
                              </NavDropdown.Item>
                              <NavDropdown.Item href="/מעברי-כניסה/קרוסלות-חצובה" onClick={() => setExpanded(false)}>
                                קרוסלות חצובה
                              </NavDropdown.Item>
                            </NavDropdown>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/דלתות-כניסה">
                              דלתות כניסה
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/מערכות-אינטרקום">
                              מערכות אינטרקום
                            </Link>
                          </li>

                          <div className={styles.displayOnlyOnMobile}>
                            <div className={styles.seperatorProductsAndOthers}></div>
                          </div>

                          <li className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${styles.notDispalyOnMobile}`} onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/צור-קשר">
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

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/">
                              עמוד הבית
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/אודותינו">
                              אודותינו
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/המלצות">
                              המלצות
                            </Link>
                          </li>
                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/מאמרים">
                              מאמרים
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/פרוייקטים">
                              פרוייקטים
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/גלריית-תמונות">
                              גלריית תמונות
                            </Link>
                          </li>

                          <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4" onClick={() => setExpanded(false)}>
                            <Link className="nav-link" href="/מוצרים-חדשים">
                              מוצרים חדשים
                            </Link>
                          </li>

                          <li className={`nav-item pl-4 pl-md-0 ml-0 ml-md-4 ${styles.displayOnlyOnMobile}`} onClick={() => setExpanded(false)}>
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
              <input type="checkbox" checked={sideNavExpanded} onChange={() => setSideNavExpanded(sideNavExpanded ? false : "sideNavExpanded")} />
              <span></span>
              <span></span>
              <span></span>
              <ul className={styles.menu}>
                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/">
                      <a>
                        <i className="fas fa-home"></i>
                        עמוד הבית
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/אודותינו">
                      <a>
                        <i className="fas fa-user-friends"></i>
                        אודותינו
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/המלצות">
                      <a>
                        <i className="fas fa-award"></i>
                        המלצות
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/מאמרים">
                      <a>
                        <i className="fas fa-book-open"></i>
                        מאמרים
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/פרוייקטים">
                      <a>
                        <i className="fas fa-tasks"></i>
                        פרוייקטים
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/גלריית-תמונות">
                      <a>
                        <i className="fas fa-images"></i>
                        גלריית תמונות
                      </a>
                    </Link>
                  </div>
                </li>

                <li>
                  <div onClick={() => setSideNavExpanded(false)}>
                    <Link className="nav-link" href="/מוצרים-חדשים">
                      <a>
                        <i className="fab fa-hotjar"></i>
                        מוצרים חדשים
                      </a>
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
