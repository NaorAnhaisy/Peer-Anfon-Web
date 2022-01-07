/* eslint-disable @next/next/no-img-element */
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
        <Col className={styles.linksFooterCol} xs={12} md={6} lg={2}>
          <Link href="/דלתות-אוטומטיות">
            <a className={styles.linksFooterColTitle}>דלתות אוטומטיות</a>
          </Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-דו-כנף">אוטומטית הזזה דו-כנף</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-הזזה-חד-כנף">אוטומטית הזזה חד-כנף</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-טלסקופית">אוטומטית טלסקופית</Link>
          <Link href="/דלתות-אוטומטיות/דלת-אוטומטית-קורסת">אוטומטית קורסת</Link>
          <Link href="/דלתות-אוטומטיות/דלת-פנים-אוטומטית">דלתות פנים אוטומטיות</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} md={6} lg={2}>
          <Link href="/תיבות-דואר">
            <a className={styles.linksFooterColTitle}>תיבות דואר</a>
          </Link>
          <Link href="/תיבות-דואר/תיבות-דואר-לבתים-משותפים">תיבות דואר לבתים משותפים</Link>
          <Link href="/תיבות-דואר/תיבות-דואר-למוסדות">תיבות דואר למוסדות</Link>
          <Link href="/תיבות-דואר/תיבות-דואר-לבתים-פרטיים">תיבות דואר לבתים פרטיים</Link>
          <Link href="/תיבות-דואר/חדרי-תיבות-דואר">חדרי תיבות דואר</Link>
          <Link href="/תיבות-דואר/ארון-הפקדה-לטלפונים-סלולריים">ארון הפקדה לטלפונים סלולריים</Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} md={6} lg={2}>
          <Link href="/מעברי-כניסה">
            <a className={styles.linksFooterColTitle}>מעברי כניסה</a>
          </Link>
          <Link href="/מעברי-כניסה/מעברים-מהירים">מעברים מהירים</Link>
          <Link href="/מעברי-כניסה/קרוסלות-חצובה">קרוסלות חצובה</Link>

          <Link href="/דלתות-כניסה">
            <a className={`${styles.linksFooterColTitle} mt-5 mb-3`}>דלתות כניסה</a>
          </Link>
          <Link href="/מערכות-אינטרקום">
            <a className={`${styles.linksFooterColTitle} mt-1 mb-3`}>מערכות אינטרקום</a>
          </Link>
        </Col>
        <Col className={styles.linksFooterCol} xs={12} md={6} lg={2}>
          <Link href="/צור-קשר">
            <a className={styles.linksFooterColTitle}>דברו איתנו</a>
          </Link>
          <p className={styles.contactUsParagraph}>
            הסדנא 13 חולון, 5881407
            <br />
            <br />
            <span>ראשון - חמישי: 8:00 - 16:00</span>
            <br />
            <span>שישי: 8:00 - 12:00</span>
            <br />
            <span>שבת: סגור</span>
            <br />
            <br />
            <span className={styles.contactUsHref}>
              <a href="tel:0723712701">+972-72-371-2701</a>
            </span>
            <br />
            <span className={styles.contactUsHref}>
              <a href="mailto:info@8peer.co.il">info@8peer.co.il</a>
            </span>
            <br />
            <span>פקס: 03-5568117</span>
          </p>
        </Col>
        <Col className={styles.linksFooterLogoCol} xs={12} md={6} lg={2}>
          <img src="/images/company-logo/white-logo-symbol.png" alt="פאר אנפון תעשתיות בעמ" className={`undragablle-image ${styles.companyLogoSymbol}`} />
          <img src="/images/company-logo/white-logo-text.png" alt="פאר אנפון תעשתיות בעמ" className={`undragablle-image ${styles.companyLogoText}`} />
        </Col>
      </Row>
      <div className={styles.linksAboutseparator}></div>
      <Row className={`${styles.footerBarRow} dir-ltr`}>
        <Col sm={12} md={4} className={styles.aboutSite}>
          <span>© Peer Anfon {new Date().getFullYear()} - All Rights Reserve</span>
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
          <a href="https://wa.me/+97235505624" aria-label="Whatsapp פאר אנפון" className={styles.footerHover}>
            <i className="fab fa-whatsapp" aria-hidden="true" />
          </a>
          <a href="tel:0723712701" aria-label="טלפון פאר אנפון" className={styles.footerHover}>
            <i className="fas fa-phone-square" aria-hidden="true" style={{ transform: "rotate(90deg)" }} />
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
