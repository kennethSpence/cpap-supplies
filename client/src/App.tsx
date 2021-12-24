import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import List from "./pages/List";

function App() {
  return (
    <Container fluid>
      <Header />
      <Router>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </Router>
   

    </Container>
  );
}

export default App;
