import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'
import Follow from './pages/follow'
import Register from './pages/register'
import register from './pages/register';

function Routers() {
  return (
    <Router>
      <Route exact path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register/" component={register} />
      <Route exact path="/follow/" component={Follow} />
    </Router>
  )
}

export default Routers
