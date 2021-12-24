import { Card, Container, Row, Col } from "react-bootstrap";
import User from "../components/User";

const UserList = () => {
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col>
          <Card border="primary">
            <Card.Header>
              <Card.Title>User List</Card.Title>
            </Card.Header>

            <Card.Body>
              <Row>
                <Col>
                  <User />
                  <User />
                </Col>
                <Col>
                  <User />
                  <User />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserList;
