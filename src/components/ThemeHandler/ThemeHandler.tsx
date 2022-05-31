import React, { createContext, useContext, FC } from 'react';

import { ThemeHandlerProps, ThemeValueProps, setThemeProps } from './ThemeHandler.types';
import { usePersistedState } from '@gadeoli/rjs-hooks-library';

export const initialThemeValues : ThemeValueProps = {
    primary:        "#FFF",
    primary_text:   "#FFF",

    secondary:      "#FFF",
    secondary_text: "#FFF",
    
    success:        "#FFF",
    success_text:   "#FFF",
    
    danger:         "#FFF",
    danger_text:    "#FFF",
    
    background: "#FFF",
    body:       "#FFF",
    link:       "#FFF",
    outline:    "#FFF",
    text:       "#FFF",

    fonts: {
        primary:    "sans-serif",
        secondary:  "sans-serif",
    },

    fontSize: {
        title:      "32",
        subtitle:   "24",
        text:       "12"
    },

    custom : {}
};

const initialSetTheme : setThemeProps = () => {}

const initialContextValues = {
    theme: {...initialThemeValues},
    setTheme: initialSetTheme
}

export const ThemeContext = createContext({...initialContextValues});

const ThemeHandler: FC<ThemeHandlerProps> = ({children}) => {
    const [themePersisted, setThemePersisted] = usePersistedState('@rjs-theme-values', {...initialThemeValues})

    return (<ThemeContext.Provider value={{
        theme: themePersisted,
        setTheme: (values: object) => setThemePersisted(values) 
    }}>
        {children}
    </ThemeContext.Provider>)
}

export const useTheme = () => useContext(ThemeContext);

export default ThemeHandler;