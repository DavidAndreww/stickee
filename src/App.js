import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Router from "./Router";
import Header from "./components/Header";

function App() {
  return (
    // <Provider store={store}>
      <BrowserRouter>
        <div className="app">
          <Header />
          <Router />
        </div>
      </BrowserRouter>
    // </Provider>
  );
}

export default App;
