import React, { FC } from 'react';
import { 
    DirectionContainer as StyledDirectionContainer
} from '../../styled-components/Common';
import Checkbox from '../Checkbox';
import { CheckboxMultiProps } from './CheckboxMulti.types';

const CheckboxMulti: FC<CheckboxMultiProps> = ({
    checkedValues,  
    onChange,       
    values,         
    single,  
    style,
    direction,
    disabled,
    type,
    size,
    className
}) => {
    const handleChange = (value: any) => {
        if(single){
            onChange(value)
        }else{
            //value <=> {key: 1, value: 'myvalue'} (when multiple)
            let aux = [...checkedValues]
            const searchValue = aux.filter(i => i.key === value.key)

            if(searchValue && searchValue.length){
                aux = [...aux].filter(i => i.key !== value.key)
            }else{
                aux.push(value)
            }

            onChange(aux)
        }
    }

    const hangleIsCheckedValue = (key: any) => {
        if(single){
            return checkedValues?.key === key
        }else{
            if(!checkedValues.length) return false

            const aux = checkedValues.filter(i => i.key === key)

            return aux && aux.length 
        }
    }

    return (<StyledDirectionContainer direction={direction}>
        {values && values.length && values.map((i) => {
            const thisValueIsChecked = hangleIsCheckedValue(i.key)
    
            return (<Checkbox
                key={i.key}
                checkedValue={i.key}
                uncheckedValue={''}
                disabled={disabled}
                value={thisValueIsChecked ? i.key : ''}
                onChange={() => handleChange(i)} //the checkbox onChange itself is just for handle the click event. The real values change happens in handleChange
                type={type}
                text={i.value} 
                style={style}
                size={size || '16px'}
                className={className}
            />)
        })}
    </StyledDirectionContainer>)
}

export default CheckboxMulti;

/* 
    How to use (examples)

    //multi (single check)
    const [vs, setVs] = useState({key: 'maca',    value: 'Maça'})

    <CheckboxMulti 
        checkedValues={vs}  
        single={true}  
        values={[
            {key: 'apple',      value: 'Apple'},
            {key: 'banana',     value: 'Banana'},
            {key: 'watermelon', value: 'watermelon'},
            {key: 'orange',     value: 'Orange'},
        ]}
        onChange={(vs) => setVs(vs)}
    />

    //multi (multiple check)
    const [vs, setVs] = useState([{key: 'maca',    value: 'Maça'}, {key: 'banana',  value: 'Banana'}])

    <CheckboxMulti 
        checkedValues={vs}  
        single={true}  
        values={[
            {key: 'maca',    value: 'Maça'},
            {key: 'banana',  value: 'Banana'},
            {key: 'melao',   value: 'Melão'},
            {key: 'melancia',value: 'Melancia'},
            {key: 'abacate', value: 'Abacate'},
        ]}
        onChange={(vs) => setVs(vs)}
    />
*/