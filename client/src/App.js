import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Nav from './componenets/common/Nav'
import Home from './componenets/common/Home'

import Ital from './componenets/Ital'
import Grow from './componenets/Grow'

import CropShow from './componenets/crops/CropShow'


const App = () => {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/ital' component={Ital} />
        <Route path='/grow/:id' component={CropShow} />
        <Route path='/grow' component={Grow} />
      </Switch>
    </Router>
  )
}

export default App
