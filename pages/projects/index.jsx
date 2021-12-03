/* eslint-disable @next/next/no-img-element */
import { Container, Card, Row, Col } from "react-bootstrap";
import styles from "../../styles/projects.module.css";
// import AOS from "aos";
// import { useEffect } from "react";
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

                <Container fluid>
                    <Row className={styles.projectsRow}>
                        {projects.map((project, index) => {
                            return <Col key={index} s={12} md={4} lg={4}>
                                <ProjectsCard project={project} index={index} />
                            </Col>
                        })}
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
