import React, { FC } from 'react';
import { ContainerReverseYPMProps } from './ContainerReverseYPM.types';
import { ContainerReverseYPM as StyledContainerReverseYPM } from '../../styled-components/Common';

const ContainerReverseYPM: FC<ContainerReverseYPMProps> = ({className, children}) => {
    return (<StyledContainerReverseYPM className={className}>
        {children}
    </StyledContainerReverseYPM>);
}

export default ContainerReverseYPM;