import React, { FC } from 'react';
import { TextareaProps } from './Textarea.types';
import { Textarea as StyledTextarea } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Textarea: FC<TextareaProps> = ({name, disabled, value, type, className, style, onChange}) => {
    const {theme} = useTheme();
    
    return (<StyledTextarea 
        className={`cl-themed-textarea ${type} ${className}`} 
        disabled={disabled}
        theme={theme} 
        value={value}
        onChange={(e) => onChange(e.target.value)} 
        style={style} 
        type={type} 
        name={name}
    />);
}

export default Textarea;