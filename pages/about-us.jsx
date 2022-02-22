/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/about-us.module.css";
import doorsStyles from "../styles/automatic-doors.module.css";
import TypeAnimation from 'react-type-animation';
import AOS from "aos";

export default function AboutUs() {
    useEffect(() => {
        AOS.init({ once: true });
    }, []);

    return (
        <>
            <Head>
                <title>פאר אנפון - אודותינו</title>
            </Head>

            <div className={styles.enteryContainer}>
                <Row className={styles.enteryContentRow}>
                    <Col className={styles.enteryContentCol} xs={12} lg={6}>
                        <div className={styles.enteryContent}>
                            <TypeAnimation
                                cursor={false}
                                sequence={['על פאר אנפון', 2000]}
                                wrapper="h1"
                            />
                            <p>
                                פאר אנפון הוא מקום לחדשות ולפרסומות של העולם הפרטי.
                                <br />
                                הפאר אנפון מקובץ על העולם הפרטי והפרטי החדש והחדש הפרטי של העולם.
                                <br />
                                הפאר אנפון מקובץ על העולם הפרטי והפרטי החדש והחדש הפרטי של העולם.
                            </p>
                        </div>
                    </Col>
                    <Col xs={0} lg={6} className={styles.displayNoneOnMobile}></Col>
                </Row>
            </div>
            {/* <div className={styles.seperatorEnteryContainer} /> */}
            <div className={styles.threeIdeasConatiner}>
                <Container>
                    <div style={{ width: "100%", overflow: "hidden" }}>
                        <Row className={styles.colsRow}
                            data-aos="fade-up"
                            data-aos-once={true}
                            data-aos-duration="1100">
                            <Col xs={12} md={4}>
                                <div className={styles.flexWrapper}>
                                    <div className={styles.floatDiv}>
                                        <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                        <div className="mb-3 mt-3 separator"></div>
                                        <p className={styles.colParagraph}>
                                            הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className={styles.flexWrapper}>
                                    <div className={styles.floatDiv}>
                                        <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                        <div className="mb-3 mt-3 separator"></div>
                                        <p className={styles.colParagraph}>
                                            הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                        </p>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className={styles.flexWrapper}>
                                    <div className={styles.floatDiv}>
                                        <h4 className={styles.colTitle}>50 שנות נסיון</h4>
                                        <div className="mb-3 mt-3 separator"></div>
                                        <p className={styles.colParagraph}>
                                            הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
            <div className={styles.explainContainer}>
                <Row className={styles.explainRow}>
                    <Col xs={12} md={6}
                        data-aos="fade-left"
                        data-aos-once={true}
                        data-aos-duration="1100"
                        className={styles.explainCol}>
                        <div className={styles.explainDiv}>
                            <h3>הפרטים שעושים את השינוי</h3>
                            <div className={`separator ${styles.separator}`}></div>
                            <p>
                                אנו מסורים לפרטים הקטנים ביותר של הדלת המותאמת אישית שלך, עובדים במפעל שלנו ביורקשייר כדי ליצור ולפקח באופן אישי על העיצוב המותאם שלך. עם הגאווה הגדולה ביותר בכל יצירה ויצירה, אנחנו אמנים של ייצור דלתות ומשתמשים באומנות מומחית כדי לייצר שלמות ולהגשים את החלום שלך.
                                <br />
                                היצירתיות והרבגוניות של השירות המותאם שלנו בוודאי יעלו על הציפיות שלך וישאירו אותך בדיוק מה שדמיינת.
                            </p>
                            <Link href="/">
                                <a className={styles.linkToHome}>
                                    גלה עוד על פאר אנפון
                                </a>
                            </Link>
                        </div>
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </div>

            <div className={styles.importersDiv}>
                <h3>יבואניים בלעדיים</h3>
                <div className={`separator ${styles.separatorSectionTitle}`} />
                <Container className="mt-5">
                    <Row className={`${doorsStyles.rowImagesLinks} ${styles.importersRow}`}>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.erreka.com/en/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={`${doorsStyles.imageLinkDivToCategorys} ${styles.importerImageDiv}`}>
                                        <img src="/images/importers/erreka.png" alt="Erreka יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.tauitalia.com/en/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={`${doorsStyles.imageLinkDivToCategorys} ${styles.importerImageDiv}`}>
                                        <img src="/images/importers/tau.png" alt="TAU יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                        <Col data-aos="zoom-in"
                            data-aos-once={true}
                            data-aos-duration="1000"
                            xs={12} md={6} lg={4}>
                            <a className="no-href-css" href="https://www.topp.it/" target="_blank" rel="noopener noreferrer">
                                <div className="clickable">
                                    <div className={`${doorsStyles.imageLinkDivToCategorys} ${styles.importerImageDiv}`}>
                                        <img src="/images/importers/topp.png" alt="Topp יבואנית רשמית של פאר אנפון" className={doorsStyles.imageToCategorys} />
                                    </div>
                                </div>
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className={styles.officialToppImporterMainDiv}>
                <Container>
                    <div className={styles.officialToppImporter}>
                        <Row>
                            <Col xs={12} lg={6}>
                                <h3>יבואנית רשמית של Topp</h3>
                                <h4>עוד משהו קטן שיש לנו לומר!</h4>
                                <p>
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                    <br />
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                    <br />
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                    <br />
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                    <br />
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                    <br />
                                    הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם.
                                    החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                                </p>
                            </Col>
                            <Col xs={12} lg={6}>
                                <div className={styles.imagesCol}>
                                    <div className={`${styles.overlapFirstImg} ${styles.frameImg}`}>
                                        <img src="https://localwebdesigncompany.com/newdesign8/wp-content/uploads/sites/91/2019/03/agreement-business-businessmen-886465.jpg" alt="פאר אנפון יבואנית רשמית של TOPP" />
                                    </div>
                                    <div className={`${styles.overlapSecondImg} ${styles.frameImg}`}>
                                        <img src="https://localwebdesigncompany.com/newdesign8/wp-content/uploads/sites/91/2019/03/adults-analysis-brainstorming-1661004.jpg" alt="פאר אנפון יבואנית רשמית של TOPP" />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>

            <div className={styles.certificatesDiv}>
                <Container>
                    <h3>תווי התקן שלנו</h3>
                    <div className={`separator ${styles.separatorSectionTitle}`} />
                    <p className="mt-5">
                        הפאר אנפון הוא חברה המקצועית ביותר בעולם המכון הטובים ביותר בעולם. החברה מקצועית ביותר בעולם המכון התקנים המוצרים הטובים ביותר
                    </p>
                    <Row className={styles.certificatesRow}>
                        <Col xs={12} lg={6}>
                            <div className={styles.certificatesImagesCol}>
                                <a href="/assets/certificates-he.pdf" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/certificates/certificate-he.jpg" alt="תווי תקן דלתות" />
                                </a>
                                <a href="/assets/certificates-en.pdf" target="_blank" rel="noopener noreferrer">
                                    <img src="/images/certificates/certificate-en.jpg" alt="תווי תקן אינטרקום" />
                                </a>
                            </div>
                        </Col>
                        <Col xs={12} lg={6}>
                            <a href="/assets/certificates-iqnet.pdf" target="_blank" rel="noopener noreferrer">
                                <img src="/images/certificates/certificate-iqnet.jpg" alt="תווי תקן תיבות דואר" />
                            </a>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}