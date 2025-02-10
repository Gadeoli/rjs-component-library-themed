import React, { FC } from 'react';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { InputProps } from './Input.types';

const Input: FC<InputProps> = ({
    name, 
    disabled, 
    value, 
    type, 
    className, 
    style, 
    loading, 
    id, 
    placeholder, 
    autocomplete, 
    onChange, 
    onBlur, 
    onFocus, 
    onKeyDown
}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__input',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledInput 
        name={name}
        id={id}
        className={classNames} 
        disabled={disabled}
        theme={theme} 
        value={value}
        onChange={(e: any) => onChange(e)}
        onBlur={(e: any) => onBlur && onBlur(e)}
        onFocus={(e: any) => onFocus && onFocus(e)}
        onKeyDown={(e: any) => onKeyDown && onKeyDown(e)}
        style={style} 
        type={type} 
        placeholder={placeholder}
        autoComplete={autocomplete}
    />);
}

export default Input;