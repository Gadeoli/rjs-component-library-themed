import React, { FC } from 'react';
import { ToggleProps } from './Toggle.types';
import { 
    ToggleLabel as StyledToggleLabel,
    ToggleFillIcon as StyledToggleFillIcon,
    ToggleFill as StyledToggleFill,
    ToggleContainer as StyledToggleContainer, 
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import uniqid from 'uniqid';

const Toggle: FC<ToggleProps> = ({
    icon,
    value,
    checkedValue,
    uncheckedValue,
    size,
    disabled,
    onChange,
    type,
    className,
    style,
    children
}) => {
    const {theme} = useTheme();
    const id = uniqid();
    const colors = {
        cicle: theme[type || "secondary"],
        background: theme.body
    }
    const aux = size ? size : 40;
    const sizes = {
        main: aux,
        width: aux + 'px',
        height: (aux / 2) + 'px',
        borderRadius: (aux / 4) + 'px'
    }
    const checked = checkedValue === value

    return (<StyledToggleContainer className={`cl-themed-toogle ${className} ${disabled}`} style={style}>
        <StyledToggleLabel theme={theme} htmlFor={id} sizes={sizes} colors={colors}>
            <input name="" type="checkbox" id={id} checked={checked} onChange={() => {}}/>

            <StyledToggleFill className="fill" sizes={sizes} colors={colors} checked={checked} onClick={() => onChange(checked ? uncheckedValue : checkedValue)}>
                <StyledToggleFillIcon className='fill-icon' sizes={sizes} checked={checked}>
                    {icon && children}
                </StyledToggleFillIcon>
            </StyledToggleFill>
        </StyledToggleLabel>
    </StyledToggleContainer>)
}

export default Toggle;