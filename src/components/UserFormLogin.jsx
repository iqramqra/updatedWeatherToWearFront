import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

class UserForm extends Component {

  state = {
    username: "",
    password: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit(this.state)
  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    let {formName} = this.props
    let {username, password} = this.state

    return (
      // {renderThis}
      <form className='loginForm' onSubmit={this.handleSubmit}>
        <h1>{formName}</h1>
        <TextField id="outlined-basic" label="Username" name= 'username' variant="outlined" value={username} onChange={this.handleChange} />
  
        <TextField id="outlined-basic" type='password' name='password' label="Password" variant="outlined" value={password} onChange={this.handleChange} />
        <input type="submit" value="Submit"/>
      </form>
    )
  }
}

export default UserForm;