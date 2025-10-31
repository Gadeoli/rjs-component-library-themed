import React, { FC } from 'react';

import { BadgeProps } from './Badge.types';
import { Badge as StyledBadge } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Badge: FC<BadgeProps> = ({id, children, className, loading, type, style, onClick = () => {}}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__badge',
        loading ? 'loading-effect' : undefined,
        type,
        className
    ]);
    
    return (<StyledBadge 
        id={id}
        className={classNames} 
        theme={theme} 
        style={style}  
        onClick={onClick}
    >
        {!loading && children}
    </StyledBadge>);
}

export default Badge;