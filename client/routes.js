import React, {Component} from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {AllEmployees, SingleEmployee} from './components'

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={AllEmployees} />
        <Route path="/employees/1" component={SingleEmployee} />
      </Switch>
    )
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(Routes)
