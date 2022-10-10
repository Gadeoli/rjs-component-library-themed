import React, { FC } from 'react';
import { LabelProps } from './Label.types';
import { useTheme } from '../ThemeHandler';
import { Label as StyledLabel } from '../../styled-components/Common';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Span from '../Span';

const Label: FC<LabelProps> = ({htmlFor, children, className, style, loading, required}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__label',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledLabel htmlFor={htmlFor} theme={theme} className={classNames} style={style}>
        {!loading && children} {required ? (<Span style={{marginLeft: '2px'}}>*</Span>) : ''}
    </StyledLabel>);
}

export default Label;