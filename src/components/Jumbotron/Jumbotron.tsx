import React, { FC } from 'react';
import { JumbotronProps } from './Jumbotron.types';
import { Jumbotron as StyledJumbotron } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const Jumbotron: FC<JumbotronProps> = ({
    children, 
    className, 
    type='primary', 
    style, 
    color="#3A6F43"
}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__jumbotron',
        type,
        className
    ]);

    return (<StyledJumbotron 
        className={classNames} 
        theme={theme}
        style={style}
        color={color}
    >
        {children}
    </StyledJumbotron>);
}

export default Jumbotron;