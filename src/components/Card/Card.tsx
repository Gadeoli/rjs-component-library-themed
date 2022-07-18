import React, { FC } from 'react';
import { CardProps } from './Card.types';
import { Card as StyledCard } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Card: FC<CardProps> = ({children, className, loading, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__card',
        type,
        loading ? 'loading' : undefined,
        className
    ]);

    return (<StyledCard 
        className={classNames} 
        theme={theme} 
        style={style} 
    >
        {children}
    </StyledCard>);
}

export default Card;