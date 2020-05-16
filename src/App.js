import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

import UserDashboard from './container/UserDashboard'


class App extends React.Component {

  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <UserDashboard/>
        {/* <Switch> 
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
        </Switch> */}
      </div>
    )
  }
}

export default withRouter(App);