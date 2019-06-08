import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'
import Follow from './pages/follow'
import Register from './pages/register'
import Message from './pages/message'
import Collection from './pages/collection'
import New from './pages/new'
import Mine from './pages/mine'

function Routers() {
  return (
    <Router>
      <Route exact path="/home/" component={Home} />
      <Route exact path="/" component={Login} />
      <Route exact path="/register/" component={Register} />
      <Route exact path="/follow/" component={Follow} />
      <Route exact path="/message/" component={Message} />
      <Route exact path="/collection/" component={Collection} />
      <Route exact path="/new/" component={New} />
      <Route exact path="/mine" component={Mine} />
    </Router>
  )
}

export default Routers
