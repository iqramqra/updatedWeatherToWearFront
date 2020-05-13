import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {

  render() {
    return (
      <div>
        {/* <NavBar/> */}
        <Switch>
        {/* 
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/login' render={this.renderLoginForm}/>
         */}

        </Switch>
      </div>
    )
  }
}

export default withRouter(App);
