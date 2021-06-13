import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/Login";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <div className="app">
      <Router>
        <Route path="/" exact={true} component={Login} />
        <Route path="/signup" exact={true} component={SignUp} />
      </Router>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
