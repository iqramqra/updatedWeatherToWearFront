import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import 'weather-icons/css/weather-icons.css'
import Header from './components/Header'
import WeatherContainer from './containers/WeatherContainer'


class App extends React.Component{

  state={
    user: {
      username:'',
      avatar:'',
      outfits: []
    },
    token: '',
    fullWeatherData: [],
    dailyWeatherData:[],
    zipCode: '11230'
  }

  // USER ZIP Code needs to change
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
    // fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${this.state.zipCode}&units=imperial&appid=${apiConfig.owaKey}`)
    .then (r => r.json())
    .then (data => {
      const _dailyWeatherData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'))
      this.setState({
        fullWeatherData: data.list,
        dailyWeatherData: _dailyWeatherData
      })
    })
  }
  

  // // handles zipcode passedin in the form

  // constructor(props){
  //   super(props)
  //   this.handleZipCode = this.handleZipCode.bind(this)
  //   this.componentDidMount = this.componentDidMount.bind(this)
  // }


  handleSearchTerm = (userZipCode) => {
    this.setState({
      zipCode: userZipCode
    })
  }

  getData = (e) => {
    console.log(e)
    if (e.key === 'enter') {
      fetch (`http://api.openweathermap.org/data/2.5/forecast?zip=${e}&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
      .then (r => r.json())
      .then(r => {
        const _dailyWeatherData = r.list.filter(reading => reading.dt_txt.includes('18:00:00'))
        this.setState({
          fullWeatherData: r.list,
          dailyWeatherData: _dailyWeatherData
        })
        console.log(r)
      })
    }
  }
  

  // Redering pages and passing down info here
  
  renderWeatherContainer = () => {
    return <WeatherContainer dailyWeatherData={this.state.dailyWeatherData}/>
  }

  
  
  render(){
    console.log(this.state);
    // console.log(this.state.zipCode);
    return (
      <div className="App">
        <Header handleSearchTerm={this.handleSearchTerm} zipCode={this.state.zipCode} getData={this.getData}/>
        <Switch>
          <Route exact path = '/' render={this.renderWeatherContainer}/>
          {/* <Route path='/login' render={this.renderForm}/> */}
          {/* <Route path='/register' render={this.renderForm}/> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
