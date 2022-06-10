import React, { FC } from 'react';
import { GlobalStyleProps } from './GlobalStyle.types';
import { GlobalStyle as StyledGlobalStyle } from '../../styled-components/Global';
import { useTheme } from '../ThemeHandler';

const GlobalStyle: FC<GlobalStyleProps> = () => {
    const {theme} = useTheme();

    return <StyledGlobalStyle theme={theme}/>
}

export default GlobalStyle;