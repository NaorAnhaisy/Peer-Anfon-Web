/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import Head from 'next/head';
import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

export default function CollapseDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div>
            <Head>
                <title>פאר אנפון - דלת אוטומטית קורסת</title>
            </Head>

            <img src="/images/automatic-doors/backgrounds/collapse-automatic-door.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית קורסת" />
            <div className={styles.separatorModelHeaderImage} />
            <Container className={styles.doorSelectedContainer}>
                <div>
                    <Row className={styles.doorSelectedTitleRow}>
                        <Col lg={9} md={8} sm={8} xs={12} className={styles.doorSelectedNameDiv}>
                            <div className={styles.animatedTitle}>
                                <div className={styles.textTop}>
                                    <div>
                                        <span>דלת אוטומטית</span>
                                    </div>
                                </div>
                                <div className={styles.textBottom}>
                                    <div>קורסת</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={4} xs={12} style={{ alignSelf: 'center', padding: "50px" }}>
                            <div className={styles.arrowBackIconWrapper} onClick={() => router.push(`/דלתות-אוטומטיות`)}>
                                <div className={styles.arrowBackIcon}></div>
                                <span className={styles.arrowBackIconText}>לכל הדגמים</span>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={6} sm={12}
                            data-aos="zoom-out"
                            data-aos-delay="200"
                            data-aos-duration="1500">
                            <div className={`mt-5 ${styles.doorSelectedDoorDetails}`}>
                                <h6>היעדים</h6>
                                <p>
                                    דלתות אוטומטיות קורסות הן דלתות אשר במקרי חירום הן קורסות מהמנגנון ומאפשרות דחיפה מכנית ופתיחה של כל הכנפיים.
                                    דלתות אוטומטיות קורסות מתוכננות להתקנה במקומות בהם נדרש פתרון המשלב דלת אוטומטית ואפשרות מילוט ויציאה במקרה חירום כדוגמת: בתי חולים, מרכזים ציבוריים גדולים, קניונים ובנייני מגורים.
                                    פתח המילוט יהפוך לפתח רחב יותר מאשר דלת אוטומטית רגילה ויאפשר הימלטות של המוני אנשים ממקום הסכנה.
                                    במצבי חירום יש חשיבות מרובה לאפשר לאנשים רבים להימלט מהמבנה מהר ככל האפשר.                                 </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="flex-dir-row-reverse">
                        <Col lg={6} sm={12}>
                            <div className={`mt-5 mb-5 ${styles.doorSelectedDoorDetails}`}
                                data-aos="zoom-out"
                                data-aos-delay="500"
                                data-aos-duration="1500">
                                <h6>פתרון Peer Anfon</h6>
                                <p>
                                    דלתות קורסות הן אחד האמצעים המתקדמים המאפשרים להציל חיי אדם בעת מצבי חירום, ולכן במקומות הומי אדם יש לדאוג שדלת הכניסה הראשית תשמש גם כפתח מילוט בשעת אסון.
                                    במצבים רגילים פועלות הדלתות הקורסת כדלתות הזזה אוטומטיות לכל דבר ,וכך אפשר להנות משני אלמנטים בדלת אחת, דלת המעניקה כניסה יוקרתית ומרשימה בעלת רמת עיצוב ואיכות מהגבוהות ביותר המאפשרת פתרון יעיל למצבי חירום.
                                    קיימות אופציות מגוונות למערכת דלתות הקריסה: דלת בעלת כנף אחת, שתי כנפיים או ארבע כנפיים כאשר שתי כנפיים הן קבועות ושתי כנפיים זזות.
                                    אנו בחברת פאר אנפון מציעים מגוון דגמים לדלת אוטומטית קורסת על מסילה עילית בהתאם לתנאי השטח ולצרכיו של כל לקוח.
                                    כל המוצרים שלנו עומדים בדרישות של מכון התקנים הישראלי ובתקן האירופאי.
                                    הדלתות מקובלות על רשויות העוסקות בכיבוי אש המעניקות אישור לדלתות אוטומטיות קורסות המותקנות על ידנו.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                            <img
                                style={{ height: '50%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/Doors/LUX/example2.jpg"
                                alt="דלת אוטומטית קורסת"
                            />
                            <img
                                style={{ height: '50%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/Doors/LUX/example3.jpg"
                                alt="דלת אוטומטית קורסת"
                            />
                        </Col>
                        <Col sm={12} lg={6}>
                            <img
                                style={{ height: '100%' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/Doors/LUX/example4.jpg"
                                alt="דלת אוטומטית קורסת"
                            />
                        </Col>
                    </Row>
                </div>
            </Container>
            <ContactTeam />
        </div>
    );
}
