import React, { FC, useEffect, useState } from 'react';
import { 
    SelectProps, 
    DrawerItemProps,
    SelectDrawerProps
} from './Select.types';
import { 
    SelectContainer as StyledSelectContainer,
    SelectedResult as StyledSelectedResult,
    SelectedResultItem as StyledSelectedResultItem,
    SelectDrawerContainer as StyledSelectDrawerContainer,
    SelectDrawer as StyledSelectDrawer,
    SelectDrawerSearchContainer as StyledSelectDrawerSearchContainer,
    SelectDrawerItem as StyledSelectDrawerItem,
    SelectBtn as StyledSelectBtn
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import Input from '../Input';
import CardToggle from '../CardToggle';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Button from '../Button';

const Select: FC<SelectProps> = ({
    name,
    emptyText,      
    values,         
    handleValues,
    multiple,
    className
}) => {
    const {theme} = useTheme()
    const [showDrawer, setShowDrawer] = useState(false)
    const classNamesSelectContainer = handleCssClassnames([
        'cl-themed__select',
        className
    ]);

    const handleOnSelect = (selected : any) => {
        if(!multiple){
            const prev = values.filter(v => v.key === selected && v?.selected === true);

            setShowDrawer(!showDrawer)
            return {
                selected: prev && prev.length ? null : selected,
                values: [...values].map(i => {
                    return {...i, selected: i.selected ? false : i.key === selected}
                }) 
            }
        }else{
            const aux = [...values].map(i => {
                if(i.key !== selected){
                    return {...i}
                }else{
                    return {...i, selected: i.selected ? false : true} //dont use !i.selected because selected maybe is not set
                }
            })

            return {
                selected: [...aux].filter(elF => elF.selected === true).map(elM => { return elM.key }),
                values: aux
            }
        }
    }

    const handleOnSearch = (search: any) => {
        let selected = values.filter(elF => elF.selected === true).map(elM => elM.key);

        if(!multiple){
            selected = selected && selected.length ? selected[0] : null;
        }

        return {
            selected,
            values: [...values].map(i => {
                return {...i, hide: search && i.value.indexOf(search) === -1}
            })
        }
    }

    const renderSelected = () => {
        const selected = [...values].filter(i => i.selected)

        if(selected && selected.length){
            return selected.map(sel => <StyledSelectedResultItem theme={theme} key={sel.key}>
                <Span theme={theme}>{sel.value}</Span> 
                
                <StyledSelectBtn width={20} color={theme.danger} bgcolor={theme.body} onClick={(e) => {
                    e.stopPropagation()
                    handleValues(handleOnSelect(sel.key))
                }}>&#10006;</StyledSelectBtn>
            </StyledSelectedResultItem>)
        }else{
            return <Span theme={theme} onClick={() => setShowDrawer(!showDrawer)}>{emptyText}</Span>
        }
    }

    return (<StyledSelectContainer className={classNamesSelectContainer}>  
        <CardToggle 
            toggleTrigger={(trigger: any) => (<StyledSelectedResult className='cl-themed__select__trigger' onClick={() => trigger()} theme={theme}>{renderSelected()}</StyledSelectedResult>)}
            className={'full'}
        >
            <SelectDrawer
                name={name}
                multiple={multiple}
                theme={theme} 
                values={values} 
                onSelect={(v) => handleValues(handleOnSelect(v))}
                onSearch={(s) => handleValues(handleOnSearch(s))}
            />
        </CardToggle>
    </StyledSelectContainer>);
}

const SelectDrawer: FC<SelectDrawerProps> = ({
    multiple,
    name,
    values, 
    onSelect, 
    onSearch, 
    theme
}) => {
    const [search, setSearch] = useState('');

    return (<StyledSelectDrawer className='cl-themed__select__drawer' theme={theme}>
        <StyledSelectDrawerSearchContainer theme={theme} className='cl-themed__select__drawer__search'>
            <Input theme={theme} value={search} className='full' onChange={(e: any) => {
                setSearch(e.target.value);
                onSearch(e.target.value);
            }}/>
            <Button type='danger' onClick={() => {
                setSearch('')
            }}>&#10006;</Button>
        </StyledSelectDrawerSearchContainer>
        
        <select name={name} multiple={multiple ? true : undefined}>
            {values.map((v, i) => {
                // Dont use seleted on option tag. Instead use value prop on select tag
                // return <option value={v.key} key={i} selected={v.selected ? true : undefined}>{v.value}</option>
                return <option value={v.key} key={i}>{v.value}</option>
            })}
        </select>
        
        <StyledSelectDrawerContainer className='cl-themed__select__drawer__itens spacer mt-1'>
            {values.map((v) => {
                return v.selected || !v.hide ? (<DrawerItem 
                    handleSelect={(k) => onSelect(k)} 
                    item={v} 
                    theme={theme} 
                    key={v.key}/>
                ) : null
            })}
        </StyledSelectDrawerContainer>   
    </StyledSelectDrawer>)
}

const DrawerItem: FC<DrawerItemProps> = ({
    theme, 
    item,
    handleSelect
}) => {
    return <StyledSelectDrawerItem onClick={() => handleSelect(item.key)} selected={item.selected} theme={theme}>{item.value}</StyledSelectDrawerItem>
}

export default Select;