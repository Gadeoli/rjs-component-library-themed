import React, { FC } from 'react';

import { PProps } from './P.types';
import { P as StyledP } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const P: FC<PProps> = ({children, className, loading, type, style, onClick = () => {}}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__p',
        loading ? 'loading-effect' : undefined,
        type,
        className
    ]);
    
    return (<StyledP 
        className={classNames} 
        theme={theme} 
        style={style}  
        onClick={onClick}
    >
        {!loading && children}
    </StyledP>);
}

export default P;