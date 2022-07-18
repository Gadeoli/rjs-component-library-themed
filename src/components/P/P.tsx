import React, { FC } from 'react';

import { PProps } from './P.types';
import { P as StyledP } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const P: FC<PProps> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__p',
        type,
        className
    ]);
    
    return (<StyledP 
        className={classNames} 
        theme={theme} 
        style={style}  
    >
        {children}
    </StyledP>);
}

export default P;