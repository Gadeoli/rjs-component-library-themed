import React, { FC } from 'react';

import { TitleHnProps } from './TitleHn.types';
import { TitleHn as StyledTitleHn } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const TitleHn: FC<TitleHnProps> = ({n, children, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledTitleHn
        n={n}
        className={`cl-themed__title__hn ${type} ${className}`} 
        theme={theme} 
        style={style}  
    >
        {children}
    </StyledTitleHn>);
}

export default TitleHn;