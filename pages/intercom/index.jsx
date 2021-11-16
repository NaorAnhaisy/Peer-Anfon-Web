/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import styles from "../../styles/intercom.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

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
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
    { src: "/images/intercom/nerosta-1.jpg", text: "I-201" },
];

export default function Intercom() {
    useEffect(() => {
        AOS.init({ once: true })
    }, []);

    return (
        <div>
            <Container className={styles.mainContainer}>
                <div className={`${styles.titleDiv} mb-5`}>
                    <h1>מערכות אינטרקום</h1>
                    <div className="mt-3 mb-4 separator"></div>
                </div>
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
                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                </Row>
                <Row className={`${styles.titleRowMargin} ${styles.reverseOnLgScreen}`}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-delay="200"
                    data-aos-duration="1500">
                    <Col xs={12} lg={6}>
                        <img src="/images/automatic-doors/double-leaf-automatic-door.jpg" className={styles.titleIntercomImg} alt="מערכות אינטרקום" />
                    </Col>
                    <Col xs={12} lg={6} className={styles.titleParagraph}>
                        <p>
                            המבחר הגדול של מערכות אינטרקום שלנו מאפשר לנו מגוון רחב של פתרונות, ויכולת התאמה אישית לדרישות הלקוח. אנו לא מתפשרים על חומרי הגלם הטובים ביותר, הטכנולוגיות המתקדמות ביותר וגימור מוצר ברמה הגבוהה ביותר. כל מוצרי החברה מיוצרים בתקנים מחמירים של מכון התקנים.
                        </p>
                    </Col>
                </Row>
            </Container>
            <div className={`${styles.subTitleDiv} mb-5`} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
                <h3>מערכות אינטרקום מהמתקדמות בשוק​</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.gallery}>
                {classicIntercomImages?.map((image, i) => {
                    return <div key={i} data-aos="fade-up" data-aos-offset="200" data-aos-duration="700" className={styles.hoverImgContainer}>
                        <img src={image.src} alt={`אינטרקום ${i + 1}`} />
                        <div className={styles.hoverImgMiddle}>
                            <div className={styles.hoverImgText}>{image.text}</div>
                        </div>
                    </div>
                })}
            </div>
            <div className={`${styles.subTitleDiv} mb-5`} data-aos="zoom-in" data-aos-offset="200" data-aos-duration="700">
                <h3>עמודי נירוסטה לאינטרקום</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.nerostaGallery}>
                <Row style={{ rowGap: "3rem" }}>
                    {nerostaImages?.map((image, i) => {
                        return <Col key={i} xs={12} md={6} lg={4} data-aos="fade-up" data-aos-offset="200" data-aos-duration="700">
                            <div className={styles.hoverImgContainer}>
                                <img src={image.src} alt={`עמוד נירוסטה אינטרקום ${i + 1}`} />
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