import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../Assets/cyber_theme.jpg";
// import Home2 from "./Home2";
import Type from '../components/Type';

function Home() {
  return (
    <>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md="7" className="home-header">
              {/* <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1> */}

              <h1 className="heading-name">
                Hello, welcome to <br/>
                <strong className="main-name"> Haizhou Wang </strong>'s <br />
                Personal Page
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md="5" style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home;