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
    { src: "/images/mailboxes/deposit-cellphones/Y-1.jpg", text: "ארון הפקדה לטלפונים סלולריים כולל כבל הטענה" },
    { src: "/images/mailboxes/deposit-cellphones/Y-2.jpg", text: "ארון הפקדה לטלפונים סלולריים כולל כבל הטענה" },
    { src: "/images/mailboxes/deposit-cellphones/Y-3.jpg", text: "ארון הפקדה לטלפונים סלולריים" },
    { src: "/images/mailboxes/deposit-cellphones/Y-5.jpeg", text: "ארון הפקדה לטלפונים סלולריים" },
    { src: "/images/mailboxes/deposit-cellphones/Y-6.jpeg", text: "ארון הפקדה לטלפונים סלולריים" },
];

export default function DepositCellphones() {
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
                                alt={`ארון הפקדה לטלפונים סלולריים ${image.text}`}
                                style={{ height: "auto", maxHeight: "500px", minHeight: "300px", width: "100%", objectFit: "cover" }} />
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
            <img src="/images/mailboxes/deposit-cellphones/Y-6.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="ארון הפקדה לטלפונים סלולריים" />
            <Container className={`custom-size-container ${styles.doorSelectedContainer}`}>
                <div>
                    <Row className={styles.doorSelectedTitleRow}>
                        <Col lg={9} md={8} sm={8} xs={12} className={styles.doorSelectedNameDiv}>
                            <div className={styles.animatedTitle}>
                                <div className={styles.textTop}>
                                    <div>
                                        <span>ארון הפקדה</span>
                                    </div>
                                </div>
                                <div className={styles.textBottom}>
                                    <div>לטלפונים סלולריים</div>
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
                                    ארונות הפקדה לטלפונים סלולריים מותאמים אישית לפי דרישת צרכי הלקוח, מוגנים ונטענים.
                                    תאים לטלפונים סלולריים מאפשרים לארגונים ביטחוניים, משרדי ממשלה, ארגונים חשאיים, אוניברסיטאות ושאר הארגונים פתרון חכם,
                                    יעיל ומתקדם המותאם להם באופן אישי לצרכיהם.
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
                                    תאי האחסון יכולים לכלול בתוכם את כל סוגי המטענים לטלפונים הסלולריים,
                                    הטוען את המכשיר בזמן שהייתו בתא.
                                    המוצר קל לתלייה עצמית וכל תא ננעל ע&quot;י מפתח המאפשר אבטחה ושמירה על המכשירים המאוחסנים.
                                    חברתנו תשמח לייצר עבורכם את ארון ההפקדה המתאים לכם לפי דרישתכם וטעמכם.
                                    את הארון ההפקדה ניתן לייצר בכל מידה ובכלל גוון לפי דרישת הלקוח.
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
