import React from 'react';
import './App.css';
import Home from './component/Home';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/search">
          <h1>this is search page</h1>
          </Route>
          <Route path="/">
          <Home/>
          </Route>
        </Switch>
  
    </Router>
     </div>
  );
}

export default App;
