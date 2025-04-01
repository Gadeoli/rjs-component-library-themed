import React, { FC, useRef, useState } from 'react';
import { ImageContainerProps } from './ImageContainer.types';
import { ImageContainer as StyledImageContainer } from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const ImageContainer: FC<ImageContainerProps> = ({height, width, loading, opacityEffect, src, className, type, style, alt, fill}) => {
    const {theme} = useTheme();
    const imgRef = useRef(null);
    
    const defaultSize = '150px';
    const classNames = handleCssClassnames([
        'cl-image__container',
        type,
        fill ? 'fill' : undefined,
        loading ? 'loading-effect' : undefined,
        opacityEffect ? 'opacity-effect' : undefined,
        className
    ]);

    return (<StyledImageContainer   
        height={height || defaultSize}
        width={width || defaultSize}
        className={classNames} 
        theme={theme}
        style={style}
    >
        {!loading && src && <img src={src} ref={imgRef} alt={alt}/>}
    </StyledImageContainer>);
}

export default ImageContainer;