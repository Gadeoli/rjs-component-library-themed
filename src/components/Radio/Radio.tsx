import React, { FC } from 'react';
import { RadioProps } from './Radio.types';
import { 
    RadioCircle as StyledRadioCircle,
    RadioContainer as StyledRadioContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';

const Radio: FC<RadioProps> = ({
    className,
    style,
    onChange,
    selectedValue,
    size,
    text,
    value,
    type,
    children
}) => {
    const {theme} = useTheme();
    const colors = {
        selected: theme[type || "secondary"],
        unselect: theme.body
    }
    const selected = value === selectedValue

    return <StyledRadioContainer colors={colors} className={`cl-themed__radio ${className}`} onClick={() => onChange(value)} style={style}>
        <StyledRadioCircle selected={selected} size={size} colors={colors}>
            <span >{selected && children}</span>
        </StyledRadioCircle>
        <Span className='spacer ml-1' theme={theme}>{text}</Span>
    </StyledRadioContainer>
}

export default Radio;