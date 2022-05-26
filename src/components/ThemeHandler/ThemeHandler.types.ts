import React from "react";

export interface ThemeHandlerProps {
    // setTheme (theme: object) : any;
    children: React.ReactNode
}

export interface setThemeProps {
    (theme: object) : any
};

export interface ThemeValueProps {
    primary:    string;
    secondary:  string;
    success:    string;
    danger:     string;
    
    background: string;
    body:       string;
    link:       string;
    outline:    string;
    text:       string;

    fonts:      ThemeFontValueProps;
    fontSize:   ThemeFontSizeValueProps;

    custom:     object;
};

export interface ThemeFontValueProps {
    primary:    string;
    secondary:  string;
}

export interface ThemeFontSizeValueProps {
    title:      string;
    subtitle:   string;
    text:       string;
}