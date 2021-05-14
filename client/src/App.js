import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import SavedBook from "./pages/SavedBook";
import "./App.css";




function App() {
  return (
      <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/saved" component={SavedBook} />
        </Switch>
      </div>
      </Router>
    );
  }

export default App;