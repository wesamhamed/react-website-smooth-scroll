import React from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import HomePage from "./pages/home";
import SignInPage from "./pages/signin";
import "./App.css";


function App() {
  return (
    <Router>
      <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/signin" component={SignInPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
