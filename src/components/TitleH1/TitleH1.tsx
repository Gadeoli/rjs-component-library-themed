import React, { FC } from 'react';

import { TitleH1Props } from './TitleH1.types';
import { TitleH1 as StyledTitleH1 } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const TitleH1: FC<TitleH1Props> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledTitleH1 
        className={`cl-themed__title-h1 ${type} ${className}`} 
        theme={theme} 
        style={style}  
    >
        {children}
    </StyledTitleH1>);
}

export default TitleH1;