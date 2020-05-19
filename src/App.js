import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import Header from './components/Header'
import SideBar from './Container/SideBar'
import UserDeck from './Container/UserDeck'
import SplashScreen from './components/SplashScreen'
import Form from './components/LoginForm'
import NotFound from './components/NotFound'


class App extends React.Component{
  //Step1: Create State
  //Step2: declare User/token/outfit hash similar to backend user table
  //Step3: Fetch User from backend using life Cycle 'ComponentDidMount' 
  //Step4: Fetch outfits
  //Step5: Setstate of outfits w/ fetched outfits
  //Step6: Create State
  
  state={
    user: {
      username:'',
      avatar:'',
      outfits: []
    },
    token: ''
  } 

  componentDidMount(){
    if(localStorage.token){
      fetch('http://localhost:3000/persist',{
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
    // Fetch weather api here if sending it down to a comp. else fetch in comp.
  }

  handleResponse = (response) => {
    if(response.user){
      localStorage.token = response.token
      this.setState( response, () => {
        // this.props.history.push("/username")
        // ^^^^ will redirect the correct logged in user to this page
      })
    }
    else{
      alert(response.error)
    }
  }

  // RENDER THE LOGIN/REGISTER FORM CONDITIONALLY
  renderForm = (routerProps) => {
    if (routerProps.location.pathname === '/login') {
      return <Form formName = 'Login' handleSubmit={this.handleLoginSubmit} />
    }
    else if (routerProps.location.pathname === '/register') {
      return <Form formName = 'Register' handleSubmit={this.handleRegiserSubmit}/>
    }
  }

  handleLoginSubmit = (userInfo) => {
    fetch(`http://localhost:3000/login/`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  // handleRegiserSubmit = (userInfo) => {
  //   fetch(`http://localhost:3000/users`, {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(userInfo)
  //   })
  //   .then(r => r.json())
  //   .then(this.handleResponse) 
  // }

  renderSplashScreen = () => {
    return <SplashScreen/>
  }

  // renderUserDeck = (routerProps) => {
  //   // return value is what gets slapped on the DOM
  //   // Components being returned cannot call lifecycle methods nicely
  //   let slugFromURL = routerProps.match.params.username
  //   console.log(slugFromURL);
  //   let foundUser = this.state.user.find(user => {
  //     return user.slug === slugFromURL
  //   })

  //   if (foundUser) {
  //     return <UserDeck/>
  //   } else {
  //     return <NotFound/>
  //   }
    
  // } 

  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          {/* SplashScreen */}
          <Route exact path = '/' render={this.renderSplashScreen}/>
          <Route path='/login' render={this.renderForm}/>
          <Route path='/register' render={this.renderForm}/>
          {/* <Route path='/user/:username' render={this.renderUserDeck}/> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
