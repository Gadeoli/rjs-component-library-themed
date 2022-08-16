import React, { FC } from 'react';
import { FormGroupProps } from './FormGroup.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { 
    FormGroup as StyledFormGroup
} from '../../styled-components/Common';

const FormGroup: FC<FormGroupProps> = ({children, className, style}) => {
    const classNames = handleCssClassnames([
        'cl-themed__form-group',
        className
    ]);

    return (<StyledFormGroup
        className={classNames} 
        style={style}
    >
        {children}
    </StyledFormGroup>);
}

export default FormGroup;