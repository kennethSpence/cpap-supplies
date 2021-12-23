import { Container } from "react-bootstrap";

import './App.scss';


import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <Container fluid>
      <Header />
      <Home />
      <Home />
    </Container>
  );
}

export default App;
