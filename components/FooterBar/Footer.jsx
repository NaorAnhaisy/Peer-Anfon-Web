import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className='footer'>
      <Row className={styles.footerBarRow}>
        <Col sm={12} md={6} className={styles.aboutSite}>
          Peer Anfon © {new Date().getFullYear()} - All Rights Reserve.
        </Col>
        <Col sm={12} md={6} className={styles.copyrightSpan}>
          Designed & Dev by{" "}
          <a className={styles.developerName} href="https://github.com/NaorAnhaisy" target="_blank" rel="noreferrer noopener">
            Naor Anhaisy
          </a>
        </Col>
      </Row>
    </footer>
  );
}
