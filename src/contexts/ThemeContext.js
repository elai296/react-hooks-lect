import React, { createContext, Component} from 'react';
export const ThemeContext = createContext ();

class ThemeContextProvider extends Component {
    state = {
        isLightTheme: true, 
        light: { syntax: '#555', ui: '#ddd', bg: '#eee'},
        dark: { syntax: '#ddd', ui: '#333', bg: '#555'}
     } //share data

     toggleTheme = () => {
         this.setState( {isLightTheme: !isLightTheme});
     }

    render() {
        return (
            <ThemeContext.Provider value={{...this.state}}> 
                {this.props.children}
            </ThemeContext.Provider>
          );
    }
}

export default ThemeContextProvider;
