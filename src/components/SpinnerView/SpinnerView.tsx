import React, { FC } from 'react';
import { SpinnerViewProps } from './SpinnerView.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { SpinnerView as StyledSpinnerView } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const SpinnerView: FC<SpinnerViewProps> = ({size, type, className, style, customColor}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__spinner-view',
        customColor ? 'custom' : '',
        type,
        className
    ]);

    return (<StyledSpinnerView
        theme={theme}
        size={size}
        className={classNames}
        style={style}
        customColor={customColor}
    >
        <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>
    </StyledSpinnerView>);
}

export default SpinnerView;