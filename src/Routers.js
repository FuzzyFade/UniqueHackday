import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'
import Mine from './pages/mine'

function Routers() {
  return (
    <Router>
      <Route exact path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/mine" component={Mine} />
    </Router>
  )
}

export default Routers
