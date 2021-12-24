import { Card } from "react-bootstrap";

const User = () => {
  const testItem = {
    name: "Kenneth Spence",
    email: "kenneth.spence@yahoo.com",
  };

  return (
    <Card border="warning" className="mb-2"> 
      <Card.Header>
        <Card.Title>{testItem.name}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Email: {testItem.email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
