import React, { FC } from 'react';
import { SpinnerCoinProps } from './SpinnerCoin.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { SpinnerCoin as StyledSpinnerCoin } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const SpinnerCoin: FC<SpinnerCoinProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner-coin',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinnerCoin
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        customColor={customColor}
    >
        <div></div>
    </StyledSpinnerCoin>);
}

export default SpinnerCoin;