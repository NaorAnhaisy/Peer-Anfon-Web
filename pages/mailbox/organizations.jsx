/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/automatic-door-model.module.css";
import intercomStyles from "../../styles/intercom.module.css";
import { useEffect } from "react";
import AOS from 'aos';
import ContactTeam from '../../components/ContactTeam/ContactTeam';
import Zoom from 'react-medium-image-zoom'

const images = [
    { src: "/images/mailboxes/organizations/T-425.jpeg", text: "תיבות דואר מעוצבות" },
    { src: "/images/mailboxes/organizations/T-435.jpeg", text: "תיבות דואר בתוספת מנעולי כספת" },
    { src: "/images/mailboxes/organizations/T-426.jpeg", text: "תיבות דואר על צוקל" },
    { src: "/images/mailboxes/organizations/T-428.jpg", text: "תיבות דואר בעלת פתיחת כנף" },
    { src: "/images/mailboxes/organizations/T-428b.jpg", text: "תיבות דואר בעלת פתיחת כנף" },
    { src: "/images/mailboxes/organizations/T-434.jpeg", text: "תיבות דואר בעלת פתיחת כנף" },
    { src: "/images/mailboxes/organizations/T-431.jpeg", text: "תיבות דואר בתוך קיר מסך" },
    { src: "/images/mailboxes/organizations/T-430.jpeg", text: "תיבות דואר בתוך קיר מסך" },
    { src: "/images/mailboxes/organizations/T-432.jpg", text: "תיבות דואר על עמודי נירוסטה" },
    { src: "/images/mailboxes/organizations/T-433.jpg", text: "תיבת דואר בודדת" },
    { src: "/images/mailboxes/organizations/T-436.jpg", text: "תיבת דואר בודדת" },
    { src: "/images/mailboxes/organizations/T-439.jpg", text: "תיבות דואר בגוונים" },
];

export default function Organizations() {
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
                        <Zoom>
                            <img src={image.src}
                                alt={`תיבת דואר למוסדות ${image.text}`}
                                style={{ width: "100%", objectFit: "cover" }} />
                        </Zoom>
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
            <img src="/images/mailboxes/backgrounds/organizations.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="תיבות דואר למוסדות" />
            <div className={styles.separatorModelHeaderImage} />
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
                                    <div>למוסדות</div>
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
                                    כאשר מזמינים או מתכננים תיבות דואר למוסדות יש להתחשב בנוחיות של כל המשרדים ולתכננן את התיבות כך שכל התיבות יהיו נגישות לכל אחד,
                                    כלומר שלא יהיה מערכת תיבות גבוהה מידי כך שיהיה קשה להגיע אליהן ושלא יהיה מערכת תיבות נמוכה מידי כך שהמשתמש בהן יצטרך בכל פעם להתכופף בכדי לאסוף את הדואר שהגיע עבורו.
                                    כמובן שיש להתחשב במקום המוקצה לתיבות הדואר בכניסה לבניין אבל מומלץ לבחור מתקן שבו תיבות הדואר מוגבהות על עמודים או בגובה סביר מהקרקע.
                                    מה צריך לקחת בחשבון כשמזמינים תיבות דואר למוסדות ?
                                    מוסדות גדולים שבהם מספר רב של משרדים חייבים תיבות דואר,
                                    ובדרך כלל לכל משרד או בית עסק הממוקם במוסד יש תיבת דואר פרטית משלו.
                                    כשבאים להזמין תיבות דואר למוסד גדול ישנם מספר דברים שיש לתת עליהם את הדעת. ריכזנו עבורכם את עיקרי הדברים:
                                </p>
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
                                    גודלן ועומקן של התיבות :
                                    <br />
                                    ראשית כל, גודל ועומק התיבות.
                                    דואר שמגיע למוסד הוא לא כמו דואר שמגיע לבית פרטי או אפילו לעסק קטן.
                                    למוסד בדרך כלל מגיעים בכל יום מספר רב של מכתבים בגדלים שונים, עלונים, עיתונים מקצועיים ועוד.
                                    לכן, כשמזמינים תיבות דואר למוסדות יש לקחת זאת בחשבון ולבנות או להזמין תיבות דואר גדולות מהרגיל ועמוקות מהרגיל.
                                    זאת בכדי למנוע מדברי דואר שמגיעים למשרדים השונים בבניין או במוסד,
                                    לגלוש מהתיבה או לחזור אל השולח.
                                    <br />
                                    <br />
                                    החומר ממנו עשויות תיבות דואר למוסדות:
                                    <br />
                                    במוסדות גדולים בדרך כלל ישנם הרבה משרדים ואם לכל משרד יש תיבת דואר פרטית,
                                    משמע תיבות הדואר נמצאות בשימוש יום יומי ולעיתים אפילו נפתחות יותר מפעם ביום.
                                    בגלל העובדה שתיבות דואר למוסדות נמצאות בשימוש תדיר,
                                    הבלאי שלהן גדול יותר בהשוואה לתיבות בבתים פרטיים.
                                    לכן במקרה של תיבות דואר למוסדות יש חשיבות גדולה יותר לבנות את תיבות הדואר מחומר קשיח ועמיד במיוחד כך שלא תצטרכו להחליף את התיבות לעיתים קרובות.
                                    יש להקפיד גם על מנעולים איכותיים בתיבות עצמן כך שלא תצטרכו להחליף את המנעולים של התיבות בגלל בלאי מוגבר.
                                    <br />
                                    <br />
                                    בפנינו מבחר עשיר ומגוון של דוגמאות של תיבות דואר למוסדות.
                                    כמו כן, אנו יכולים לייצר בשבילכם את מערכת תיבות הדואר המתאימה לכם לפי דרישתכם וטעמכם.
                                    את התיבה ניתן לייצר בכל מידה ובכלל גוון לפי דרישת הלקוח
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
