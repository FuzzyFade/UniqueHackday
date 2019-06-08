import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './pages/login'
import Home from './pages/home'
import Following from './pages/following'
import Follower from './pages/follower'
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
      <Route exact path="/following/" component={Following} />
      <Route exact path="/follower/" component={Follower} />
      <Route exact path="/message/" component={Message} />
      <Route exact path="/collection/" component={Collection} />
      <Route exact path="/new/" component={New} />
      <Route exact path="/mine/" component={Mine} />
    </Router>
  )
}

export default Routers
