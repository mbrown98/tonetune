// import logo from './logo.svg';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/layout/NavBar";
import Index from "./components/layout/Index";
import { Provider } from "./context";
function App() {
  return (
    <Provider>
      {" "}
      <Router>
        {" "}
        <React.Fragment>
          {" "}
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
