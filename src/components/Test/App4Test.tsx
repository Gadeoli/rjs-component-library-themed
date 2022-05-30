import React, { Children } from 'react';

import ThemeHandler, { ThemeContext, initialThemeValues } from "../ThemeHandler";

const myTheme = {...initialThemeValues};
    
myTheme.primary =    "#1D1E26";  
myTheme.secondary =  "#FCCC29";
myTheme.success =    "#ACF39D";
myTheme.danger =     "#E85F5C";

myTheme.background = "#FFFFFF";
myTheme.body =       "#F1F1F1";
myTheme.link =       "#0000EE";
myTheme.outline =    "#FF7F50";
myTheme.text =       "#333333";

myTheme.fonts.primary =   "sans-serif";
myTheme.fonts.secondary = "sans-serif";

myTheme.fontSize.title =      "32";
myTheme.fontSize.subtitle =   "24";
myTheme.fontSize.text =       "12";

myTheme.custom = {};

interface HandlerTestProps{
    children: React.ReactNode;
};

const App4Test = (props: HandlerTestProps) => {
    return <ThemeHandler>
        <ThemeContext.Consumer>
            {({setTheme}) => { 
                setTimeout(() => {
                    setTheme(myTheme);
                }, 1000)
                return <></>;
            }}
        </ThemeContext.Consumer>
        {props.children}
    </ThemeHandler>
}

export default App4Test;