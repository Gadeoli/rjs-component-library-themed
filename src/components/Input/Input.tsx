import React, { FC } from 'react';
import { InputProps } from './Input.types';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Input: FC<InputProps> = ({name, disabled, value, type, className, style, loading, id, placeholder, onChange, onBlur, onFocus}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__input',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledInput 
        id={id}
        name={name}
        className={classNames} 
        disabled={disabled}
        theme={theme} 
        value={value}
        onChange={(e) => {
            onChange(e.target.value);
        }} 
        onBlur={(e: any) => onBlur && onBlur(e)}
        onFocus={(e: any) => onFocus && onFocus(e)}
        style={style} 
        type={type} 
        placeholder={placeholder}
    />);
}

export default Input;