import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // Added import statement for Switch
import Toggle from "./components/toggleshow";
import Sideshow from "./components/sideshow";
import Header from './components/header'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch> {/* Added Switch component */}
          {/* <Route exact path="" component={Toggle} /> */}
          <Route path="" component={Header} />
        </Switch>
        {/* <Sideshow/> */}
        {/* <Header/> */}
      </div>
    </Router>
  );
}

export default App;
