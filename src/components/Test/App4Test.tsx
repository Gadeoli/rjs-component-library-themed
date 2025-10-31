import React, { useEffect, useState } from 'react';
import Toggle from '../Toggle';
import  ThemeHandler, { 
        ThemeContext, 
        darkThemeKey,
        lightThemeKey
} from "../ThemeHandler";
import GlobalStyle from '../GlobalStyle';
import Span from '../Span';
import Card from '../Card';
import { CardContent } from '../../styled-components/Common/Common';
import { getDefaultThemeValues } from './values';

interface HandlerTestProps{
    children: React.ReactNode;
};

const ThemeInit = ({
    version,
    setVersion,

    mode, 
    setMode,

    setLightValues,
    setDarkValues
} : any) => {    
    const themeValues = getDefaultThemeValues();

    //set initial theme
    //and update current theme values after update theme (light, dark) values
    useEffect(() => {
        setMode(mode);
    }, [version]);

    //set theme values (simplest case)
    //you can get values from store, from a api request, from both etc...
    useEffect(() => {
        const newVersion = !version ? 0 : version + 1;

        setDarkValues(themeValues.dark);
        setLightValues(themeValues.light);

        setVersion(newVersion); //remember to update theme version after change values
    }, []);

    return (<GlobalStyle />);
}

const App4Test = (props: HandlerTestProps) => {
    return <ThemeHandler>
        <ThemeContext.Consumer>{(props) => <ThemeInit {...props}/>}</ThemeContext.Consumer>

        <ThemeContext.Consumer>
            {({
                mode, 
                setMode
            }) => {    
                return <>
                    <Card style={styles.card}>
                        <CardContent style={styles.card.content}>
                            <Span style={styles.toggle.text}>Current theme: {mode}</Span>
                            <Toggle
                                value={mode}
                                checkedValue={lightThemeKey}
                                uncheckedValue={darkThemeKey}
                                onChange={(value: any) => {
                                    setMode(value);
                                }}
                            />
                        </CardContent>
                    </Card>
                </>;
            }}
        </ThemeContext.Consumer>
        {props.children}
    </ThemeHandler>
}

export default App4Test;

const styles = {
    card: {
        marginBottom: '20px',

        content: {
            display: 'flex'
        }
    },
    toggle: {
        text: {
            marginRight: '20px'
        }
    }
};

