import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './pages/Home'
import Products from './pages/Products'
import Records from './pages/Records'
import Record from './pages/Record'

function App() {


  return (
    <div className="App">
      
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
        <Route path="/records" exact component={Records} />
        <Route path="/records/:id" exact component={Record}/>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
