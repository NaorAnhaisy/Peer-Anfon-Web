/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { Container, Row, Col } from "react-bootstrap";
import RecommandsFormDiv from '../components/RecommandsFormDiv/RecommandsFormDiv';
import CustomerRecommandsSlider from '../components/CustomerRecommandsSlider/CustomerRecommandsSlider';

export default function Recommendations() {
    return (
        <>
            <Head>
                <title>פאר אנפון - המלצות</title>
            </Head>

            <Container className="mt-5">
                <div className="push-from-navbar"></div>
                <div className="mb-5 page-title">
                    <h1 className="text-shine">מרוצים מפאר אנפון?</h1>
                </div>
                <div className="mb-5 separator"></div>
                <p className="page-subtitle">ספרו לנו על כך! מלאו את הטופס:</p>
                <Row>
                    <Col xs={12} lg={6}>
                        <RecommandsFormDiv />
                    </Col>
                    <Col xs={12} lg={6}>
                        <img src="/images/Illustrations/Recommands.png"
                            className="undragablle-image"
                            alt="המלצות פאר אנפון"
                            style={{ width: '100%' }} />
                    </Col>
                </Row>
            </Container>
            <div className="mb-5">
                <CustomerRecommandsSlider />
            </div>
        </>
    );
}
