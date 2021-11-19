/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import intercomStyles from "../../styles/intercom.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

const images = [
    { src: "/images/mailboxes/shared-houses/T-401.jpeg", text: "T-401" },
    { src: "/images/mailboxes/shared-houses/T-402.jpg", text: "T-402" },
    { src: "/images/mailboxes/shared-houses/T-403.jpg", text: "T-403" },
    { src: "/images/mailboxes/shared-houses/T-404.jpg", text: "T-404" },
    { src: "/images/mailboxes/shared-houses/T-405.jpeg", text: "T-405" },
    { src: "/images/mailboxes/shared-houses/T-406.jpg", text: "T-406" },
    { src: "/images/mailboxes/shared-houses/T-407.jpg", text: "T-407" },
    { src: "/images/mailboxes/shared-houses/T-408.jpeg", text: "T-408" },
    { src: "/images/mailboxes/shared-houses/T-409.jpg", text: "T-409" },
    { src: "/images/mailboxes/shared-houses/T-410.jpeg", text: "T-410" },
    { src: "/images/mailboxes/shared-houses/T-411.jpeg", text: "T-411" },
    { src: "/images/mailboxes/shared-houses/T-412.jpeg", text: "T-412" },
    { src: "/images/mailboxes/shared-houses/T-413.jpeg", text: "T-413" },
    { src: "/images/mailboxes/shared-houses/T-417.jpg", text: "T-417" },
    { src: "/images/mailboxes/shared-houses/T-418.jpeg", text: "T-418" },
    { src: "/images/mailboxes/shared-houses/T-419.jpg", text: "T-419" },
    { src: "/images/mailboxes/shared-houses/T-420.jpg", text: "T-420" },
    { src: "/images/mailboxes/shared-houses/T-421.jpg", text: "T-421" },
    { src: "/images/mailboxes/shared-houses/T-422.jpg", text: "T-422" },
    { src: "/images/mailboxes/shared-houses/T-423.jpg", text: "T-423" },
    { src: "/images/mailboxes/shared-houses/T-424.jpg", text: "T-424" },
];

export default function SharedHouses() {
    const router = useRouter();

    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    function createImagesGallery() {
        return images.map((image, index) => {
            return (
                <Col key={index} sm={12} md={4}>
                    <div

                    data-aos={index % 3 === 0 ? "fade-left" : index % 3 === 1 ? "fade-up" : "fade-right"}
                        data-aos-offset="200"
                        data-aos-duration="700"
                        className={intercomStyles.hoverImgContainer}>
                        <img src={image.src} alt={`תיבת דואר לבתים משותפים ${index + 1}`} style={{ height: "300px", width: "100%", objectFit: "cover" }} />
                        <div className={intercomStyles.hoverImgMiddle}>
                            <div className={intercomStyles.hoverImgText}>{image.text}</div>
                        </div>
                    </div>
                </Col>
            );
        });
    }

    return (
        <div>
            <img src="/images/automatic-doors/collapse-automatic-door.jpeg" className={styles.doorSelectedMainDiv} alt="תיבות דואר לבתים משותפים" />
            <Container className={styles.doorSelectedContainer}>
                <div>
                    <Row className={styles.doorSelectedTitleRow}>
                        <Col lg={9} md={8} sm={8} xs={12} className={styles.doorSelectedNameDiv}>
                            <div className={styles.animatedTitle}>
                                <div className={styles.textTop}>
                                    <div>
                                        <span>תיבות דואר</span>
                                    </div>
                                </div>
                                <div className={styles.textBottom}>
                                    <div>לבתים משותפים</div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={3} md={4} sm={4} xs={12} style={{ alignSelf: 'center', padding: "50px" }}>
                            <div className={styles.arrowBackIconWrapper} onClick={() => router.back()}>
                                <div className={styles.arrowBackIcon}></div>
                                <span className={styles.arrowBackIconText}>חזור</span>
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
                                    הלקוח שלנו הגיע אלינו בחיפוש אחר דלתות המשלימות את הארכיטקטורה
                                    המדהימה ואת אומנות הבית החדש. לאחר שבחרנו במגוון דלתות האלון
                                    המדהימה ואת אומנות הבית החדש. לאחר שבחרנו במגוון דלתות האלון
                                    הטבעי Vario 6 שלנו, תערובת של עלים בודדים וכפולים, כולם בהתאמה
                                    אישית ומיוצרים לפי מידה, התבקשנו לעצב דלת כניסה בהתאמה אישית.
                                    אבטחה ותכונות בטיחות בעלות ביצועים גבוהים היו דרישות מפתח עבור
                                    הלקוח שלנו.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className="reverse-flex-direction">
                        <Col lg={6} sm={12}>
                            <div className={`mt-5 mb-5 ${styles.doorSelectedDoorDetails}`}
                                data-aos="zoom-out"
                                data-aos-delay="500"
                                data-aos-duration="1500">
                                <h6>פתרון Peer Anfon</h6>
                                <p>
                                    הדף הכפול Vario 6 הותקן בחלקו האחורי של פרוזדור הכניסה הראשית,
                                    עם שתי דלתות עלים בודדות נוספות משני הצדדים. דלתות פנימיות
                                    Vario 6 שלנו כוללות תכונות פרימיום כסטנדרט, המספקות אבטחה
                                    נוספת בעיצוב איכותי. משקופים ואדריכלים תואמים עשויים מאותו עץ
                                    כדי להבטיח עיצוב עקבי בהתאמה אישית מלאה. אטם הדלת הגמיש מונע
                                    טריקות וטיחות, בעוד הצירים הנסתרים ותפס הדלת המגנטית משפרים את
                                    האבטחה ושומרים על עיצוב מינימלי. שלוש הדלתות המותקנות במסדרון
                                    משלימות את עיצוב הבית תוך הוספת נופך של תחכום למסגרת המסדרון.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row className={`${intercomStyles.nerostaGallery} ${intercomStyles.galleryGap}`}>
                        {createImagesGallery(images)}
                    </Row>
                </div>
            </Container>
            <ContactTeam />
        </div>
    );
}
