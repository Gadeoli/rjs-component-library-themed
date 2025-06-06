import React, { FC, useMemo } from 'react';
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
    size='0.75rem',
    text,
    value,
    type,
    disabled,
    children,
    selectedIcon=false
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

    const showSelectedIcon = useMemo(() => selectedIcon && selected && !children, [selectedIcon, selected, children]); 

    return <StyledRadioContainer className={classNames} onClick={() => !disabled && onChange(value)} style={style}>
        <StyledRadioCircle className='cl-themed__radio__circle' $selected={selected} $size={size} $colors={colors}>
            {showSelectedIcon && (<div className='selected-icon'>&#10003;</div>)}
            {!showSelectedIcon && children}
        </StyledRadioCircle>
        <Span className='cl-themed__radio__text spacer ml-1'>{text}</Span>
    </StyledRadioContainer>
}

export default Radio;