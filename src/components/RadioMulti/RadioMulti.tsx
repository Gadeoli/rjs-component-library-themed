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
    disabled
}) => {
    return <DirectionContainer>
        {values.map((i) => { 
            return (<Radio
                key={i.key}
                selectedValue={selectedValue}
                value={i.key}
                onChange={() => onChange(i)}
                text={i.value} 
                disabled={disabled}
                size={size}
                className={className}
                style={style}
            />)
        })}
    </DirectionContainer>
}

export default RadioMulti;