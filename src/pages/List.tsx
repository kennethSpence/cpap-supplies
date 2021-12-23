import { Card, Container, Row } from "react-bootstrap";

const List = () => {
  return (
    <Container style={{paddingTop:'20px'}}>
      <Row>
        <Card>
            <Card.Header>
                List
            </Card.Header>
        </Card>
      </Row>
    </Container>
  );
};

export default List;
