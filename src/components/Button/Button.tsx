import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import { Button as StyledButton } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Button: FC<ButtonProps> = ({children, disabled, onClick, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledButton 
        className={`cl-themed__button ${type || 'primary'} ${className}`} 
        disabled={disabled}
        theme={theme} 
        onClick={onClick} 
        style={style} 
        type="button" 
    >
        {children}
    </StyledButton>);
}

export default Button;