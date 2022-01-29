/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css"
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

export default function TelescopDoor() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
        // document.getElementById('telescop-door-video').play();
    }, []);

    return (
        <div>
            <img src="/images/automatic-doors/backgrounds/telescop-automatic-door.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="דלת אוטומטית טלסקופית" />
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
                                    <div>טלסקופית</div>
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
                                    דלת אוטומטית טלסקופית היא דלת הזזה אוטומטית הכוללת שתי דלתות הזזה הנפתחות במקביל זו אחרי זו לאותו הכיוון.
                                    דלתות טלסקופיות הן דלתות הזזה חשמליות המותקנות במקומות שבהם יש מגבלה של ניצול מקסימלי של רוחב הפתח, מגבלה שאינה מאפשרת את גרירת כנפי הדלת לצדדים ולכן הדלת הטלסקופית מהווה פתרון מושלם עבור חללים בהם מרווח הפתח הוא מצומצם או שדרוש מעבר רחב במיוחד.                                 </p>
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
                                המערכת מתוכננת לשימוש הן עבור דלת אוטומטית טלסקופית בעלת 4 כנפיים הנפתחות מהמרכז לצדדים, והן עבור דלת אוטומטית טלסקופית בעלת 2 כנפיים הנפתחות לצד אחד.
                                הדלתות הטלסקופיות הן דלתות בטיחותיות המאופיינות בעיצוב יוקרתי, בתנועה שקטה מאוד , המספקת פתיחה חלקה ומהירה ובביצועים אמינים העומדת בכל התקנים האירופאיים הדרושים.                                                                                                      חברתנו מספקת מגוון רחב היקף של דלתות אוטומטיות טלסקופיות ברמת ביצוע וגימור מן הגבוהות ביותר.                                </p>
                            </div>
                        </Col>
                    </Row>

                    {/* <Row className="mt-5 mb-5">
                        <div className="mb-5">
                            <video autoPlay loop playsInline muted id="telescop-door-video" className={styles.automaticDoorVideo}>
                                <source src="https://d2na49kk21qo66.cloudfront.net/Deuren-Internal-Video-Low-Res.mp4"
                                    type="video/mp4" />
                            </video>
                        </div>
                    </Row> */}

                    <Row>
                        <Col sm={12} lg={6} className={styles.doorSelectedHorizontalImages}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/telescop-door/telescop-2.jpeg"
                                alt="דלת אוטומטית טלסקופית"
                            />
                        </Col>
                        <Col sm={12} lg={6}>
                            <img
                                style={{ height: '100%', maxHeight: '800px' }}
                                className={styles.doorSelectedDetailsExampleImg}
                                data-aos="fade-zoom-in"
                                data-aos-duration="700"
                                src="/images/automatic-doors/telescop-door/telescop-1.jpeg"
                                alt="דלת אוטומטית טלסקופית"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <img
                            style={{ height: '100%', maxHeight: '1000px' }}
                            className={styles.doorSelectedDetailsExampleImg}
                            data-aos="fade-zoom-in"
                            data-aos-duration="700"
                            src="/images/automatic-doors/telescop-door/telescop-3.jpeg"
                            alt="דלת אוטומטית טלסקופית"
                        />
                    </Row>
                </div>
            </Container>

            <ContactTeam />
        </div>
    );
}
