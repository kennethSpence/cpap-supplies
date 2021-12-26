import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import User from "../components/User";
type MyProps = {};
type MyState = { users: [{ fullName: string; emailAddress: string }] };

class UserList extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      users: [
        { fullName: "Kenneth Spence", emailAddress: "kenneth.spence@yahoo.com" },
      ],
    };
  }

  componentDidMount() {
    // fetch("http://localhost:1337/user")
    //   .then((res) => res.json())
    //   .then((data) => {
    //     this.setState({ users: data });
    //   })
    //   .catch(console.log);
  }

  render() {
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
                  {this.state.users.map((user) => {
                    return <User user={{
                        fullName: user.fullName,
                        email: user.emailAddress
                    }}   />;
                  })}
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default UserList;
