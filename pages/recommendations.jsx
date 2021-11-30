/* eslint-disable @next/next/no-img-element */
import { Container, Row, Col } from "react-bootstrap";
import RecommandsFormDiv from '../components/RecommandsFormDiv/RecommandsFormDiv';
import CardsSlider from '../components/CardsSlider/CardsSlider';

export default function Recommendations() {
    return (
        <div>
            <Container className="mt-5">
                <div className="push-from-navbar"></div>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">מרוצים מפאר אנפון ?</h1>
                </div>
                <div className="mb-5 separator"></div>
                <p className="page-subtitle">ספרו לנו על כך! מלאו את הטופס:</p>
                <Row>
                    <Col xs={12} lg={6}>
                        <RecommandsFormDiv />
                    </Col>
                    <Col xs={12} lg={6}>
                        <img src="/images/Illustrations/Recommands2.png" alt="המלצות פאר אנפון" style={{ width: '100%' }} />
                    </Col>
                </Row>
            </Container>
            <CardsSlider />
        </div>
    );
}
