import React, { FC } from 'react';
import { ImageContainerProps } from './ImageContainer.types';
import { ImageContainer as StyledImageContainer } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';

const ImageContainer: FC<ImageContainerProps> = ({height, width, loading, opacityEffect, src, className, type, style}) => {
    const {theme} = useTheme();
    const defaultSize = '150px';

    return (<StyledImageContainer   
        height={height || defaultSize}
        width={width || defaultSize}
        className={`cl-themed-image__container ${type} ${className} ${loading && 'loading-effect'} ${opacityEffect && 'opacity-effect'}`} 
        theme={theme}
        style={style}
    >
        {!loading && src && <img src={src} />}
    </StyledImageContainer>);
}

export default ImageContainer;