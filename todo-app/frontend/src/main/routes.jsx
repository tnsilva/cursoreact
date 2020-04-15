import React from 'react'
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router>
          <Switch>
            <Route exact path="/todos" component={Todo} />
            <Route exact path="/about" component={About} />
            <Redirect from="*" to="/todos" />
          </Switch>
        </Router>
        //<Redirect from="*" to="/todos" />
)