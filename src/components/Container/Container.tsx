import React, { FC } from 'react';
import { ContainerProps } from './Container.types';
import { Container as StyledContainer } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const Container: FC<ContainerProps> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    
    return (<StyledContainer 
        className={`cl-themed__container ${type} ${className}`} 
        theme={theme}
        style={style}
    >
        {children}
    </StyledContainer>);
}

export default Container;