import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className={"fluid"}>
      <Header />
      <Home />
    </div>
  );
}

export default App;
