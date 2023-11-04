import React, { FC } from 'react';
import { CardProps } from './Card.types';
import { Card as StyledCard } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Card: FC<CardProps> = ({children, className, loading, type, style, forceBorder = false}) => {
    const {theme, mode} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__card',
        type,
        forceBorder ? 'force-border' : undefined,
        loading ? 'loading-effect-card' : undefined,
        className
    ]);

    return (<StyledCard 
        className={classNames} 
        theme={theme} 
        themeMode={mode}
        style={style} 
    >
        {children}
    </StyledCard>);
}

export default Card;