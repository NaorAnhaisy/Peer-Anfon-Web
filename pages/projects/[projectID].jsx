import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import RotateLoader from '../../components/Loaders/RotateLoader/RotateLoader';
import styles from "../../styles/projects.module.css";
import doorStyles from "../../styles/automatic-door-model.module.css"

let projects = require('../../data/projects.json');

export default function Project() {
    const router = useRouter()
    const { projectID } = router.query;
    const [project, setProject] = useState(null);
    const [projectNotFound, setProjectNotFound] = useState(false);

    useEffect(() => {
        let foundProject = projects.find(project => project.projectID === projectID);
        if (foundProject) setProject(foundProject);
        else setProjectNotFound(true);
    }, [project, setProject, projectID]);

    const prevProject = () => {
        let curIndex = projects.findIndex(project => project.projectID === projectID);
        let prevIndex = curIndex === 0 ? projects.length - 1 : (curIndex - 1);
        router.push(`/projects/${projects[prevIndex].projectID}`);
    }

    const nextArticle = () => {
        let curIndex = projects.findIndex(project => project.projectID === projectID);
        let prevIndex = (curIndex + 1) % projects.length;
        router.push(`/projects/${projects[prevIndex].projectID}`);
    }

    return (
        <Container className={`mt-5 mb-5 ${styles.articleContainer}`}>
            <div className="push-from-navbar"></div>
            <div className={doorStyles.arrowBackIconWrapper} onClick={() => router.push(`/פרוייקטים`)}>
                <div className={doorStyles.arrowBackIcon}></div>
                <span className={doorStyles.arrowBackIconText}>לכל הפרוייקטים</span>
            </div>
            {articleNotFound && !article ?
                <h3>מצטערים, המאמר לא נמצא</h3>
                :
                !article ?
                    <RotateLoader />
                    :
                    article?.html.map((section, i) => {
                        return <div className={`mt-5 mb-5 ${styles.articleContent}`} key={i}>
                            <h3 className={i === 0 ? styles.articleTitle : styles.articleSectionTitle}>{section.title}</h3>
                            <div className={i === 0 ? styles.articleStartParagraph : styles.articleParagraph} dangerouslySetInnerHTML={{ __html: section.paragraph }} />
                            <div className={i === 0 ? styles.sperator : ""} />
                        </div>
                    })
            }
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
        </Container>
    )
}
