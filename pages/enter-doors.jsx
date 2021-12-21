/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import styles from "../styles/intercom.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';
import ContactTeam from '../components/ContactTeam/ContactTeam';

const enterDoorsImages = [
    { src: "/images/enter-doors/A-301.jpg", text: "A-301" },
    { src: "/images/enter-doors/A-302.jpg", text: "A-302" },
    { src: "/images/enter-doors/A-303.jpg", text: "A-303" },
    { src: "/images/enter-doors/A-304.jpg", text: "A-304" },
    { src: "/images/enter-doors/A-305.jpg", text: "A-305" },
    { src: "/images/enter-doors/A-306.jpg", text: "A-306" },
    { src: "/images/enter-doors/A-307.jpg", text: "A-307" },
    { src: "/images/enter-doors/A-308.jpg", text: "A-308" },
    { src: "/images/enter-doors/A-309.jpg", text: "A-309" },
    { src: "/images/enter-doors/A-310.jpg", text: "A-310" },
    { src: "/images/enter-doors/A-311.jpg", text: "A-311" },
    { src: "/images/enter-doors/A-312.jpg", text: "A-312" },
    { src: "/images/enter-doors/A-313.jpg", text: "A-313" },
    { src: "/images/enter-doors/A-314.jpg", text: "A-314" },
    { src: "/images/enter-doors/A-315.jpg", text: "A-315" },
    { src: "/images/enter-doors/A-316.jpg", text: "A-316" },
    { src: "/images/enter-doors/A-317.jpg", text: "A-317" },
];

export default function EnterDoors() {
    useEffect(() => {
        AOS.init({ once: true })
    }, []);

    return (
        <div>
            <Container className={styles.mainContainer}>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">דלתות כניסה</h1>
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
                <h3>דלתות כניסה אלומיניום</h3>
                <h5>מה אנחנו מציעים?</h5>
            </div>
            <div className={styles.nerostaGallery}>
                <Row style={{ rowGap: "3rem" }}>
                    {enterDoorsImages?.map((image, i) => {
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