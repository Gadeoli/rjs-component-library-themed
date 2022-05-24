import React, { FC } from 'react';

import './Button.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({
    disabled,
    label, 
    onClick
}) => (
    <button type="button" className="cl-themed-button" onClick={onClick} disabled={disabled}>{label}</button>
) 

export default Button;