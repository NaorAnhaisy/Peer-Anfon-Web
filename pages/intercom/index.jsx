/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import styles from "../../styles/intercom.module.css";
import { Container, Row, Col } from "react-bootstrap";
import AOS from 'aos';

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
        </div>
    )
}