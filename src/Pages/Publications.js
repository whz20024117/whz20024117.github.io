import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/cyber_theme.jpg";
// import Home2 from "./Home2";
import Type from '../components/Type';

function Publications() {
  return (
    <>
      <Container fluid className="home-section" id="background">
        <Container className="home-content">
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            Haizhou Wang, Anoop Singhal, and Peng Liu. Tackling imbalanced data in cybersecurity with transfer learning: a case with rop payload
            detection. Cybersecurity, 6(1):1-15, 2023
            </Col>
            <Col md="3"></Col>
          </Row>
          <Row className='publication-row'>
            <Col md="2"></Col>
            <Col md="8" className="publication-entry">
            Xusheng Li, Zhisheng Hu, Haizhou Wang, Yiwei Fu, Ping Chen, Minghui Zhu, and Peng Liu. Deepreturn: A deep neural network can learn
            how to detect previously-unseen rop payloads without using any heuristics. Journal of Computer Security, (Preprint):1–25, 2020
            </Col>
            <Col md="3"></Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Publications;