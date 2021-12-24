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
              <ListGroup>
                <Row>
                  <Col>
                    <ListGroupItem>
                      <SupplyItem />
                    </ListGroupItem>
                    <ListGroupItem>
                      <SupplyItem />
                    </ListGroupItem>
                  </Col>
                  <Col>
                    <ListGroupItem>
                      <SupplyItem />
                    </ListGroupItem>
                    <ListGroupItem>
                      <SupplyItem />
                    </ListGroupItem>
                  </Col>
                </Row>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default List;
