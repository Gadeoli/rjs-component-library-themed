import React, { FC } from 'react';
import { CardContentProps } from './CardContent.types';
import { CardContent as StyledCardContent } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const CardContent: FC<CardContentProps> = ({children, className, style}) => {
    const {theme} = useTheme();
    
    return (<StyledCardContent 
        className={`cl-themed__card-content ${className}`} 
        style={style}
    >
        {children}
    </StyledCardContent>);
}

export default CardContent;