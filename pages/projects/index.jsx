/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap";
import styles from "../../styles/projects.module.css";
import ProjectsCard from '../../components/ProjectsCard/ProjectsCard';

let projects = require('../../data/projects.json');

export default function Projects() {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <div className="push-from-navbar"></div>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">הפרוייקטים שלנו</h1>
                </div>
                <div className="mb-5 separator"></div>

                <div className={styles.galleryDescription}>
                    <h3>כל הבתים, כל הסגנונות,<br /> כל העיצובים לבית מושלם</h3>
                    <p>צודק מי שאומר שתמונה אחת שווה אלף מילים. יש לנו המון דברים טובים לומר על הדלתות המעוצבות שלנו אבל הפעם נתנו לעדשת המצלמה לעשות את (רוב) העבודה. כך נראות הדלתות שלנו בבתים שלכם.</p>
                </div>
                <div>
                    <Row className={styles.projectsRow}>
                        {projects.map((project, index) => {
                            return <Col key={index} md={12} lg={6} xl={4}>
                                <ProjectsCard project={project} index={index} />
                            </Col>
                        })}
                    </Row>
                </div>
            </Container>
        </div>
    );
}
