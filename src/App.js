import React from "react";
import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;
