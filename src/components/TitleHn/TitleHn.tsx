import React, { FC } from 'react';

import { TitleHnProps } from './TitleHn.types';
import { TitleHn as StyledTitleHn } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const TitleHn: FC<TitleHnProps> = ({n, children, className, loading, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__title-hn',
        loading ? 'loading-effect' : undefined,
        type,
        className
    ]);

    return (<StyledTitleHn
        n={n}
        className={classNames} 
        theme={theme} 
        style={style}  
    >
        {!loading && children}
    </StyledTitleHn>);
}

export default TitleHn;