/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { Carousel, Col, Container, Row } from "react-bootstrap";
import ImagesGallery from "../../components/ImagesGallery/ImagesGallery";
import styles from "../../styles/automatic-doors.module.css";
import AOS from 'aos';

const images = [
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg" },
    { src: "/images/Doors/LUX/example2.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "vStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg", strechType: "hStrech" },
    { src: "/images/Doors/LUX/example2.jpg" },
    { src: "/images/Doors/LUX/example3.jpg", strechType: "bigStrech" },
    { src: "/images/Doors/LUX/example4.jpg" },
    { src: "/images/Doors/LUX/example1.jpg" },
];

export default function AutomaticDoors() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <div>
            <Carousel
                autoPlay={true}
                interval={1000}
                controls={false}
                indicators={true}
                fade={true}
            >
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/LUX/example1.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/LUX/example2.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className={styles.caruselImage}
                        src="/images/Doors/LUX/example3.jpg"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className={styles.automaticDoorsContainer}>
                <Row className={styles.automaticDoorsRow} data-aos="fade-right" data-aos-duration="700">
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <h3>דלתות אוטומטיות</h3>
                        <p>
                            פאר אנפון : יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה המבטיחים איכות , שירות ואמינות מוצריה . www.tauitalia.com
                            דלת הזזה אוטומטית יכולה להיות בעלת מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח .
                            דלתות אוטומטיות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                            דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים משותפים , חנויות, ועוד{" "}
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <img
                            src="/images/Doors/ALM/background.jpg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                </Row>

                <Row className={styles.automaticDoorsRow} data-aos="fade-left" data-aos-duration="700">
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <img
                            src="/images/Doors/ALM/background.jpg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <h3>יתרונות בולטים בבחירת דלתות אוטומטיות</h3>
                        <p>
                            השימוש בדלת אוטומטית מאפשרת נגישות לנכים ומקלה על בעלי מוגבלויות.
                            דלת אוטומטית מסייעת בשמירה על ניקיון החלל בכך שהיא מקטינה את כמות הלכלוך שנכנס למינימום. אין צורך במגע יד אדם ולכן נשארת נקייה לאורך זמן.
                            דלת אוטומטית מונעת צורך לגעת בידיים בדלת ובכך מונעת העברה לא נחוצה של חיידקים ומזיקים אחרים.
                            התקנת דלת אוטומטית בכניסה מעניקה תחושת חשיבות לכניסת לקוח לחנות, למשרד או לבניין – יש תחושה שמזמינה להיכנס.
                            דלתות אוטומטיות הנפתחות בפני יוצאים ונכנסים משרה אוירה מזמינה ומנומסת עבור הדיירים והאורחים בבניין.
                            דלתות חשמליות נוחות באופן משמעותי לבאים והיוצאים עם קניות בידיהם, ילדים, תיקים ועוד.
                            קיימת אפשרות לעיצוב על פי דרישות הלקוח.
                            פאר אנפון נותנת יעוץ והתקנה לבנייני משרדים, חברות ובתים משותפים המעוניינים בפתרון מעולה ונח שלדלתות כניסה לבניין מהדור החדש – דלתות חשמליות ואוטומטיות מעוצבות ובצבע לפי בחירתכם.{" "}
                        </p>
                    </Col>
                </Row>

                <Row className={styles.automaticDoorsRow} data-aos="fade-right" data-aos-duration="700">
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <h3>דלתות אוטומטיות</h3>
                        <p>
                            דלתות חשמליות, שבעבר היו מותקנות בעיקר בבנייני משרדים או מלונות יוקרה, הפכו לדלתות המועדפות כיום על בתים משותפים, חנויות ורבי קומות שונים. מה הופך דלתות חשמליות למועדפות?
                            נוחות השימוש- דלתות חשמליות שנפתחות ללא צורך במנעול או ידית כניסה, הן נוחות לשימוש.  נוחות פתיחה וסגירה של דלת כניסה חשובה למשל בבתים משותפים מהם יוצאים דיירים עם מספר דברים או בחנויות שמהן יוצאים לקוחות עם שקיות ומוצרי הרכישה.
                            נגישות- דלתות חשמליות הן נגישות ומזמינות בעיקר לבעלי מוגבלויות ונכויות שונות, שלצערינו יש לא מעט בארצנו. דלתות אלו מקלות מאוד על אדם המתקשה לפתוח את דלת הכניסה כשהוא על קביים או בכיסא גלגלים.
                            אסטטיות- דלתות חשמליות ניתן לעצב לפי דרישת הלקוח. דלתות חשמליות בדרך כלל מורכבות מזכוכית בעלת מראה יוקרתי ואסטטי מאוד, כמו כן ניתן לעצב אותן בעזרת סוגי זכוכית שונים, צבעים שונים של הזכוכית ואפילו עיטורים מיוחדים על הזכוכית.
                            קלות התפעול- דלתות חשמליות מופעלות על ידי מנגנון מיוחד, חברת פאר אנפון הינה היבואנית הבלעדית של מערכות דלתות חשמליות של חברת TAU איטליה שלה מוצרים איכותיים ואמינים.{" "}
                        </p>
                    </Col>
                    <Col xs={12} lg={6} className="pr-5 pl-5">
                        <img
                            src="/images/Doors/ALM/background.jpg"
                            className={styles.doorSelectedMainDiv}
                            alt="דלת אוטומטית"
                        />
                    </Col>
                </Row>

                <div data-aos="fade-zoom-in" data-aos-duration="700">
                    <ImagesGallery images={images} altLabel={"דלתות אוטומטיות"} />
                </div>
            </div>
        </div>
    );
}
