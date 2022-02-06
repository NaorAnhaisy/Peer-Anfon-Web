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
    { src: "/images/mailboxes/mailbox-rooms/R-001.jpeg", text: "חיפוי קיר תיבות דואר בגוון זהב" },
    { src: "/images/mailboxes/mailbox-rooms/R-002.jpeg", text: "חיפוי קיר תיבות דואר בגוון זהב" },
];

export default function MailboxRooms() {
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
                                alt={`חדרי תיבות דואר ${image.text}`}
                                style={{ height: "400px", width: "100%", objectFit: "cover" }} />
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
            <img src="/images/mailboxes/backgrounds/mailbox-rooms.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="חדרי תיבות דואר" />
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
                                    <div>חדרי תיבות דואר</div>
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
                                    חדרי תיבות דואר נותנות מענה אולטימטיבי למגדלי מגורים, בנייני משרדים, מוסדות וכו&apos;.
                                    חלק מתיבות הדואר אינן משמשות לפתיחת תיבת הדואר, אלה לשם חיפוי כל הקיר המעניק תחושה יוקרתית ומודרנית לחלל. לתיבת הדואר יש השפעה רבה על עיצובו של הבניין והלובי בפרט.
                                    לכן כדאי להשקיע בתיבות דואר מעוצבות שיוכלו להוסיף למראה הייחודי של לובי הבניין.
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
                                    חברתנו מעניקה שירות של יצור, הובלה והתקנה של מערכות תיבות דואר לפרויקטים הגדולים ביותר בארץ וכן תשמח לייצר בשבילכם את מערכות תיבות הדואר המתאימה לכם לפי דרישתכם וטעמכם.
                                    את מערכות תיבות הדואר ניתן לייצר בכל מידה ובכלל גוון לפי דרישת הלקוח.                                </p>
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
