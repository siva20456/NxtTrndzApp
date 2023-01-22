import {Component} from 'react'
import {Route,Switch} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'

import './App.css'

class App extends Component{
  render(){
    return(
      <Switch>
        <Route exact path='/' component = {Home} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
    )
  }
}

export default App;
