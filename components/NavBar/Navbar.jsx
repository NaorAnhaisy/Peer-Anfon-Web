import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Row, Col, Container, NavDropdown, Navbar } from 'react-bootstrap';
import Link from 'next/link';

export default function MainNavbar() {
    const [showAutoDoorsDropdown, setShowAutoDoorsDropdown] = useState(false);
    const [showMailBoxDropdown, setShowMailBoxDropdown] = useState(false);
    const [showEnterDoorsDropdown, setShowEnterDoorsDropdown] = useState(false);
    const [showInterkumDropdown, setShowInterkumDropdown] = useState(false);
    const [navbarScrolledCls, setNavbarScrolledCls] = useState('start-style');

    const handleWindowScrolled = () => {
        var scroll = window.scrollY;
        if (scroll >= 30) {
            setNavbarScrolledCls('scroll-on');
        } else {
            setNavbarScrolledCls('start-style');
        }
    };

    useEffect(() => {
        document.addEventListener("scroll", handleWindowScrolled);
        return () => {
            document.removeEventListener("scroll", handleWindowScrolled);
        }
    }, [])

    return (
        <div className={styles.navbar}>
            <div className={`${styles.navigationWrap} ${styles.startHeader} ${navbarScrolledCls}`}>
                <Container className={styles.navbarContainer}>
                    <Row>
                        <Col sm={12}>
                            <Navbar className={`${styles.navbar} navbar-expand-xxl`} expand="xxl">
                                <span className={styles.navbarBrand}>
                                    <Image src="/images/company-logo.png" className="undragablle-image" width={10} height={3} layout="responsive" alt="" />
                                </span>

                                <Navbar.Toggle className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </Navbar.Toggle>

                                <Navbar.Collapse id="navbarSupportedContent">
                                    <div className="collapse navbar-collapse show" id="navbarSupportedContent">
                                        <ul className="navbar-nav ml-auto py-4 py-md-0">

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4 active-navbar">
                                                <Link className="nav-link" href="/">בית</Link>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <NavDropdown
                                                    className="dropdown-toggle"
                                                    title="דלתות אוטומטיות"
                                                    href="https://doors.com"
                                                    show={showAutoDoorsDropdown}
                                                    // onClick={() => history.push('/automatic-doores')}
                                                    onMouseEnter={() => setShowAutoDoorsDropdown(true)}
                                                    onMouseLeave={() => setShowAutoDoorsDropdown(false)}>
                                                    <NavDropdown.Item href="/automatic-doores/double-leaf">אוטמטית הזזה דו-כנף</NavDropdown.Item>
                                                    <NavDropdown.Item href="/automatic-doores/single-leaf">אוטומטית הזזה חד-כנף</NavDropdown.Item>
                                                    <NavDropdown.Item href="/automatic-doores/telescop">אוטומטית טלסקופית</NavDropdown.Item>
                                                    <NavDropdown.Item href="/automatic-doores/crashed">אוטומטית קורסת</NavDropdown.Item>
                                                    <NavDropdown.Item href="/automatic-doores/inside">דלתות פנים אוטומטיות</NavDropdown.Item>
                                                </NavDropdown>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <NavDropdown
                                                    className="dropdown-toggle"
                                                    title="תיבות דואר"
                                                    show={showMailBoxDropdown}
                                                    onMouseEnter={() => setShowMailBoxDropdown(true)}
                                                    onMouseLeave={() => setShowMailBoxDropdown(false)}>
                                                    <NavDropdown.Item href="#action/3.1">תיבות דואר לבתים משותפים</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">תיבות דואר למוסדות</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">תיבות דואר לבתים פרטיים</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">חדרי תיבות דואר</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">ארון הפקדה לטלפונים סלולריים</NavDropdown.Item>
                                                    {/* <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4">משהו אחר</NavDropdown.Item> */}
                                                </NavDropdown>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <a className="nav-link" href="https://example.com">מעברים מהירים</a>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <NavDropdown
                                                    className="dropdown-toggle"
                                                    title="דלתות כניסה"
                                                    show={showEnterDoorsDropdown}
                                                    onMouseEnter={() => setShowEnterDoorsDropdown(true)}
                                                    onMouseLeave={() => setShowEnterDoorsDropdown(false)}>
                                                    <NavDropdown.Item href="#action/3.1">דלתות כניסה אלומיניום</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.1">דלתות כניסה זכוכית</NavDropdown.Item>
                                                </NavDropdown>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <NavDropdown
                                                    className="dropdown-toggle"
                                                    title="מערכות אינטרקום"
                                                    show={showInterkumDropdown}
                                                    onMouseEnter={() => setShowInterkumDropdown(true)}
                                                    onMouseLeave={() => setShowInterkumDropdown(false)}>
                                                    <NavDropdown.Item href="#action/3.1">עמודי נירוסטה לאינטרקום</NavDropdown.Item>
                                                </NavDropdown>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" href="/about-us">אודותינו</Link>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" href="/contact-us">צור קשר</Link>
                                            </li>

                                            <li className="nav-item pl-4 pl-md-0 ml-0 ml-md-4">
                                                <Link className="nav-link" href="/contact-us">אנפון Luxery</Link>
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