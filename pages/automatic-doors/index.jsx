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
                interval={5000}
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
                            פאר אנפון : יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה
                            המבטיחים איכות, שירות ואמינות. דלת הזזה אוטומטית יכולה להיות בעלת
                            מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח. דלתות
                            אוטומטיות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                            דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים
                            משותפים, חנויות, ועוד.{" "}
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
                        <h3>דלתות אוטומטיות</h3>
                        <p>
                            פאר אנפון : יבואנית בלעדית של מערכות דלתות אוטומטיות של TAU איטליה
                            המבטיחים איכות, שירות ואמינות. דלת הזזה אוטומטית יכולה להיות בעלת
                            מראה זכוכית עם פרופיל דק או עם מסגרת עבה בהתאם לדרישות לקוח. דלתות
                            אוטומטיות אוטומטיות מותקנות על מסילה עילית ומתקבל מראה אסתטי ונקי.
                            דלתות חשמליות אוטומטיות מותקנות בעיקר בפתחן של כניסה למשרדים, בתים
                            משותפים, חנויות, ועוד.{" "}
                        </p>
                    </Col>
                </Row>

                <div data-aos="fade-zoom-in" data-aos-duration="700">
                    <ImagesGallery images={images} altLabel={"דלתות אוטומטיות"} />
                </div>
            </div>
        </div>
    );
}
