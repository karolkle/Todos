import React, { Component } from 'react';
import './App.css';
import Tasks from './components/UI/Task'
import New from './components/UI/New'
//import New from './containers/New/New'
//import Task from './containers/Task/Task'
//import Overlay from '../Layout/Overlay/Overlay'
import {BrowserRouter, Route, Switch} from 'react-router-dom'


class App extends Component {

  
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/new" component={New} />
          <Route exact path="/" component={Tasks} />
          <Route path="/" component={Tasks} />
         </Switch>
        </BrowserRouter>
    )
}
}

export default App;