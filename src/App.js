import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import FormLogin from './components/FormLogin';
import AddData from './components/AddData';

class App extends Component {

  render() {
    return (
      <div className="body">
        <Switch>                
          <Route exact path="/" component={FormLogin} />
        </Switch>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/:addData" component={AddData} />
        </Switch>
        <Switch>
          <Route exact path="/contact" component={Contact} />
        </Switch>
        <Switch>
          <Route exact path="/about" component={About} />
        </Switch>
      </div>
    );
  }
}

export default App;
