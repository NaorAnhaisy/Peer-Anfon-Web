/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RotateLoader from '../../components/Loaders/RotateLoader/RotateLoader';
import styles from "../../styles/projects.module.css";
import articleStyles from "../../styles/articles.module.css";
import doorStyles from "../../styles/automatic-door-model.module.css"
import AOS from 'aos';

let projects = require('../../data/projects.json');

export default function Project() {
    useEffect(() => {
        AOS.init({ once: true })
    }, []);

    const router = useRouter()
    const { projectID } = router.query;
    const [project, setProject] = useState(null);
    const [projectNotFound, setProjectNotFound] = useState(false);

    useEffect(() => {
        let foundProject = projects.find(project => project.projectID === projectID);
        if (foundProject?.images.length === 3) setProject(foundProject);
        else setProjectNotFound(true);
    }, [project, setProject, projectID]);

    const prevProject = () => {
        let curIndex = projects.findIndex(project => project.projectID === projectID);
        let prevIndex = curIndex === 0 ? projects.length - 1 : (curIndex - 1);
        router.push(`/פרוייקטים/${projects[prevIndex].projectID}`);
    }

    const nextProject = () => {
        let curIndex = projects.findIndex(project => project.projectID === projectID);
        let prevIndex = (curIndex + 1) % projects.length;
        router.push(`/פרוייקטים/${projects[prevIndex].projectID}`);
    }

    return (
        <Container className={`mt-5 mb-5 ${styles.projectContainer}`}>
            <div className="push-from-navbar"></div>
            <div className={doorStyles.arrowBackIconWrapper} onClick={() => router.push(`/פרוייקטים`)}>
                <div className={doorStyles.arrowBackIcon}></div>
                <span className={doorStyles.arrowBackIconText}>לכל הפרוייקטים</span>
            </div>
            {projectNotFound && !project ?
                <h3>מצטערים, המאמר לא נמצא</h3>
                :
                !project ?
                    <RotateLoader />
                    :
                    <>
                        <div className={`mt-5 mb-5`}>
                            <div className={styles.headerProject}>
                                <h2>{project.name}</h2>
                                <p>{project.description}</p>
                                <div className={styles.about}>
                                    <i className={`far fa-calendar-alt ${styles.dateIcon}`}></i>
                                    <span>{project.date}</span>
                                </div>
                                <div className={styles.projectHeaderContentSeparator} />
                            </div>
                            <Row>
                                <Col sm={12} lg={6} className={doorStyles.doorSelectedHorizontalImages}>
                                    <img
                                        style={{ height: '50%' }}
                                        className={doorStyles.doorSelectedDetailsExampleImg}
                                        data-aos="fade-zoom-in"
                                        data-aos-duration="700"
                                        src={project?.images[0]}
                                        alt={`פאר אנפון - פרוייקט ${project.name}`}
                                    />
                                    <img
                                        style={{ height: '50%' }}
                                        className={doorStyles.doorSelectedDetailsExampleImg}
                                        data-aos="fade-zoom-in"
                                        data-aos-duration="700"
                                        src={project?.images[1]}
                                        alt={`פאר אנפון - פרוייקט ${project.name}`}
                                    />
                                </Col>
                                <Col sm={12} lg={6}>
                                    <img
                                        style={{ height: '100%' }}
                                        className={doorStyles.doorSelectedDetailsExampleImg}
                                        data-aos="fade-zoom-in"
                                        data-aos-duration="700"
                                        src={project?.images[2]}
                                        alt={`פאר אנפון - פרוייקט ${project.name}`}
                                    />
                                </Col>
                            </Row>
                        </div>
                        <div className={articleStyles.backAndNextArticleBtnsDiv}>
                            <button type="button" onClick={nextProject} className={articleStyles.nextBtn}>
                                <span>
                                    פרוייקט הבא
                                </span>
                                <div className={articleStyles.centerCon}>
                                    <div className={articleStyles.roundNext}>
                                        <div className={articleStyles.cta}>
                                            <i className={`fas fa-chevron-left ${articleStyles.arrowNext} ${articleStyles.primeraNext}`}></i>
                                            <i className={`fas fa-chevron-left ${articleStyles.arrowNext} ${articleStyles.segundaNext}`}></i>
                                        </div>
                                    </div>
                                </div>
                            </button>
                            <button type="button" onClick={prevProject} className={articleStyles.prevBtn}>
                                <div className={articleStyles.centerCon}>
                                    <div className={articleStyles.roundPrev}>
                                        <div className={articleStyles.cta}>
                                            <i className={`fas fa-chevron-right ${articleStyles.arrowPrev} ${articleStyles.primeraPrev}`}></i>
                                            <i className={`fas fa-chevron-right ${articleStyles.arrowPrev} ${articleStyles.segundaPrev}`}></i>
                                        </div>
                                    </div>
                                </div>
                                <span>
                                    פרוייקט קודם
                                </span>
                            </button>
                        </div>
                    </>
            }
        </Container>
    )
}
