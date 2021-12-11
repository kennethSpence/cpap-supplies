import { Container, Navbar, Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";

const Header = () => {
  return (
    <Navbar bg={"primary"} variant="dark">
      <Container fluid>
        <Nav>
          <Navbar.Brand>CPAP Supply Manager</Navbar.Brand>
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
