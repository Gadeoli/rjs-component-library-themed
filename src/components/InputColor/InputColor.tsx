import React, { FC } from 'react';
import { InputColor as StyledInputColor } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { InputColorProps } from './InputColor.types';

const InputColor: FC<InputColorProps> = ({
    name, 
    disabled, 
    value, 
    className, 
    style, 
    loading, 
    id, 
    autocomplete="off", 
    onChange, 
    onBlur, 
    onFocus, 
    onKeyDown,
    width='2.5rem',
    height='2rem',
    ...rest
}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__input-color',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledInputColor 
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
        autoComplete={autocomplete}
        width={width}
        height={height}
        {...rest}
        type='color'
    />);
}

export default InputColor;