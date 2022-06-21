import React, { FC, useRef, useEffect, useState } from 'react';
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
import { useElementSize, useOnClickOutside } from '@gadeoli/rjs-hooks-library';
import Span from '../Span';
import Input from '../Input';

const Select: FC<SelectProps> = ({
    name,
    emptyText,      
    values,         
    handleValues,
    multiple,
    styles
}) => {
    const {theme} = useTheme()
    const [showDrawer, setShowDrawer] = useState(false)
    
    const resultRef = useRef()
    const drawerRef = useRef()

    useOnClickOutside(drawerRef, () => showDrawer && setShowDrawer(false));
    const dimentions = useElementSize(resultRef)

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
        <div ref={drawerRef}>
            <div ref={resultRef}>
                <StyledSelectedResult onClick={() => setShowDrawer(!showDrawer)} theme={theme}>
                    {renderSelected()}
                </StyledSelectedResult>
            </div>

            <SelectDrawer
                name={name}
                multiple={multiple}
                theme={theme} 
                show={showDrawer} 
                toggle={() => setShowDrawer(!showDrawer)}
                values={values} 
                resultSize={dimentions}
                onSelect={(v) => handleValues(handleOnSelect(v))}
                onSearch={(s) => handleValues(handleOnSearch(s))}
            />
        </div>
    </StyledSelectContainer>);
}

const SelectDrawer: FC<SelectDrawerProps> = ({
    multiple,
    name,
    values, 
    onSelect, 
    onSearch, 
    show, 
    toggle, 
    theme, 
    resultSize
}) => {
    const [search, setSearch] = useState('')

    /* eslint-disable */
    useEffect(() => {
        onSearch(search)
    }, [search])
    /* eslint-enable */

    const sizes = () => {
        const testX = resultSize.position.left + resultSize.width > (resultSize.screen.width / 2)
        const testY = resultSize.position.top + resultSize.height > (resultSize.screen.height / 2)
        return {
            left: testX ? 'unset' : 0,
            right: testX ? 0 : 'unset', 
            top: testY ? 'unset' : resultSize.height,
            bottom: testY ? resultSize.height * -1 : 'unset',
            maxWidth: resultSize.width > resultSize.screen.width / 2 ? resultSize.width + 100 : resultSize.screen.width / 2,
            maxHeight: resultSize.screen.height / 3
        }
    }

    return (<StyledSelectDrawer show={show} theme={theme} sizes={sizes()}>
        <StyledSelectDrawerSearchContainer>
            <Input theme={theme} value={search} className='full' onChange={(e) => setSearch(e)}/>
            <StyledSelectBtn width={20} color={theme.danger} bgcolor={theme.body} onClick={() => {
                setSearch('')
            }}>&#10006;</StyledSelectBtn>
        </StyledSelectDrawerSearchContainer>
        
        <select name={name} multiple={multiple ? true : undefined}>
            {values.map((v) => {
                return <option value={v.key} selected={v.selected ? true : undefined}>{v.value}</option>
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