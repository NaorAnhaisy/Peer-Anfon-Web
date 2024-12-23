/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/intercom.module.css";
import ContactTeam from '../components/ContactTeam/ContactTeam';
import AOS from 'aos';
import Zoom from 'react-medium-image-zoom'

const classicIntercomImages = [
    { src: "/images/intercom/intercom-6.png", text: "I-201" },
    { src: "/images/intercom/intercom-5.jpg", text: "I-202" },
    { src: "/images/intercom/intercom-4.png", text: "I-203" },
    { src: "/images/intercom/intercom-3.png", text: "I-204" },
    { src: "/images/intercom/intercom-2.jpg", text: "I-205" },
    { src: "/images/intercom/intercom-1.png", text: "I-206" },
    { src: "/images/intercom/MKC.jpg", text: "I-207" },
    { src: "/images/intercom/intercom-12.jpg", text: "I-208" },
    { src: "/images/intercom/intercom-11.jpg", text: "I-209" },
    { src: "/images/intercom/intercom-10.jpg", text: "I-210" },
    { src: "/images/intercom/intercom-9.jpg", text: "I-211" },
    { src: "/images/intercom/intercom-8.jpg", text: "I-212" },
    { src: "/images/intercom/intercom-7.jpg", text: "I-213" },
    { src: "/images/intercom/C-90-Keypad.jpg", text: "I-214" },
    { src: "/images/intercom/CD-AV-1P.jpg", text: "I-215" },
    { src: "/images/intercom/CD-AV-4P.jpg", text: "I-216" },
    { src: "/images/intercom/intercom-13.jpg", text: "I-217" },
    { src: "/images/intercom/intercom-14.jpg", text: "I-218" },
    { src: "/images/intercom/intercom-15.jpg", text: "I-219" },
    { src: "/images/intercom/intercom-16.jpg", text: "I-220" },
];

const nerostaImages = [
    { src: "/images/intercom/R-455.jpg", text: "R-455" },
    { src: "/images/intercom/R-456.jpg", text: "R-456" },
    { src: "/images/intercom/R-456b.jpg", text: "R-456" },
    { src: "/images/intercom/R-457.jpg", text: "R-457" },
    { src: "/images/intercom/R-458.jpg", text: "R-458" },
];

export default function Intercom() {
    useEffect(() => {
        AOS.init({ once: true })
    }, []);

    return (
        <div>
            <Head>
                <title>פאר אנפון - מערכות אינטרקום</title>
            </Head>

            <Container className={styles.mainContainer}>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">מערכות אינטרקום</h1>
                </div>
                <div className="mb-5 separator"></div>
                <Row
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <Col xs={12} lg={6} className={styles.titleParagraph}>
                        <p>
                            חברת פאר אנפון מתמחה בייצור והתקנת מערכות אינטרקום. מערכות אינטרקום של חברתינו הינן מהמתקדמות בשוק ומתאפיינות בעיצוב החדשני, הטכנולוגייה המתקדמת וידידותיות למשתמש. המערכות שלנו מותאמות לצרכי השוק, מגיעות בשלל עיצובים שונים המאפשרים חופש בחירה רחב וכבר משמשות בהצלחה מרובה אלפי לקוחות מרוצים.
                        </p>
                    </Col>
                    <Col xs={12} lg={6}>
                        <img src="/images/automatic-doors/backgrounds/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                </Row>
                <Row className={`${styles.titleRowMargin} flex-dir-col-reverse-lg-screen`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <Col xs={12} lg={6}>
                        <img src="/images/automatic-doors/backgrounds/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                    <Col xs={12} lg={6} className={styles.titleParagraph}>
                        <p>
                            המבחר הגדול של מערכות אינטרקום שלנו מאפשר לנו מגוון רחב של פתרונות, ויכולת התאמה אישית לדרישות הלקוח. אנו לא מתפשרים על חומרי הגלם הטובים ביותר, הטכנולוגיות המתקדמות ביותר וגימור מוצר ברמה הגבוהה ביותר. כל מוצרי החברה מיוצרים בתקנים מחמירים של מכון התקנים.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.subTitleDiv} mb-5`} data-aos="zoom-in" data-aos-duration="700">
                <h3>מערכות אינטרקום מהמתקדמות בשוק​</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.gallery}>
                {classicIntercomImages?.map((image, i) => {
                    return <div key={i} data-aos="fade-up" data-aos-duration="700" className={styles.hoverImgContainer}>
                        <Zoom>
                            <img src={image.src} alt={`אינטרקום ${image.text}`}
                                style={{ width: "100%", objectFit: "cover" }} />
                        </Zoom>
                        <div className={styles.hoverImgMiddle}>
                            <div className={styles.hoverImgText}>{image.text}</div>
                        </div>
                    </div>
                })}
            </div>
            <div></div>
            <div id="עמודי-נירוסטה" className={`${styles.subTitleDiv} mb-5`} data-aos="zoom-in" data-aos-duration="700">
                <h3>עמודי נירוסטה לאינטרקום</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.nerostaGallery}>
                <Row style={{ rowGap: "3rem" }}>
                    {nerostaImages?.map((image, i) => {
                        return <Col key={i} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-duration="700">
                            <div className={styles.hoverImgContainer}>
                                <Zoom>
                                    <img src={image.src} alt={`עמוד נירוסטה אינטרקום ${image.text}`}
                                        style={{ width: "100%", objectFit: "cover" }} />
                                </Zoom>
                                <div className={styles.hoverImgMiddle}>
                                    <div className={styles.hoverImgText}>{image.text}</div>
                                </div>
                            </div>
                        </Col>
                    })}
                </Row>
            </div>
            <ContactTeam />
        </div>
    )
}