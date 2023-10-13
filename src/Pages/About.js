import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import myPhoto from "../Assets/me.jpg";
// import Home2 from "./Home2";
import Type from '../components/Type';

function About() {
  return (
    <>
      <Container fluid className="home-section" id="background">
        <Container className="home-content">
          <Row className='publication-row'>
            <Col md="3">
              <img
                src={myPhoto}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
            </Col>
            <Col md="8" className="publication-entry">
            My name is Haizhou Wang. hahahahahah
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default About;