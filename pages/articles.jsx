/* eslint-disable @next/next/no-img-element */
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../styles/articles.module.css";

const articles = [
    { src: "/images/Doors/LUX/example3.jpg", title: "כותרת המאמר", subTitle: "Some quick example text to build on the card title and make up the bulk ofthe cards content" }
];

export default function Articles() {
    return (
        <div>
            <Container className="mt-5">
                <div className="push-from-navbar"></div>
                <div className={"mb-5 " + styles.recommandsPageTitleDiv}>
                    <h1>מרוצים מפאר אנפון ?</h1>
                    <div className="mt-3 mb-4 separator"></div>
                    <p>ספרו לנו על כך! מלאו את הטופס:</p>
                </div>
                <Container>
                    <Row className={styles.articlesRow}>
                        <Col xs={12} md={6} lg={4} xl={3}>
                            <Card className={styles.articleCard}>
                                <Card.Img variant="top" src="/images/Doors/LUX/example3.jpg" />
                                <Card.Body>
                                    <Card.Title>כותרת המאמר</Card.Title>
                                    <Card.Text className={styles.articleCardSubTitle}>
                                        טקסט דוגמה מהיר לבנייה על כותרת הכרטיס ולהוות את עיקר תוכן הכרטיסים. טקסט דוגמה מהיר לבנייה על כותרת הכרטיס ולהוות את עיקר תוכן הכרטיסים.
                                    </Card.Text>
                                </Card.Body>
                                <Card.Footer className={styles.articleFooter}>
                                    <img src="/images/‏‏company-logo-symbol.png" alt="פאר אנפון תעשתיות בעמ" className={`undragablle-image ${styles.companyLogoSymbol}`} />
                                </Card.Footer>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
