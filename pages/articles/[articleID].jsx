import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import RotateLoader from '../../components/Loaders/RotateLoader/RotateLoader';
import styles from "../../styles/articles.module.css";

let articles = require('../../data/articles.json');

export default function Article() {
    const router = useRouter()
    const { articleID } = router.query;
    const [article, setArticle] = useState(null);
    const [articleNotFound, setArticleNotFound] = useState(false);

    useEffect(() => {
        let foundArticle = articles.find(article => article.articleID === articleID);
        console.log(foundArticle);
        if (foundArticle) setArticle(foundArticle);
        else setArticleNotFound(true);
    }, [article, setArticle, articleID]);

    return (
        <Container className={`mt-5 mb-5 ${styles.articleContainer}`}>
            <div className="push-from-navbar"></div>
            {articleNotFound && !article ?
                <h1>מצטערים, המאמר לא נמצא</h1>
                :
                !article ?
                    <RotateLoader />
                    :
                    article?.html.map((section, i) => {
                        return <div key={i}>
                            <h1 className={i === 0 ? styles.articleTitle : styles.articleSectionTitle}>{section.title}</h1>
                            <div dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                        </div>
                    })
            }
        </Container>
    )
}
