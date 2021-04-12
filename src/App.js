import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {ProductProvider} from './ProductContext';
import Home from './pages/Home'
import Products from './pages/Products'

function App() {
  return (
    <div className="App">
      
    <Router>
      <Switch>
      <ProductProvider>
        <Route path="/" exact component={Home} />
        <Route path="/products" exact component={Products} />
      </ProductProvider>
      
      </Switch>
    </Router>

    </div>
  );
}

export default App;
