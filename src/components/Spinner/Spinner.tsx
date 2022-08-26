import React, { FC } from 'react';
import { SpinnerProps } from './Spinner.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { Spinner as StyledSpinner } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Loading: FC<SpinnerProps> = ({size, type, className, style}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner',
        type,
        className
    ]);

    return (<StyledSpinner
        theme={theme}
        size={size}
        className={classNames}
        style={style}
    >Loading...</StyledSpinner>);
}

export default Loading;