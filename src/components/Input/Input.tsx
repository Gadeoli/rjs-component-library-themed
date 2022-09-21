import React, { FC } from 'react';
import { InputProps } from './Input.types';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Input: FC<InputProps> = ({name, disabled, value, type, className, style, loading, id, placeholder, onChange, onBlur, onFocus, onKeyDown}) => {
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
        onChange={(e: any) => onChange(e)}
        onBlur={(e: any) => onBlur && onBlur(e)}
        onFocus={(e: any) => onFocus && onFocus(e)}
        onKeyDown={(e: any) => onKeyDown && onKeyDown(e)}
        style={style} 
        type={type} 
        placeholder={placeholder}
    />);
}

export default Input;