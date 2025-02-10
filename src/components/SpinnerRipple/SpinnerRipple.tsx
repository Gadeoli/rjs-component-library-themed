import React, { FC } from 'react';
import { SpinnerRippleProps } from './SpinnerRipple.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { SpinnerRipple as StyledSpinnerRipple } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const SpinnerRipple: FC<SpinnerRippleProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner-ripple',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinnerRipple
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        $customColor={customColor}
    >
        <div></div><div></div>
    </StyledSpinnerRipple>);
}

export default SpinnerRipple;