/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import intercomStyles from "../../styles/intercom.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';

const images = [
    { src: "/images/mailboxes/shared-houses/T-401.jpeg", text: "תיבות דואר ללא קלפה עם מספרים מובלטים" },
    { src: "/images/mailboxes/shared-houses/T-408.jpeg", text: "תיבות דואר בתוספת מספרים מובלטים" },
    { src: "/images/mailboxes/shared-houses/T-407.jpg", text: "תיבות דואר בתוספת שילוט בחריטת לייזר" },
    { src: "/images/mailboxes/shared-houses/T-405.jpeg", text: "תיבות דואר בתוך ויטרינה" },
    { src: "/images/mailboxes/shared-houses/T-425.jpeg", text: "תאים נפרדים על מדפי עץ" },
    { src: "/images/mailboxes/shared-houses/T-404.jpg", text: "תיבות דואר בתוך קיר" },
    { src: "/images/mailboxes/shared-houses/T-432.jpeg", text: "מערכת תיבות דואר על קיר" },
    { src: "/images/mailboxes/shared-houses/T-409.jpg", text: "תיבות דואר בתוך מסגרת ממתכת" },
    { src: "/images/mailboxes/shared-houses/T-406.jpg", text: "תיבות דואר הכוללות שני שילוטים" },
    { src: "/images/mailboxes/shared-houses/T-412.jpeg", text: "תיבות דואר על קיר בתוספת שילוט מפרספקס" },
    { src: "/images/mailboxes/shared-houses/T-413.jpeg", text: "מערכות תיבות דואר על קיר" },
    { src: "/images/mailboxes/shared-houses/T-411.jpeg", text: "תיבות דואר בתוספת לוגו" },
    { src: "/images/mailboxes/shared-houses/T-410.jpeg", text: "תיבות דואר על עמוד מרובע" },
    { src: "/images/mailboxes/shared-houses/T-445.jpeg", text: "תיבת דואר על קיר בשילוט פרספקס" },
    { src: "/images/mailboxes/shared-houses/T-437.jpeg", text: "תיבת דואר על שני עמודים מעוגלים" },
    { src: "/images/mailboxes/shared-houses/T-402.jpg", text: "תיבת דואר צרה" },
    { src: "/images/mailboxes/shared-houses/T-442.jpeg", text: "תיבת דואר בתוספת שילוט פרסקפס" },
    { src: "/images/mailboxes/shared-houses/T-439.jpeg", text: "תיבת דואר על קיר בגוון כסוף אנודייז" },
    { src: "/images/mailboxes/shared-houses/T-403.jpg", text: "תיבות דואר עם גגון" },
    { src: "/images/mailboxes/shared-houses/T-427.jpeg", text: "תיבת דואר מונחת על סטנד" },
    { src: "/images/mailboxes/shared-houses/T-436.jpeg", text: "תיבת דואר צרה" },
    { src: "/images/mailboxes/shared-houses/T-440.jpeg", text: "תיבת דואר על קיר" },
    { src: "/images/mailboxes/shared-houses/T-431.jpeg", text: "תיבות דואר על קיר" },
    { src: "/images/mailboxes/shared-houses/T-443.jpeg", text: "תיבת דואר בתוך ויטרינה" },
    { src: "/images/mailboxes/shared-houses/T-448.jpeg", text: "תיבת דואר על קיר בגוון ברונזה" },
    { src: "/images/mailboxes/shared-houses/T-441.jpeg", text: "תיבת דואר על שני עמודים מעוגלים עם חריטת כתובת" },
    { src: "/images/mailboxes/shared-houses/T-430.jpeg", text: "תיבות דואר על שני עמודים מעוגלים" },
    { src: "/images/mailboxes/shared-houses/T-444.jpeg", text: "תיבת דואר על קיר" },

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
                        <img src={image.src} alt={`תיבת דואר לבתים משותפים ${image.text}`} style={{ height: "400px", width: "100%", objectFit: "cover" }} />
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
            <img src="/images/mailboxes/shared-houses/background.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="תיבות דואר לבתים משותפים" />
            <Container className={`custom-size-container ${styles.doorSelectedContainer}`}>
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
                            <div className={styles.arrowBackIconWrapper} onClick={() => router.push(`/תיבות-דואר`)}>
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
                                    לשטחים הציבוריים של המבנה ישנה השפעה משמעותית על התדמית של הגרים בו.
                                    הדבר בא לידי ביטוי ברחבת הכניסה, בגינה או בלובי של הבניין וכמובן שגם בתיבות הדואר של הבית המשותף שמקדמות את פניהם של דיירי המבנה והאורחים שלהם מהוות חלק מהותי בחזות כניסת הבניין.
                                    בימינו תיבות הדואר מהוות סוג של רהיט עיצובי בחזות הלובי וכן משפרות את המראה הכללי של החלל.
                                    למרות שבאופן עקרוני כל אחד יכול לעצב את תיבות הדואר לפי כראות עיניו.
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
                                    במידה ואתם מתגוררים בבית משותף ומעוניינים לשדרג את החזות שלו בצורה משמעותית אנו מזמינים אתכם לחשוב על האפשרות של חידוש תיבות הדואר לתיבות מודרניות וחדישות ביותר.
                                    זה בדיוק הזמן המתאים להחליף את תיבות הדואר בבית המשותף, בפנינו מבחר רחב הקף של דוגמאות של תיבות דואר לבניינים משותפים כמו כן, חברתנו תשמח לייצר בשבילכם את תיבת הדואר המתאימה לכם לפי דרישתכם וטעמכם.
                                    את התיבה ניתן לייצר בכל מידה ובכלל גוון לפי דרישת הלקוח.
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
