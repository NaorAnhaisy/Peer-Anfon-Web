import styles from "./Footer.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <button type="button" onClick={scrollTop} className={styles.backToTopBtn}>חזור למעלה</button>
      <Row className={`${styles.footerBarRow} ${styles.linksFooter} dir-rtl`}>
        <Col className={styles.linksFooterCol} xs={12} sm={6} lg={3}>
          <Link href="/דלתות-אוטומטיות">
            <a className={styles.linksFooterColTitle}>דלתות אוטומטיות</a>
          </Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף">אוטומטית הזזה דו-כנף</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף">אוטומטית הזזה חד-כנף</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית">אוטומטית טלסקופית</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת">אוטומטית קורסת</Link>
          <Link href="/דלתות-אוטומטיות/דלת-פנים-אוטומטית">דלתות פנים אוטומטיות</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} sm={6} lg={3}>
          <Link href="/תיבות-דואר">
            <a className={styles.linksFooterColTitle}>תיבות דואר</a>
          </Link>
          <Link href="/תיבות-דואר/תיבות-דואר-לבתים-משותפים">תיבות דואר לבתים משותפים</Link>
          <Link href="/תיבות-דואר/תיבות-דואר-למוסדות">תיבות דואר למוסדות</Link>
          <Link href="/תיבות-דואר/תיבות-דואר-לבתים-פרטיים">תיבות דואר לבתים פרטיים</Link>
          <Link href="/תיבות-דואר/חדרי-תיבות-דואר">חדרי תיבות דואר</Link>
          <Link href="/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים">ארון הפקדה לטלפונים סלולריים</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} sm={6} lg={3}>
          <Link href="/דלתות-כניסה">
            <a className={styles.linksFooterColTitle}>דלתות כניסה</a>
          </Link>
          <Link href="/דלתות-כניסה/דלתות-כניסה-אלומיניום">דלתות כניסה אלומיניום</Link>
          <Link href="/דלתות-כניסה/דלתות-כניסה-זכוכית">דלתות כניסה זכוכית</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} sm={6} lg={3}>
          <Link href="/intercom">
            <a className={styles.linksFooterColTitle}>מערכות אינטרקום</a>
          </Link>
          <Link href="/intercom">עמודי נירוסטה לאינטרקום</Link>
        </Col>
      </Row>
      <div className={styles.linksAboutseparator}></div>
      <Row className={`${styles.footerBarRow} dir-ltr`}>
        <Col sm={12} md={4} className={styles.aboutSite}>
          <span>Peer Anfon © {new Date().getFullYear()} - All Rights Reserve</span>
          <a href="tel:0723712701" className="no-href-css" style={{ marginLeft: "40px" }}>072-371-2701</a>
        </Col>
        <Col sm={12} md={4} className={styles.socialLinks}>
          <a href="https://www.facebook.com/" aria-label="Facebook פאר אנפון" target="_blank" rel="noopener noreferrer" className={styles.footerHover}>
            <i className="fab fa-facebook" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/" aria-label="Instagram פאר אנפון" target="_blank" rel="noopener noreferrer" className={styles.footerHover}>
            <i className="fab fa-instagram" aria-hidden="true" />
          </a>
          <a href="https://www.youtube.com/" aria-label="Youtube פאר אנפון" target="_blank" rel="noopener noreferrer" className={styles.footerHover}>
            <i className="fab fa-youtube" aria-hidden="true" />
          </a>
        </Col>
        <Col sm={12} md={4} className={styles.copyrightSpan}>
          Design & Dev by{" "}
          <a
            className={styles.developerName}
            href="https://github.com/NaorAnhaisy"
            target="_blank"
            rel="noreferrer noopener">
            Naor Anhaisy
          </a>
        </Col>
      </Row>
    </footer>
  );
}
