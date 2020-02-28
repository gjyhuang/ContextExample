import React from 'react';
import {Routes} from './Components/Routes';
import ThemeContext from './Components/ThemeContext';
import themeStyles from './Components/styles/themeStyles';
import './App.css';

function App() {
  const [theme, setTheme] = React.useState("light");
  return (
    <div className="App">
      <ThemeContext.Provider value={{currTheme: theme, setCurrTheme: (themeName) => setTheme(themeName)}}>
        <Routes/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
