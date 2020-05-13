import React from 'react';
import { Switch, Route, withRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hi</h1>
      </div>
    )
  }
}

export default withRouter(App);
