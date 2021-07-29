import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './components/common/Nav'
import Home from './components/common/Home'
import Footer from './components/common/Footer'

import SimmerDown from './components/SimmerDown'
import RumUp from './components/RumUp'
import Ital from './components/Ital'
import Grow from './components/Grow'

import CropShow from './components/crops/CropShow'
import CropEdit from './components/crops/CropEdit'
import CropNew from './components/crops/CropNew'

import Register from './components/auth/Register'
import Login from './components/auth/Login'


const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/grow/:id/edit' component={CropEdit} />
        <Route path='/grow/new' component={CropNew} />
        <Route path='/grow/:id' component={CropShow} />
        <Route path='/simmerdown' component={SimmerDown} />
        <Route path='/rumup' component={RumUp} />
        <Route path='/grow' component={Grow} />
        <Route path='/ital' component={Ital} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default App
