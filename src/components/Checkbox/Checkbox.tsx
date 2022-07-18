import React, { FC } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { 
    CheckboxSquare as StyledCheckboxSquare,
    CheckboxContainer as StyledCheckboxContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import uniqid from 'uniqid';
import Span from '../Span';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Checkbox: FC<CheckboxProps> = ({
    name,
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
    const classNames = handleCssClassnames([
        'cl-themed__checkbox',
        disabled ? 'disabled' : undefined,
        className
    ]);

    return (<StyledCheckboxContainer className={classNames} onClick={() => {
        !disabled && onChange(checked ? uncheckedValue : checkedValue)
    }} style={style}>
        <input type="checkbox" name={name} checked={checked ? true : undefined}/>
        <StyledCheckboxSquare className={`cl-themed__checkbox__square ${disabled ? 'disabled' : ''}`} checked={checked} size={size} colors={colors}>
            {children}
        </StyledCheckboxSquare>
        {text ? <Span className="cl-themed__checkbox__text" type={type}>{text}</Span> : null}
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