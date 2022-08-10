import React, { FC, useEffect, useState } from 'react';

import { LoadingProps } from './Loading.types';
import Span from '../Span';
import './Loading.scss';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Loading: FC<LoadingProps> = ({text, timeout, cursor, className, type, style}) => {
    const [counter, setCounter] = useState(0);
    const [direction, setDirection] = useState(true); //up (true) or down (false)
    const max = text.length;
    const classNamesLText = handleCssClassnames([
        'cl-themed__loading__text',
        type,
        className
    ]);

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

    return (<div className={`cl-themed__loading`}>
        <Span 
            className={classNamesLText} 
            style={style}  
        >
            {text.substring(0, counter)}
        </Span>
        {cursor && <Span 
            className={`cl-themed__loading__cursor ${type} blink`} 
        >|</Span>}
    </div>);
}

export default Loading;