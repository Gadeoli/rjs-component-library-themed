import React, { FC } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { 
    CheckboxSquare as StyledCheckboxSquare,
    CheckboxContainer as StyledCheckboxContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import uniqid from 'uniqid';
import Span from '../Span';

const Checkbox: FC<CheckboxProps> = ({
    checkedValue,
    uncheckedValue,
    onChange,
    size,
    text,
    type,
    value,
    style,
    className,
    disabled,
    children
}) => {
    const {theme} = useTheme();
    const id = uniqid();
    const colors = {
        checked: theme[type || "secondary"],
        unchecked: theme.body
    }
    const checked = value === checkedValue

    return (<StyledCheckboxContainer className={`cl-themed-checkbox ${className}`} onClick={() => {
        !disabled && onChange(checked ? uncheckedValue : checkedValue)
    }} style={style}>
        <StyledCheckboxSquare className={`${disabled ? 'disabled' : ''}`} checked={checked} size={size} colors={colors}>
            {children}
        </StyledCheckboxSquare>
        {text ? <Span type={type}>{text}</Span> : null}
    </StyledCheckboxContainer>)
}

export default Checkbox;

/* 
    How to use (examples)
    
    //single
    const [v, setV] = useState(true)

    <Checkbox 
        onChange={(v) => {setV(v)}}
        value={v}
        checkedValue={true}
        uncheckedValue={false}
        text={'my text'}
    />

*/