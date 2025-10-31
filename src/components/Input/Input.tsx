import React, { FC, forwardRef, ForwardRefRenderFunction } from 'react';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { InputProps } from './Input.types';

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
    {
        name, 
        disabled, 
        value, 
        type, 
        className, 
        style, 
        loading, 
        id, 
        placeholder, 
        autocomplete="off", 
        onChange, 
        onBlur, 
        onFocus, 
        onKeyDown,
        ...rest
    },
    ref
) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__input',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledInput 
        ref={ref}
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
        {...rest}
    />);
}

const Input = forwardRef(InputBase);

export default Input;