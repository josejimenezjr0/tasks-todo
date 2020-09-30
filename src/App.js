import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './components/Home.js'
import Nav from './components/Nav.js'

class App extends Component {
  render() {
    return (
      <div className="bg-gray-600 h-screen">
        <Router>
          <Nav />
          <Switch>
            <Route component={ Home } exact path='/'/>
        </Switch>
        </Router>
      </div>
    )
  }
}

export default App