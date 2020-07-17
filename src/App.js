import React from 'react';
// import Navbar from './components/Navbar';
import Booklist from './components/Booklist';
import ThemeContextProvider from './contexts/ThemeContext';
import Navbar2 from './components/Navbar2'; //consumer context


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar2 />
        <Booklist />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
