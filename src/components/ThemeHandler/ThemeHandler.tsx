import React, { createContext, useContext, FC } from 'react';

import { ThemeHandlerProps, ThemeValueProps, setThemeProps } from './ThemeHandler.types';
import { usePersistedState } from '@gadeoli/rjs-hooks-library';

export const initialThemeValues : ThemeValueProps = {
    primary:    "",
    secondary:  "",
    success:    "",
    danger:     "",
    
    background: "",
    body:       "",
    link:       "",
    outline:    "",
    text:       "",

    fonts: {
        primary:    "",
        secondary:  "",
    },

    fontSize: {
        title:      "",
        subtitle:   "",
        text:       ""
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