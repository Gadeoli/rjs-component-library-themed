import React, { FC } from 'react';
import { TextareaProps } from './Textarea.types';
import { Textarea as StyledTextarea } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Textarea: FC<TextareaProps> = ({name, disabled, value, type, className, style, onChange}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__textarea',
        type,
        className
    ]);

    return (<StyledTextarea 
        className={classNames} 
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