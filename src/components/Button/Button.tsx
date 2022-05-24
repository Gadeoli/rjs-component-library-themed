import React, { FC } from 'react';

import './Button.css';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = ({disabled, text, onClick}) => {
    return (<button type="button" className="cl-themed-button" onClick={onClick} disabled={disabled}>{text}</button>)
}

export default Button;