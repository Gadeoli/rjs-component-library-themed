import React, { FC } from 'react';

import './Button.scss';
import { ButtonProps } from './Button.types';
import { Button as StyledButton } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Button: FC<ButtonProps> = ({children, disabled, onClick, className, style}) => {
    const {theme} = useTheme();
    
    return (<StyledButton 
        theme={theme} 
        type="button" 
        className={`cl-themed-button ${className}`} 
        style={style} 
        onClick={onClick} 
        disabled={disabled}
    >
            {children}
    </StyledButton>);
}

export default Button;