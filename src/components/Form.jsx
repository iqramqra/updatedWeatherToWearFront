import React, { Component } from 'react'

class Form extends Component {

    state = {
        username: '',
        password: ''
    }

    render() {
        let {formName} = this.props
        let {username, password} = this.state
        
        return (
            <Form onSubmit = {this.handleSubmit}>
                <h1>{formName}</h1>
                {/* USERNAME */}
                <label htmlFor='username'>username:</label>
                <input type='text' name='username' value={username} onChange={this.handleChange}/>
                {/* PASSWORD */}
                <label htmlFor='password'>password:</label>
                <input type= 'password' name='password' value={password} onChange={this.handleChange}/>
                {/* SUBMIT BTN */}
                <input type='submit' value='submit' className='auth' />
            </Form>
        )
    }
}

export default Form
