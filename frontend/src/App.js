import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import your custom components/pages here
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import NotFound from './components/NotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Common layout elements (e.g., header, navigation) can go here */}
          
          <Routes>
            {/* Define your routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:id" component={ProductDetail} />
            <Route component={NotFound} /> {/* Display a 404 page for unknown routes */}
          </Routes>
          
          {/* Common layout elements (e.g., footer) can go here */}
        </div>
      </Router>
    );
  }
}

export default App;
