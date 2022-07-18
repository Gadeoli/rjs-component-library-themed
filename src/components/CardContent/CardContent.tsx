import React, { FC } from 'react';
import { CardContentProps } from './CardContent.types';
import { CardContent as StyledCardContent } from '../../styled-components/Common';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const CardContent: FC<CardContentProps> = ({children, className, style}) => {
    const classNames = handleCssClassnames([
        'cl-themed__card-content',
        className
    ]);

    return (<StyledCardContent 
        className={classNames} 
        style={style}
    >
        {children}
    </StyledCardContent>);
}

export default CardContent;