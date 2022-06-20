import React, { FC } from 'react';
import { InputProps } from './Input.types';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Input: FC<InputProps> = ({disabled, value, type, className, style, onChange}) => {
    const {theme} = useTheme();
    
    return (<StyledInput 
        className={`cl-themed-input ${type} ${className}`} 
        disabled={disabled}
        theme={theme} 
        value={value}
        onChange={(e) => {
            onChange(e.target.value);
        }} 
        style={style} 
        type={type} 
    />);
}

export default Input;