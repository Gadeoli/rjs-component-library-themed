import React, { FC } from 'react';
import { LabelProps } from './Label.types';
import { useTheme } from '../ThemeHandler';
import { Label as StyledLabel } from '../../styled-components/Common';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Label: FC<LabelProps> = ({htmlFor, text, className, style, loading}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__label',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledLabel htmlFor={htmlFor} theme={theme} className={classNames} style={style}>{!loading && text}</StyledLabel>);
}

export default Label;