import React, { FC } from 'react';

import { TitleH1Props } from './TitleH1.types';
import { TitleH1 as StyledTitleH1 } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const TitleH1: FC<TitleH1Props> = ({children, className, loading, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__title-h1',
        loading ? 'loading-effect' : undefined,
        type,
        className
    ]);

    return (<StyledTitleH1 
        className={classNames} 
        theme={theme} 
        style={style}  
    >
        {!loading && children}
    </StyledTitleH1>);
}

export default TitleH1;