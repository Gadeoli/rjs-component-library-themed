import React, { FC, useEffect, useState } from 'react';

import { LoadingProps } from './Loading.types';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import './Loading.scss';

const Loading: FC<LoadingProps> = ({text, timeout, cursor, className, type, style}) => {
    const {theme} = useTheme();
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(true); //up (true) or down (false)
    const max = text.length;

    useEffect(() => {
        let writter = setTimeout(() => {            
            if(direction){
                switch (counter) {
                    case !cursor ? max : max + 2:
                        setDirection(false);
                        break;
                    default:
                        setCounter(counter + 1);
                        break;
                }
            }else{
                switch (counter) {
                    case 0:
                        setDirection(true);
                        break;
                    default:
                        setCounter(counter - 1);
                        break;
                }
            }     
        }, timeout || 500);

        return () => {
            clearTimeout(writter);
        }
    });

    return (<div className={`cl-themed-loading`}>
        <Span 
            className={`cl-themed-loading-text ${type} ${className}`} 
            theme={theme} 
            style={style}  
        >
            {text.substring(0, counter)}
        </Span>
        {cursor && <Span 
            className={`cl-themed-loading-cursor ${type} blink`} 
            theme={theme} 
        >|</Span>}
    </div>);
}

export default Loading;