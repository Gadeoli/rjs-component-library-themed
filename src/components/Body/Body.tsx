import React, { FC } from 'react';
import { BodyProps } from './Body.types';
import { Body as StyledBody } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Body: FC<BodyProps> = ({children, className, style}) => {
    const {theme} = useTheme();
    
    return (<StyledBody 
        className={`cl-themed-body ${className}`} 
        theme={theme} 
        style={style}
    >
        {children}
    </StyledBody>);
}

export default Body;