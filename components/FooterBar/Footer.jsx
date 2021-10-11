import React from 'react';
import "./Footer.css";
import { Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <footer className='footer'>
      <Row className='footer-bar-row'>
        <Col sm={12} md={6} className='about-site'>
          Peer Anfon © {new Date().getFullYear()} - All Rights Reserve.
        </Col>
        <Col sm={12} md={6} className='copyright-span'>
          Designed & Dev by{" "}
          <a className='developer-name' href="https://github.com/NaorAnhaisy" target="_blank" rel="noreferrer noopener">
            Naor Anhaisy
          </a>
        </Col>
      </Row>
    </footer>
  );
}
