import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'
import SideBar from './pages/sidebar'

function Routers() {
  return (
    <Router>
      <Route exact path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/sidebar" component={SideBar} />
    </Router>
  )
}

export default Routers
