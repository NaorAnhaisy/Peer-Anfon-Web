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
          <Link href="/mailbox">
            <a className={styles.linksFooterColTitle}>תיבות דואר</a>
          </Link>
          <Link href="/mailbox/shared-houses">תיבות דואר לבתים משותפים</Link>
          <Link href="/mailbox/organizations">תיבות דואר למוסדות</Link>
          <Link href="/mailbox/private-houses">תיבות דואר לבתים פרטיים</Link>
          <Link href="/mailbox/mailbox-rooms">חדרי תיבות דואר</Link>
          <Link href="/mailbox/deposit-cellphones">ארון הפקדה לטלפונים סלולריים</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} sm={6} lg={3}>
          <Link href="/enter-doors">
            <a className={styles.linksFooterColTitle}>דלתות כניסה</a>
          </Link>
          <Link href="/enter-doors/aluminium">דלתות כניסה אלומיניום</Link>
          <Link href="/enter-doors/glass">דלתות כניסה זכוכית</Link>
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
          Peer Anfon © {new Date().getFullYear()} - All Rights Reserve.
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
