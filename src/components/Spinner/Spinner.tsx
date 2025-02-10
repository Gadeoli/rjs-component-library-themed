import React, { FC } from 'react';
import { SpinnerProps } from './Spinner.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { Spinner as StyledSpinner } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Spinner: FC<SpinnerProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinner
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        $customColor={customColor}
    >
        <div></div><div></div><div></div><div></div>
    </StyledSpinner>);
}

export default Spinner;