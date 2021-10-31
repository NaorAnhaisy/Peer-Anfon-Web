import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { Row, Col, Container, NavDropdown, Navbar } from "react-bootstrap";
// import getConfig from 'next/config'
// const { publicRuntimeConfig } = getConfig()

export default function MainNavbar() {
  const [showAutoDoorsDropdown, setShowAutoDoorsDropdown] = useState(false);
  const [showMailBoxDropdown, setShowMailBoxDropdown] = useState(false);
  const [showEnterDoorsDropdown, setShowEnterDoorsDropdown] = useState(false);
  const [showInterkumDropdown, setShowInterkumDropdown] = useState(false);
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
                <Link href="/">
                  <a aria-label="לוגו פאר אנפון" className={styles.navbarBrand}>
                    <Image
                      src="/images/company-logo.png"
                      className="undragablle-image"
                      width={10}
                      height={3}
                      layout="responsive"
                      alt=""
                    />
                  </a>
                </Link>

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
                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active-navbar">
                        <Link className="nav-link" href="/">
                          בית
                        </Link>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <NavDropdown
                          className="dropdown-toggle"
                          title="דלתות אוטומטיות"
                          onToggle={() => toogleTo("/דלתות-אוטומטיות")}
                          show={showAutoDoorsDropdown}
                          onMouseEnter={() => setShowAutoDoorsDropdown(true)}
                          onMouseLeave={() => setShowAutoDoorsDropdown(false)}
                        >
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

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <NavDropdown
                          className="dropdown-toggle"
                          title="תיבות דואר"
                          onToggle={() => toogleTo("/mailbox")}
                          show={showMailBoxDropdown}
                          onMouseEnter={() => setShowMailBoxDropdown(true)}
                          onMouseLeave={() => setShowMailBoxDropdown(false)}
                        >
                          <NavDropdown.Item href="/mailbox/shared-houses">
                            תיבות דואר לבתים משותפים
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/mailbox/organizations">
                            תיבות דואר למוסדות
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/mailbox/private-houses">
                            תיבות דואר לבתים פרטיים
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/mailbox/mailbox-rooms">
                            חדרי תיבות דואר
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/mailbox/deposit-cellphones">
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

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <NavDropdown
                          className="dropdown-toggle"
                          title="דלתות כניסה"
                          onToggle={() => toogleTo("/enter-doors")}
                          show={showEnterDoorsDropdown}
                          onMouseEnter={() => setShowEnterDoorsDropdown(true)}
                          onMouseLeave={() => setShowEnterDoorsDropdown(false)}
                        >
                          <NavDropdown.Item href="/enter-doors/aluminium">
                            דלתות כניסה אלומיניום
                          </NavDropdown.Item>
                          <NavDropdown.Item href="/enter-doors/glass">
                            דלתות כניסה זכוכית
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <NavDropdown
                          className="dropdown-toggle"
                          title="מערכות אינטרקום"
                          onToggle={() => toogleTo("/intercom")}
                          show={showInterkumDropdown}
                          onMouseEnter={() => setShowInterkumDropdown(true)}
                          onMouseLeave={() => setShowInterkumDropdown(false)}
                        >
                          <NavDropdown.Item href="/intercom">
                            עמודי נירוסטה לאינטרקום
                          </NavDropdown.Item>
                        </NavDropdown>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/about-us">
                          אודותינו
                        </Link>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/contact-us">
                          צור קשר
                        </Link>
                      </li>

                      <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                        <Link className="nav-link" href="/anfon-luxery">
                          אנפון Luxery
                        </Link>
                      </li>
                    </ul>
                  </div>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
