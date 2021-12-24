import { Container, Navbar, Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <Navbar bg={"primary"} variant="dark">
      <Container fluid>
        <Nav>
          <Navbar.Brand href="/">CPAP Supply Manager</Navbar.Brand>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/list">Supply List</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/user">User List</Nav.Link>
          </Nav.Item>
        </Nav>
        <Nav className={"justify-content-end"}>
          <Navbar.Text>
            <UserInfo />
          </Navbar.Text>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
