import React, {Component} from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class Navbar2 extends Component { //this is for context consume!! consumer can be use for functional component as well.
    static contextType = ThemeContext;
    render () {
        return (
            <ThemeContext.Consumer>  
                {(context) =>{ //take in an argument, ThemeContext.Consumer must wrap around everything
                const { isLightTheme, light, dark } = this.context; //put the data from the context in this the function
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style= {{background: theme.ui, color: theme.syntax}}>
                    <h1>Context App</h1>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                    </nav>

                )
            }}

            </ThemeContext.Consumer>
        );
    }
}

export default Navbar2;