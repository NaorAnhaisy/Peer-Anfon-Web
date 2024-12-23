/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useEffect } from 'react';
import styles from '../styles/contact-us.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import ContactUsForm from '../components/ContactUsForm/ContactUsForm';
import MyMapComponent from '../components/MyMapComponent/MyMapComponent';

export default function ContactUs() {

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <>
            <Head>
                <title>פאר אנפון - צור קשר</title>
            </Head>

            <div className="push-from-navbar"></div>
            <Container className="mt-5">
                <div className="mb-5 page-title">
                    <h1 className="text-shine">דברו איתנו</h1>
                </div>
                <div className="mb-5 separator"></div>
                <p className="page-subtitle">לקבלת הצעת מחיר, לקבלת יעוץ או לדבר על דרישותיכם, נשמח לשמוע מכם. מלאו את הטופס למטה ונהיה בקשר.</p>
                <Container className={styles.contactUsFormContainer}>
                    <div>
                        <div className={styles.contactUsPageDiv}>
                            <div className={styles.contactUsPageImgDiv}>
                                <img alt="צור קשר פאר אנפון" src="/images/backgrounds/contact-us.jpeg" />
                            </div>
                            <div className={styles.contactUsPageForm}>
                                <ContactUsForm />
                            </div>
                        </div>
                    </div>

                </Container>
            </Container>
            <MyMapComponent />
            <Container className={styles.contactUsContactInfoContainer}>
                <Row className={styles.contactUsContactInfoRow}>
                    <Col sm={12} md={6} lg={3} className={styles.contactUsContactInfoHrefsCol}>
                        <h6>צרו קשר</h6>
                        <span><a href="tel:0723712701" className="no-href-css"><i className="fas fa-phone" aria-hidden="true" /> טלפון: 072-371-2701</a></span>
                        <span className="mt-2"><a href="https://wa.me/+97235505624" target="_blank" rel="noreferrer noopener" className="no-href-css"><i className="fab fa-whatsapp" aria-hidden="true" /> ווצאפ: +972-35505624</a></span>
                        <span className="mt-2"><a href="mailto:info@8peer.co.il" className="no-href-css"><i className="far fa-envelope" aria-hidden="true" /> דוא&quot;ל: info@8peer.co.il</a></span>
                        <span className="mt-2"><i className="fas fa-fax" aria-hidden="true" /> פקס: 03-5568117</span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>כתובת</h6>
                        <a target="_blank" rel="noreferrer noopener"
                            href="https://www.waze.com/ul?q=%D7%94%D7%A1%D7%93%D7%A0%D7%90+13+%D7%97%D7%95%D7%9C%D7%95%D7%9F&navigate=yes" className="no-href-css">
                            הסדנא 13
                            <br />
                            חולון, אזור התעשייה 5881407
                        </a>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>שעות פתיחה</h6>
                        <span>ראשון - חמישי: 8:00 - 16:00</span>
                        <br />
                        <span>שישי: 8:00 - 12:00</span>
                        <br />
                        <span>שבת: סגור</span>
                    </Col>
                    <Col sm={12} md={6} lg={3}>
                        <h6>עקבו אחרינו</h6>
                        <div className={styles.socialsContactUs}>
                            <ul className={styles.socials}>
                                <li>
                                    <a href="https://www.facebook.com/8peer.co.il/" target="_blank" rel="noopener noreferrer">
                                        <i className={`${styles.zmdi} ${styles.zmdiFacebook} zmdi zmdi-facebook`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/info8peer.co.il/" target="_blank" rel="noopener noreferrer">
                                        <i className={`${styles.zmdi} ${styles.zmdiInstagram} zmdi zmdi-instagram`}></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                                        <i className={`${styles.zmdi} ${styles.zmdiYoutubePlay} zmdi zmdi-youtube-play`}></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}