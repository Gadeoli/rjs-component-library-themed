import React, { FC } from 'react';
import { ButtonProps } from './Button.types';
import { Button as StyledButton } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Button: FC<ButtonProps> = ({children, disabled, onClick, className, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__button',
        type || 'primary',
        className
    ]);
 
    return (<StyledButton 
        className={classNames} 
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