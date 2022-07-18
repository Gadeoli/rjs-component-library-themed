import React, { FC } from 'react';
import { ContainerProps } from './Container.types';
import { Container as StyledContainer } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Container: FC<ContainerProps> = ({children, className, type, style}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__container',
        type,
        className
    ]);

    return (<StyledContainer 
        className={classNames} 
        theme={theme}
        style={style}
    >
        {children}
    </StyledContainer>);
}

export default Container;