/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/about-us.module.css";

export default function AboutUs() {
  return (
    <Container className="mb-5">
      <div className="push-from-navbar"></div>
      <div className="mb-5 page-title">
        <h1 className="text-shine">אודות פאר אנפון</h1>
      </div>
      <div className="mb-5 separator"></div>
      <Container>
        <img src="/images/Doors/LUX/example3.jpg" alt="" style={{ width: "100%", height: "100%" }} />
        <Row className={styles.colsRow}>
          <Col xs={12} md={4}>
            <h4 className={styles.colTitle}>50 שנות נסיון</h4>
            <div className="mb-3 mt-3 separator"></div>
            <p className={styles.colParagraph}>
              הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className={styles.colTitle}>50 שנות נסיון</h4>
            <div className="mb-3 mt-3 separator"></div>
            <p className={styles.colParagraph}>
              הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
            </p>
          </Col>
          <Col xs={12} md={4}>
            <h4 className={styles.colTitle}>50 שנות נסיון</h4>
            <div className="mb-3 mt-3 separator"></div>
            <p className={styles.colParagraph}>
              הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}