import React, { FC } from 'react';
import { TextareaProps } from './Textarea.types';
import { Textarea as StyledTextarea } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Textarea: FC<TextareaProps> = ({id, name, disabled, placeholder, readonly, rows, value, loading, className, style, onChange, onBlur, onFocus, onKeyDown}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__textarea',
        loading ? 'loading-effect' : undefined,
        className
    ]);

    return (<StyledTextarea
        id={id} 
        name={name}
        placeholder={placeholder}
        readOnly={readonly}
        rows={rows}
        className={classNames} 
        disabled={disabled}
        theme={theme} 
        value={value}
        onChange={(e: any) => onChange(e)}
        onBlur={(e: any) => onBlur && onBlur(e)}
        onFocus={(e: any) => onFocus && onFocus(e)}
        onKeyDown={(e: any) => onKeyDown && onKeyDown(e)}
        style={style} 
    />);
}

export default Textarea;