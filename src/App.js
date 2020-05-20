import React from 'react';
import './App.css';
import { Switch, Route, withRouter } from 'react-router-dom';

// import APIK from '../src/APIKey'
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
    dailyWeatherData:[]
  }

  // USER ZIP Code needs to change
  componentDidMount(){
    fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=11230&units=imperial&appid=a6cb209a99baafd785ecd07da0491103`)
    .then (r => r.json())
    .then (data => {
      const _dailyWeatherData = data.list.filter(reading => reading.dt_txt.includes('18:00:00'))
      this.setState({
        fullWeatherData: data.list,
        dailyWeatherData: _dailyWeatherData
      })
    })
  }

  renderWeatherContainer = () => {
    return <WeatherContainer dailyWeatherData={this.state.dailyWeatherData}/>
  }

  render(){
    return (
      <div className="App">
        <Header/>
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
