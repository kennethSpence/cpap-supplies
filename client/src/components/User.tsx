import { Card } from "react-bootstrap";

interface userProps {
    user: {
        fullName: string,
        email: string
    }

}

const User = ({user}: userProps) => {

  return (
    <Card border="warning" className="mb-2"> 
      <Card.Header>
        <Card.Title>{user.fullName}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          Email: {user.email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default User;
