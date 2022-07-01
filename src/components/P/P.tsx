import React, { FC } from 'react';

import { PProps } from './P.types';
import { P as StyledP } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const P: FC<PProps> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledP 
        className={`cl-themed__p ${type} ${className}`} 
        theme={theme} 
        style={style}  
    >
        {children}
    </StyledP>);
}

export default P;