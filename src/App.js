import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';
import Header from './components/Header'
import WeatherContainer from './containers/WeatherContainer'
import UserFormLogin from './components/UserFormLogin'
import UserFormRegister from './components/UserFormRegister'
import UserProfile from './components/UserProfile'

class App extends React.Component{

  // TASKS
  // [x] RENDER NAME OF CITY ON TO THE MAIN WEATHER CONTAINER
  // [x] REMOVE THE WEATHER ICON FROM THE MAINI WEATHER CONTAINER
  // RENDER THE WEATHER ICONS TO THE 5 DAY WEATHER CARDS
  // [x] AUTH USER LOGIN
  // USER ABLE TO POST NEW IMGS OF OUTFITS (FORM TO DEFINE OUTFITS, ADD A DROPDOWN TO SELECT THE SEASON FOR THE OUTFIT)
  // USER ABLE TO UPDATE NAME/SEASON OF THE OUTFITS
  // USER ABLE TO DELETE THE OUTFIT FROM THEIR LIST OF OUTFITS
  // USER ABLE TO GET RECOMMENDATIOSN BASED ON THE OUTFITS THEY INPUT


  state={
    user: {
      username:'',
      avatar:'',
      outfits: []
    },
    token: '',
    // Get the city name from the api
    cityNameWD: [],
    // gets the 5 day forcast from the api
    dailyWeatherData:[],
    // change it to an empty string!
    zipCode: ''
  }

  componentDidMount(){
    if (localStorage.token){
      fetch('http://localhost:3000/persist', {
        headers: {
          'Authorization': `Bearer ${localStorage.token}`
        }
      })
      .then(r => r.json())
      .then(this.handleResponse)
    }
    // Fetching the weather here
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
    .then (r => r.json())
    .then (data => {
      const _dailyWeatherData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'))
      this.setState({
        cityNameWD: data.city,
        dailyWeatherData: _dailyWeatherData
      })
    })
    .catch(console.error)
  }
  
  // Takes in the user Zipcode info
  handleSearchTerm = (userZipCode) => {
    this.setState({
      zipCode: userZipCode
    })
  }

  // renders the weather data for the zipcode entered by the user
  getData = (e) => {
    // console.log(e)
      fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${e}&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
      .then (r => r.json())
      .then(r => {
        const _dailyWeatherData = r.list.filter(reading => reading.dt_txt.includes('18:00:00'))
        this.setState({
          cityNameWD: r.city,
          dailyWeatherData: _dailyWeatherData
        })
      })
      .catch(console.error)
  }

  // USER LOGIN / REGISTER FORM
  handleLoginSubmit = (userInfo) => {
    console.log('login Form Submitted');
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)
  }

  handleRegisterSubmit = (userInfo) => {
    console.log('User registered');
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(this.handleResponse)  
  }

  handleResponse = (resp) => {
    if(resp.user){
      localStorage.token = resp.token
      this.setState(resp, () => {
        this.props.history.push('/user')
      })
    }
    else {
      alert(resp.error)
    }
  }
  
  // RENDER METHODS 
  // Weather Container here
  renderWeatherContainer = () => {
    return <WeatherContainer dailyWeatherData={this.state.dailyWeatherData} cityNameWD={this.state.cityNameWD}/>
  }
  // User login Form
  renderLoginForm = () => {
    return < UserFormLogin formName='Login' handleSubmit={this.handleLoginSubmit}/>
  }

  // User Register Form
  renderRegisterForm = () => {
      return <UserFormRegister formName='Register' handleSubmit={this.handleRegisterSubmit}/>
  }

  renderUserProfile = () => {
    return <UserProfile user={this.state.user}/>
  }
  
  render(){
    // console.log(this.state);
    return (
      <div className="App">
        <Header handleSearchTerm={this.handleSearchTerm} zipCode={this.state.zipCode} getData={this.getData}/>
        <Switch>
          <Route exact path = '/' render={this.renderWeatherContainer}/>
          <Route path='/login' render={this.renderLoginForm}/>
          <Route path='/register' render={this.renderRegisterForm}/>
          <Route path='/user' render={this.renderUserProfile}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
