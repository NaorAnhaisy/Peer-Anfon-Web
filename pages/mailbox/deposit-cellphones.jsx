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
    { src: "/images/mailboxes/organizations/T-425.jpeg", text: "T-425" },
    { src: "/images/mailboxes/organizations/T-426.jpg", text: "T-426" },
    { src: "/images/mailboxes/organizations/T-427.jpg", text: "T-427" },
    { src: "/images/mailboxes/organizations/T-428.jpg", text: "T-428" },
    { src: "/images/mailboxes/organizations/T-428b.jpg", text: "T-428" },
    { src: "/images/mailboxes/organizations/T-429.jpg", text: "T-429" },
    { src: "/images/mailboxes/organizations/T-430.jpeg", text: "T-430" },
    { src: "/images/mailboxes/organizations/T-431.jpeg", text: "T-431" },
    { src: "/images/mailboxes/organizations/T-432.jpg", text: "T-432" },
    { src: "/images/mailboxes/organizations/T-433.jpg", text: "T-433" },
    { src: "/images/mailboxes/organizations/T-434.jpg", text: "T-434" },
    { src: "/images/mailboxes/organizations/T-435.jpeg", text: "T-435" },
    { src: "/images/mailboxes/organizations/T-436.jpeg", text: "T-436" },
    { src: "/images/mailboxes/organizations/T-437.jpg", text: "T-437" },
    { src: "/images/mailboxes/organizations/T-438.jpg", text: "T-438" },
    { src: "/images/mailboxes/organizations/T-439.jpg", text: "T-439" },
    { src: "/images/mailboxes/organizations/T-439b.jpg", text: "T-439" },
    { src: "/images/mailboxes/organizations/T-440.jpg", text: "T-440" },
    { src: "/images/mailboxes/organizations/T-441.jpg", text: "T-441" },
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
            <img src="/images/automatic-doors/collapse-automatic-door.jpeg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="ארון הפקדה לטלפונים סלולריים" />
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
