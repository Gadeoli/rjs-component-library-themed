import React, { FC } from 'react';
import { ContainerReverseColorProps } from './ContainerReverseColor.types';
import { ContainerReverseColor as StyledContainerReverseColor } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const ContainerReverseColor: FC<ContainerReverseColorProps> = ({className, children}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__container-reverse-color',
        className
    ]);

    return (<StyledContainerReverseColor theme={theme} className={classNames}>
        {children}
    </StyledContainerReverseColor>);
}

export default ContainerReverseColor;