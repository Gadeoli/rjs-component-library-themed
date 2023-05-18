import React, { FC } from 'react';
import { SpinnerDotsProps } from './SpinnerDots.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { SpinnerDots as StyledSpinnerDots } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const SpinnerDots: FC<SpinnerDotsProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner-dots',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinnerDots
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        customColor={customColor}
    >
        <div></div><div></div><div></div><div></div>
    </StyledSpinnerDots>);
}

export default SpinnerDots;