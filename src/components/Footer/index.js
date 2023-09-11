import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <Container>
      <Row>
        <Col className="p-5" style={{border:"2px solid red"}}>Hello World</Col>
      </Row>
    </Container>
  );
}

export default Footer;
