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

const Select: FC<SelectProps> = ({
    name,
    emptyText,      
    values,         
    handleValues,
    multiple
}) => {
    const {theme} = useTheme()
    const [showDrawer, setShowDrawer] = useState(false)

    const handleOnSelect = (selected) => {
        if(!multiple){
            setShowDrawer(!showDrawer)
            return [...values].map(i => {
                return {...i, selected: i.selected ? false : i.key === selected}
            })
        }else{
            return [...values].map(i => {
                if(i.key !== selected){
                    return {...i}
                }else{
                    return {...i, selected: i.selected ? false : true} //dont use !i.selected because selected maybe is not set
                }
            }) 
        }
    }

    const handleOnSearch = (search) => {
        return [...values].map(i => {
            return {...i, hide: search && i.value.indexOf(search) === -1}
        })
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

    return (<StyledSelectContainer>  
        <CardToggle 
            toggleTrigger={(trigger: any) => (<StyledSelectedResult onClick={() => trigger()} theme={theme}>{renderSelected()}</StyledSelectedResult>)}
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
    const [search, setSearch] = useState('')

    /* eslint-disable */
    useEffect(() => {
        onSearch(search)
    }, [search])
    /* eslint-enable */

    return (<StyledSelectDrawer theme={theme}>
        <StyledSelectDrawerSearchContainer>
            <Input theme={theme} value={search} className='full' onChange={(e) => setSearch(e)}/>
            <StyledSelectBtn width={20} color={theme.danger} bgcolor={theme.body} onClick={() => {
                setSearch('')
            }}>&#10006;</StyledSelectBtn>
        </StyledSelectDrawerSearchContainer>
        
        <select name={name} multiple={multiple ? true : undefined}>
            {values.map((v, i) => {
                return <option value={v.key} key={i} selected={v.selected ? true : undefined}>{v.value}</option>
            })}
        </select>
        
        <StyledSelectDrawerContainer className='spacer mt-1'>
            {values.map((v) => {
                return v.selected || !v.hide ? (<DrawerItem handleSelect={(k) => onSelect(k)} item={v} theme={theme} key={v.key}/>) : null
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