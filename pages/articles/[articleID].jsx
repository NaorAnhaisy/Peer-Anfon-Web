import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import RotateLoader from '../../components/Loaders/RotateLoader/RotateLoader';
import styles from "../../styles/articles.module.css";
import doorStyles from "../../styles/automatic-door-model.module.css"

let articles = require('../../data/articles.json');

export default function Article() {
    const router = useRouter()
    const { articleID } = router.query;
    const [article, setArticle] = useState(null);
    const [articleNotFound, setArticleNotFound] = useState(false);

    useEffect(() => {
        let foundArticle = articles.find(article => article.articleID === articleID);
        if (foundArticle) setArticle(foundArticle);
        else setArticleNotFound(true);
    }, [article, setArticle, articleID]);

    const prevArticle = () => {
        let curIndex = articles.findIndex(article => article.articleID === articleID);
        let prevIndex = curIndex === 0 ? articles.length - 1 : (curIndex - 1);
        router.push(`/articles/${articles[prevIndex].articleID}`);
    }

    const nextArticle = () => {
        let curIndex = articles.findIndex(article => article.articleID === articleID);
        let prevIndex = (curIndex + 1) % articles.length;
        router.push(`/articles/${articles[prevIndex].articleID}`);
    }

    return (
        <Container className={`mt-5 mb-5 ${styles.articleContainer}`}>
            <div className="push-from-navbar"></div>
            <div className={doorStyles.arrowBackIconWrapper} onClick={() => router.push(`/articles`)}>
                <div className={doorStyles.arrowBackIcon}></div>
                <span className={doorStyles.arrowBackIconText}>לכל המאמרים</span>
            </div>
            {articleNotFound && !article ?
                <h3>מצטערים, המאמר לא נמצא</h3>
                :
                !article ?
                    <RotateLoader />
                    :
                    article?.html.map((section, i) => {
                        return <div className="mt-5 mb-5" key={i}>
                            <h3 className={i === 0 ? styles.articleTitle : styles.articleSectionTitle}>{section.title}</h3>
                            <div className={i === 0 ? styles.articleStartParagraph : styles.articleParagraph} dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                            <div className={i === 0 ? styles.sperator : ""} />
                        </div>
                    })
            }
            <div className={styles.backAndNextArticleBtnsDiv}>
                <button type="button" onClick={nextArticle}>
                    <span>
                        המאמר הבא
                    </span>
                    {/* <div className={styles.centerCon}>
                        <div className={styles.round}>
                            <div className={styles.cta}>
                                <span className={`${styles.arrow} ${styles.primera} ${styles.next}`}></span>
                                <span className={`${styles.arrow} ${styles.segunda} ${styles.next}`}></span>
                            </div>
                        </div>
                    </div> */}
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button type="button" onClick={prevArticle} className={styles.prevBtn}>
                    <i className="fas fa-chevron-right"></i>
                    {/* <div className={styles.centerCon}>
                        <div className={styles.round}>
                            <div className={styles.cta}>
                                <span className={`${styles.arrow} ${styles.primera} ${styles.prev}`}></span>
                                <span className={`${styles.arrow} ${styles.segunda} ${styles.prev}`}></span>
                            </div>
                        </div>
                    </div> */}
                    <span>
                        המאמר הקודם
                    </span>
                </button>
            </div>
        </Container>
    )
}
