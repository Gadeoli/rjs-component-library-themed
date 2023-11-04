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
import { transparentize } from 'polished';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Toggle: FC<ToggleProps> = ({
    name,
    value,
    checkedValue,
    uncheckedValue,
    size,
    disabled,
    onChange,
    type,
    className,
    style,
    children,
    fillType
}) => {
    const {theme} = useTheme();
    const id = uniqid();
    const aux = size ? size : 40;
    const sizes = {
        main: aux,
        width: aux + 'px',
        height: (aux / 2) + 'px',
        borderRadius: (aux / 4) + 'px'
    }
    const checked = checkedValue === value
    const colors = {
        cicle: theme[type || "secondary"],
        background: theme.body
    }
    const classNamesToggle = handleCssClassnames([
        'cl-themed__toogle',
        disabled ? 'disabled' : undefined,
        className
    ]);
    const classNamesFill = handleCssClassnames([
        'cl-themed__toogle__fill',
        'fill',
        fillType ? fillType : "default",
        disabled ? 'disabled' : undefined,
    ]);


    if(!checked){
        colors.cicle = transparentize(0.5, colors.cicle)
    }

    return (<StyledToggleContainer className={classNamesToggle} style={style}>
        <StyledToggleLabel theme={theme} htmlFor={id} sizes={sizes} colors={colors}>
            <input name={name} type="checkbox" id={id} checked={checked} onChange={() => {}}/>

            <StyledToggleFill theme={theme} className={classNamesFill} sizes={sizes} colors={colors} checked={checked} onClick={() => {
                !disabled && onChange(checked ? uncheckedValue : checkedValue)
            }}>
                <StyledToggleFillIcon className='fill-icon' sizes={sizes} checked={checked}>
                    {children}
                </StyledToggleFillIcon>
            </StyledToggleFill>
        </StyledToggleLabel>
    </StyledToggleContainer>)
}

export default Toggle;