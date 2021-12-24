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
            <Card.Header>Supply List</Card.Header>
            <Card.Body>
              <ListGroup>
                <ListGroupItem variant="primary">
                  <SupplyItem />
                </ListGroupItem>
                <ListGroupItem variant="primary">
                  <SupplyItem />
                </ListGroupItem>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
