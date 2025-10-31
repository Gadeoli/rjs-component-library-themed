import React, { FC } from 'react';
import { RadioMultiProps } from './RadioMulti.types';
import { DirectionContainer } from '../../styled-components/Common';
import Radio from '../Radio';

const RadioMulti: FC<RadioMultiProps> = ({
    onChange,
    values,
    selectedValue,
    className,
    style,
    size,
    type,
    disabled,
    direction,
    selectedIcon=false
}) => {
    return <DirectionContainer className="cl-themed__radio-multi" direction={direction}>
        {values.map((i: any) => { 
            return (<Radio
                key={i.key}
                selectedValue={selectedValue}
                value={i.key}
                onChange={() => onChange(i)}
                text={i.value} 
                disabled={disabled}
                size={size}
                type={type}
                className={className}
                style={style}
                selectedIcon={selectedIcon}
            />)
        })}
    </DirectionContainer>
}

export default RadioMulti;