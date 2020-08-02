import React from "react";

import "./App.css";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard"
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </div>
    </BrowserRouter>
  );
}

export default App;

