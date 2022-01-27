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
    { src: "/images/mailboxes/private-houses/P-301.jpg", text: "P-301" },
    { src: "/images/mailboxes/private-houses/P-302.jpg", text: "P-302" },
    { src: "/images/mailboxes/private-houses/P-303.jpg", text: "P-303" },
    { src: "/images/mailboxes/private-houses/P-304.jpg", text: "P-304" },
    { src: "/images/mailboxes/private-houses/P-305.jpg", text: "P-305" },
    { src: "/images/mailboxes/private-houses/P-306.jpg", text: "P-306" },
    { src: "/images/mailboxes/private-houses/P-307.jpg", text: "P-307" },
    { src: "/images/mailboxes/private-houses/P-308.jpg", text: "P-308" },
    { src: "/images/mailboxes/private-houses/P-309.jpg", text: "P-309" },
    { src: "/images/mailboxes/private-houses/P-310.jpg", text: "P-310" },
    { src: "/images/mailboxes/private-houses/P-311.jpg", text: "P-311" },
    { src: "/images/mailboxes/private-houses/P-312.jpg", text: "P-312" },
    { src: "/images/mailboxes/private-houses/P-313.jpg", text: "P-313" },
    { src: "/images/mailboxes/private-houses/P-314.jpg", text: "P-314" },
    { src: "/images/mailboxes/private-houses/P-315.jpg", text: "P-315" },
    { src: "/images/mailboxes/private-houses/P-316.jpg", text: "P-316" },
    { src: "/images/mailboxes/private-houses/P-317.jpg", text: "P-317" },
    { src: "/images/mailboxes/private-houses/P-318.jpg", text: "P-318" },
    { src: "/images/mailboxes/private-houses/P-319.jpg", text: "P-319" },
    { src: "/images/mailboxes/private-houses/P-319b.jpg", text: "P-319" },
    { src: "/images/mailboxes/private-houses/P-320.jpg", text: "P-320" },
    { src: "/images/mailboxes/private-houses/P-321.jpg", text: "P-321" },
    { src: "/images/mailboxes/private-houses/P-322.jpg", text: "P-322" },
    { src: "/images/mailboxes/private-houses/P-323.jpg", text: "P-323" },
    { src: "/images/mailboxes/private-houses/P-324.jpg", text: "P-324" },
    { src: "/images/mailboxes/private-houses/P-325.jpg", text: "P-325" },
    { src: "/images/mailboxes/private-houses/P-326.jpg", text: "P-326" },
    { src: "/images/mailboxes/private-houses/P-327.jpg", text: "P-327" },
    { src: "/images/mailboxes/private-houses/P-328.jpg", text: "P-328" },
    { src: "/images/mailboxes/private-houses/P-329.jpg", text: "P-329" },
    { src: "/images/mailboxes/private-houses/P-330.jpg", text: "P-330" },
    { src: "/images/mailboxes/private-houses/P-331.jpg", text: "P-331" },
    { src: "/images/mailboxes/private-houses/P-332.jpg", text: "P-332" },
    { src: "/images/mailboxes/private-houses/P-333.jpg", text: "P-333" },
];

export default function PrivateHouses() {
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
                                alt={`תיבת דואר לבתים פרטיים ${image.text}`}
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
            <img src="/images/mailboxes/private-houses/P-315.jpg" className={`undragablle-image ${styles.doorSelectedMainDiv}`} alt="תיבות דואר לבתים פרטיים" />
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
                                    <div>לבתים פרטיים</div>
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
                                    במידה ואתם מתגוררים בבית פרטי, יש לכם את היכולת הבלעדית לבחור עבורכם מהאלמנטים שמרכיבים את הבית.
                                    הדבר נכון כמובן גם לגבי תיבת הדואר שלכם.
                                    חשוב להבין כי מדובר על פרט חשוב ביותר שצריך לספק לכם מעבר לתוספת עיצובית, הגנה עבור פרטי הדואר שלכם ועמידות מלאה בפני שינויי הזמן ונזקי מזג האוויר.
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
                                    כחברה שמתמחה בתחום תיבות הדואר לבתים פרטיים כבר למעלה מחמישה עשורים, ישמחו המומחים שלנו להתאים עבורכם את התיבה המושלמת לפי טעמכם באופן אישי.
                                    ניתנות המון אופציות שבהם ניתן למקם את תיבות הדואר למשל: בתוך השער , בתוך הקיר החיצוני או על הקיר החיצוני.
                                    את התיבה ניתן לייצר בכל גוון ובכל מידה לפי דרישת הלקוח.
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
