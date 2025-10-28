import React, { forwardRef, ForwardRefRenderFunction, useMemo } from 'react';
import { CheckboxProps } from './Checkbox.types';
import { 
    CheckboxSquare as StyledCheckboxSquare,
    CheckboxContainer as StyledCheckboxContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const CheckboxBase : ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = (
    {
        name,
        checkedValue,
        uncheckedValue,
        onChange,
        size='0.75rem',
        text,
        type,
        value,
        style,
        className,
        disabled,
        children,
        checkedIcon=false,
        ...rest
    }, 
    ref
) => {
    const {theme} = useTheme();
    const colors = {
        checked: theme[type || "secondary"],
        unchecked: theme.body
    }
    const checked = value === checkedValue
    const classNames = handleCssClassnames([
        'cl-themed__checkbox',
        disabled ? 'disabled' : undefined,
        className
    ]);

    // ensure ref is object ref
    const internalRef = ref as React.RefObject<HTMLInputElement>;

    const showCheckedIcon = useMemo(() => checkedIcon && checked && !children, [checkedIcon, checked, children]); 

    return (<StyledCheckboxContainer className={classNames} onClick={() => {
        !disabled && onChange(checked ? uncheckedValue : checkedValue);
        if(internalRef && internalRef?.current){
            internalRef?.current.click();
        }
    }} style={style}>
        <input 
            ref={internalRef} 
            type="checkbox" 
            name={name} 
            checked={checked ? true : false} 
            {...rest}
            onChange={() => {}}//keep onchange after rest //override rest onchange //not allowed to change 
        />

        <StyledCheckboxSquare 
            className={`cl-themed__checkbox__square ${disabled ? 'disabled' : ''}`} 
            
            $checked={checked} 
            $size={size + ""} 
            $colors={colors}
        >
            {showCheckedIcon && (<div className='checked-icon'>&#10003;</div>)}
            {!showCheckedIcon && children}
        </StyledCheckboxSquare>
        
        {text ? <Span className="cl-themed__checkbox__text">{text}</Span> : null}
    
    </StyledCheckboxContainer>)
}

export const Checkbox = forwardRef(CheckboxBase);

export default Checkbox;

/* 
    How to use (examples)
    
    //single
    const [v, setV] = useState(true)

    <Checkbox 
        onChange={(v) => {setV(v)}}
        value={v}
        checkedValue={true}
        uncheckedValue={false}
        text={'my text'}
    />

*/