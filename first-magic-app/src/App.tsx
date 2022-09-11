import React from "react";
import "./App.css";
import Homepage from "./modules/Homepage/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cardpage from "./modules/Cardpage/Cardpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/card/:id">
            <Cardpage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
