import React, { useContext } from 'react';
import themeStyles from './styles/themeStyles';
import ThemeContext from '../Components/ThemeContext';

const ThemeButton = () => {
    let theme = useContext(ThemeContext);
    console.log(theme)

    const handleChangeTheme = () => {
        let themeArr = Object.keys(themeStyles);
        let currIdx = themeArr.indexOf(theme.currTheme);
        console.log(currIdx)
        if (currIdx === themeArr.length - 1) {
            theme.setCurrTheme(themeArr[0]);
        } else {
            theme.setCurrTheme(themeArr[currIdx+1])
        }
    }

    return (
        <>
        <div style={themeStyles[theme.currTheme]}>Something</div>
        <button onClick={handleChangeTheme}>Change Theme</button>
        </>
    )
}

export default ThemeButton;
