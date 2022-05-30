import React, { FC } from 'react';

import { SpanProps } from './Span.types';
import { Span as StyledSpan } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Button: FC<SpanProps> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledSpan 
        className={`cl-themed-button ${type || 'primary'} ${className}`} 
        theme={theme} 
        style={style}  
    >
        {children}
    </StyledSpan>);
}

export default Button;