import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"; // Added import statement for Switch
import Header from "./components/header";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="" component={Header} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
