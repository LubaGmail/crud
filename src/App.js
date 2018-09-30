import React, { Component } from 'react';
import './App.css';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Products from './components/Products';

class App extends Component {

  render() {
    return (

      <div className='appDiv'>
        <h2>App</h2>
        <Products />
      </div>

    );
  }
}
export default App;
