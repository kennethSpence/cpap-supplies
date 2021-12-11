import { Container, Navbar, Nav } from "react-bootstrap";
import UserInfo from "./UserInfo";


const Header = () => {
  return (
    <Navbar bg={"primary"}>
      <Container fluid>
        <Nav>
          <Navbar.Brand>CPAP Supply Manager</Navbar.Brand>
        </Nav>
        <Nav className={"justify-content-end"}>
          <UserInfo />
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
