import React, { FC } from 'react';

import { SpanProps } from './Span.types';
import { Span as StyledSpan } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Span: FC<SpanProps> = ({children, className, loading, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__span',
        loading ? 'loading-effect' : undefined,
        type,
        className
    ]);
    
    return (<StyledSpan 
        className={classNames} 
        theme={theme} 
        style={style}  
    >
        {!loading && children}
    </StyledSpan>);
}

export default Span;