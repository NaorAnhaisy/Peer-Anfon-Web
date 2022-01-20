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
                    <h3>With you in every project<br />פאר אנפון איתך בכל פרויקט</h3>
                    <p>
                        פאר אנפון גאה לקחת חלק בפרויקטים הגדולים בענף ולשתף פעולה עם החברות הגדולות בארץ, ליווי צמוד ואישי במגוון פרויקטים ושקט נפשי לתקופה ארוכה.
                        בגלריה תוכלו למצוא טעימה מהפרויקטים בהם מוצרי פאר אנפון מותקנים ברחבי הארץ.
                    </p>
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
