import { Row, Col, Container, Nav} from 'react-bootstrap'

export default function Navigation() {
    return (
        <Container className="p-3 bg-dark text-white w-100 ">
          <Row>
            <Col>
              <div>Recipe Time!🥗</div>
            </Col>
            <Col>
              <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
            </Col>
          </Row>
      </Container>
    )
}