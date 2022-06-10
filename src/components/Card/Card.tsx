import React, { FC } from 'react';
import { CardProps } from './Card.types';
import { Card as StyledCard } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Card: FC<CardProps> = ({children, className, loading, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledCard 
        className={`cl-themed-card ${type} ${loading && 'loading'}  ${className}`} 
        theme={theme} 
        style={style} 
    >
        {children}
    </StyledCard>);
}

export default Card;