import React, { FC } from 'react';
import { InputProps } from './Input.types';
import { Input as StyledInput } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Input: FC<InputProps> = ({name, disabled, value, type, className, style, onChange, loading}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__input',
        loading ? 'loading' : undefined,
        className
    ]);

    return (<StyledInput 
        name={name}
        className={classNames} 
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