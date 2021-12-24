import { Card } from "react-bootstrap";

const SupplyItem = () => {
  const testItem = {
    name: "Test Item",
    brand: "Test Brand",
    description: "Test description for this item.",
    dateAcquired: null,
  };

  return (
    <Card>
      <Card.Header>
        <Card.Title>{testItem.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Brand: {testItem.brand}
          <br />
          Description: {testItem.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default SupplyItem;
