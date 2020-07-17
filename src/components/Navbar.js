import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar extends Component {
  static contextType = ThemeContext; //this allows to pass data to individual component

  render() { 
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark ;
    return ( 
      console.log("this context:", this.context),
      // const { isLightTheme, light, dark = this.context}; 
      // const them = isLightTheme ? light : dark;
      <nav style= { {background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}
 
export default Navbar;