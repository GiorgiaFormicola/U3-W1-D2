import { Container, Row, Col, Alert } from "react-bootstrap";

function Welcome() {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Alert variant="secondary" className="my-4 text-center px-4">
            <Alert.Heading className="fs-2">WELCOME TO EPIBOOKS</Alert.Heading>
            <hr />
            <p className="mb-0">The best book shop you've ever seen!</p>
          </Alert>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
