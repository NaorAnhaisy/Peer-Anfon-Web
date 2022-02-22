import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import RotateLoader from '../../components/Loaders/RotateLoader/RotateLoader';
import styles from "../../styles/articles.module.css";
import doorStyles from "../../styles/automatic-door-model.module.css"

let articles = require('../../data/articles.json');

export default function Article() {
    const router = useRouter();
    const { articleID } = router.query;
    const [loading, setLoading] = useState(true);
    const [article, setArticle] = useState(null);

    useEffect(() => {
        let foundArticle = articles.find(article => article.articleID === articleID);
        if (foundArticle) setArticle(foundArticle);
        setLoading(false);
    }, [article, setArticle, articleID]);

    const prevArticle = () => {
        let curIndex = articles.findIndex(article => article.articleID === articleID);
        let prevIndex = curIndex === 0 ? articles.length - 1 : (curIndex - 1);
        router.push(`/מאמרים/${articles[prevIndex].articleID}`);
    }

    const nextArticle = () => {
        let curIndex = articles.findIndex(article => article.articleID === articleID);
        let prevIndex = (curIndex + 1) % articles.length;
        router.push(`/מאמרים/${articles[prevIndex].articleID}`);
    }

    return (
        <>
            <Head>
                <title>פאר אנפון - מאמרים מקצועיים</title>
            </Head>

            <Container className={`mt-5 mb-5 ${styles.articleContainer}`}>
                <div className="push-from-navbar"></div>
                <div className={doorStyles.arrowBackIconWrapper} onClick={() => router.push(`/מאמרים`)}>
                    <div className={doorStyles.arrowBackIcon}></div>
                    <span className={doorStyles.arrowBackIconText}>לכל המאמרים</span>
                </div>
                {loading ?
                    <RotateLoader />
                    :
                    article ?
                        <div>
                            {article?.html.map((section, i) => {
                                return <div className={`mt-5 mb-5 ${styles.articleContent}`} key={i}>
                                    <h3 className={i === 0 ? styles.articleTitle : styles.articleSectionTitle}>{section.title ? section.title : article.title}</h3>
                                    <div className={i === 0 ? styles.articleStartParagraph : styles.articleParagraph} dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                                    <div className={i === 0 ? styles.sperator : ""} />
                                </div>
                            })}
                            <div className={styles.backAndNextArticleBtnsDiv}>
                                <button type="button" onClick={nextArticle} className={styles.nextBtn}>
                                    <span>
                                        המאמר הבא
                                    </span>
                                    <div className={styles.centerCon}>
                                        <div className={styles.roundNext}>
                                            <div className={styles.cta}>
                                                <i className={`fas fa-chevron-left ${styles.arrowNext} ${styles.primeraNext}`}></i>
                                                <i className={`fas fa-chevron-left ${styles.arrowNext} ${styles.segundaNext}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                                <button type="button" onClick={prevArticle} className={styles.prevBtn}>
                                    <div className={styles.centerCon}>
                                        <div className={styles.roundPrev}>
                                            <div className={styles.cta}>
                                                <i className={`fas fa-chevron-right ${styles.arrowPrev} ${styles.primeraPrev}`}></i>
                                                <i className={`fas fa-chevron-right ${styles.arrowPrev} ${styles.segundaPrev}`}></i>
                                            </div>
                                        </div>
                                    </div>
                                    <span>
                                        המאמר הקודם
                                    </span>
                                </button>
                            </div>
                        </div>
                        :
                        <h2>מצטערים, המאמר לא נמצא</h2>
                }
            </Container>
        </>
    )
}
