import React, { FC } from 'react';
import { SpinnerDotsCircleProps } from './SpinnerDotsCircle.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { SpinnerDotsCircle as StyledSpinnerDotsCircle } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const SpinnerDotsCircle: FC<SpinnerDotsCircleProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner-dots-circle',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinnerDotsCircle
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        customColor={customColor}
    >
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </StyledSpinnerDotsCircle>);
}

export default SpinnerDotsCircle;