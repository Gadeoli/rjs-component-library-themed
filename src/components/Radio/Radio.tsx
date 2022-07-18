import React, { FC } from 'react';
import { RadioProps } from './Radio.types';
import { 
    RadioCircle as StyledRadioCircle,
    RadioContainer as StyledRadioContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Radio: FC<RadioProps> = ({
    className,
    style,
    onChange,
    selectedValue,
    size,
    text,
    value,
    type,
    disabled,
    children
}) => {
    const {theme} = useTheme();
    const colors = {
        selected: theme[type || "secondary"],
        unselect: theme.body
    }
    const selected = value === selectedValue
    const classNames = handleCssClassnames([
        'cl-themed__radio',
        disabled ? 'disabled' : undefined,
        className
    ]);

    return <StyledRadioContainer colors={colors} className={classNames} onClick={() => !disabled && onChange(value)} style={style}>
        <StyledRadioCircle className='cl-themed__radio__circle' selected={selected} size={size} colors={colors}>
            <span >{selected && children}</span>
        </StyledRadioCircle>
        <Span className='cl-themed__radio__text spacer ml-1' theme={theme}>{text}</Span>
    </StyledRadioContainer>
}

export default Radio;