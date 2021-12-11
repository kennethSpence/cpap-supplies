import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import { Container } from "react-bootstrap";

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
