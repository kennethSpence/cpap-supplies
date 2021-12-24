import {
  Card,
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import SupplyItem from "../components/SupplyItem";

const List = () => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col>
          <Card border="primary">
            <Card.Header>
              <Card.Title>Supply List</Card.Title>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <SupplyItem />
                  <SupplyItem />
                </Col>
                <Col>
                  <SupplyItem />
                  <SupplyItem />
                </Col>
              </Row>
              
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
