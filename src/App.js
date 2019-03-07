import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './component/MenuComponent';
import { DISHES } from './shared/dishes.js';
import Main from './component/MainComponent';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
       <div className="App">
         <Main />
       </div>
     </BrowserRouter>
    );
  }
}

export default App;
