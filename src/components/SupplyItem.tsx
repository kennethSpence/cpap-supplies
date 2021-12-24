import { Card, Container } from "react-bootstrap";

const SupplyItem = () => {


    const testItem = {
        name: 'Test Item',
        brand: 'Test Brand',
        description: 'Test description for this item.',
        dateAcquired: null,
    }

  return (

      <Card>
        <Card.Header>
            {testItem.name}
        </Card.Header>
        <Card.Text>

            Brand: {testItem.brand}
            <br />
            Description: {testItem.description}
        </Card.Text>
      </Card>

  );
};

export default SupplyItem;
