import React, { FC } from 'react';
import { ContainerReverseXPMProps } from './ContainerReverseXPM.types';
import { ContainerReverseXPM as StyledContainerReverseXPM } from '../../styled-components/Common';

const ContainerReverseXPM: FC<ContainerReverseXPMProps> = ({className, children}) => {
    return (<StyledContainerReverseXPM className={className}>
        {children}
    </StyledContainerReverseXPM>);
}

export default ContainerReverseXPM;