import React from "react";
import { render } from "@testing-library/react"

import Button from "./Button";
import ThemeHandler, { ThemeContext, initialThemeValues } from "../ThemeHandler";

const compName = "Button"

describe(compName, () => {
    const myTheme = {...initialThemeValues};
    
    myTheme.primary =    "#1D1E26";  
    myTheme.secondary =  "#FCCC29",
    myTheme.success =    "#ACF39D",
    myTheme.danger =     "#E85F5C",
    
    myTheme.background = "#FFFFFF",
    myTheme.body =       "#F1F1F1",
    myTheme.link =       "#0000EE",
    myTheme.outline =    "#FF7F50",
    myTheme.text =       "#333333",

    myTheme.fonts.primary =   "sans-serif";
    myTheme.fonts.secondary = "sans-serif";

    myTheme.fontSize.title =      "32";
    myTheme.fontSize.subtitle =   "24";
    myTheme.fontSize.text =       "12";
    
    myTheme.custom = {};

    test(`Renders the ${compName} component`, () => {
        render(<ThemeHandler>
            <ThemeContext.Consumer>
                {({theme, setTheme}) => { 
                    setTheme(myTheme);
                    return <Button onClick={() => console.log('Hey!')}><span>abc</span></Button>
                }}
            </ThemeContext.Consumer>

            
        </ThemeHandler>);
    })
})