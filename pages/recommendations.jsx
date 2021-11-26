/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap";
import styles from "../styles/recommendations.module.css";
import RecommandsFormDiv from '../components/RecommandsFormDiv/RecommandsFormDiv';

export default function Recommendations() {
    return (
        <div>
            <Container className="mt-5">
                <div className="push-from-navbar"></div>
                <div className={"mb-5 " + styles.recommandsPageTitleDiv}>
                    <h1>מרוצים מפאר אנפון ?</h1>
                    <div className="mt-3 mb-4 separator"></div>
                    <p>ספרו לנו על כך! מלאו את הטופס:</p>
                </div>
                <Container>
                    <Row>
                        <Col xs={12} lg={6}>
                            <RecommandsFormDiv />
                        </Col>
                        <Col xs={12} lg={6}>
                            <img src="/images/Illustrations/Recommands.png" alt="" />
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    );
}
