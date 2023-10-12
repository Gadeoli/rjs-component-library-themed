import React, { FC, useEffect, useState } from 'react';
import { 
    SelectAsyncProps, 
    DrawerItemProps,
    SelectAsyncDrawerProps,
    HandleSelectAsyncProps
} from './SelectAsync.types';
import { 
    SelectContainer as StyledSelectContainer,
    SelectedResult as StyledSelectedResult,
    SelectedResultItem as StyledSelectedResultItem,
    SelectDrawerContainer as StyledSelectDrawerContainer,
    SelectDrawer as StyledSelectDrawer,
    SelectDrawerSearchContainer as StyledSelectDrawerSearchContainer,
    SelectDrawerItem as StyledSelectDrawerItem,
    SelectBtn as StyledSelectBtn,
    SelectDropSymbol as StyledSelectDropSymbol,
    SelectSelectedOptions as StyledSelectSelectedOptions,
    SearchLoadingContainer as StyledSearchLoadingContainer
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import Input from '../Input';
import CardToggle from '../CardToggle';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Button from '../Button';
import Spinner from '../Spinner';
import { Magnifier, SelectDrawerSearchActions } from '../../styled-components/Common/Common';

const SelectAsync: FC<SelectAsyncProps> = ({
    name,
    emptyText,      
    values,
    handleValues,
    handleSelect,
    isSearching = false,
    manualSearch = true,
    multiple,
    className,
    inlineDrawer
}) => {
    const {theme} = useTheme()
    const [showDrawer, setShowDrawer] = useState(false)
    const classNamesSelectContainer = handleCssClassnames([
        'cl-themed__select',
        className
    ]);
    const [search, setSearch] = useState<string>('');

    const handleOnSelect = (selected : any) => {
        if(!multiple){
            const prev = values.filter((v: any) => v.key === selected && v?.selected === true);

            return {
                selected: prev && prev.length ? null : selected,
                values: [...values].map((i: any) => {
                    return {...i, selected: i.selected ? false : i.key === selected}
                })
            }
        }else{
            const aux = [...values].map((i: any) => {
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

    const handleOnSearch = (search: string) => {
        let selected = values.filter((elF: any) => elF.selected === true).map(elM => elM.key);

        if(!multiple){
            selected = selected && selected.length ? selected[0] : null;
        }

        return {
            selected,
            values: [...values].map((i: any) => {
                return {...i, hide: search && i.value.indexOf(search) === -1}
            })
        }
    }

    const renderSelected = () => {
        const selected = [...values].filter((i: any) => i.selected);
        const selections = selected && selected.length ? selected.map((sel: any) => <StyledSelectedResultItem theme={theme} key={sel.key}>
            <Span theme={theme}>{sel.value}</Span> 
            
            <StyledSelectBtn width={20} color={theme.danger} bgcolor={theme.body} onClick={(e) => {
                e.stopPropagation()
                handleValues(handleOnSelect(sel.key))
            }}>&#10006;</StyledSelectBtn>
        </StyledSelectedResultItem>) : '';

        return (<StyledSelectSelectedOptions>
            <div>
                {selected && selected.length ? 
                    (<>{selections}</>) : 
                    (<Span theme={theme}>{emptyText}</Span>)
                }
            </div>
            <StyledSelectDropSymbol theme={theme} className={showDrawer ? 'toggled' : ''}/>
        </StyledSelectSelectedOptions>);
    }

    return (<StyledSelectContainer className={classNamesSelectContainer}>  
        <CardToggle 
            parentToggleStateControl={(toggleStatus: boolean) => setShowDrawer(toggleStatus)}
            toggleTrigger={(trigger: any) => (<StyledSelectedResult className='cl-themed__select__trigger' onClick={() => trigger()} theme={theme}>{renderSelected()}</StyledSelectedResult>)}
            className={'full'}
            fullToogle={true}
        >
            <SelectDrawer
                name={name}
                multiple={multiple}
                theme={theme} 
                values={values}
                isSearching={isSearching}
                manualSearch={manualSearch} 
                onSelect={(v) => handleValues(handleOnSelect(v))}
                onSearch={(s) => {
                    handleValues(handleOnSearch(s));
                    if(typeof handleSelect !== 'undefined'){
                        handleSelect(s);
                    }
                }}
                inlineDrawer={inlineDrawer ? inlineDrawer : false}
            />
        </CardToggle>
    </StyledSelectContainer>);
}

const SelectDrawer: FC<SelectAsyncDrawerProps> = ({
    multiple,
    name,
    values, 
    onSelect, 
    onSearch, 
    manualSearch,
    isSearching = false,
    theme,
    inlineDrawer
}) => {
    const [search, setSearch] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    return (<StyledSelectDrawer className={`cl-themed__select__drawer`} theme={theme}>
        <StyledSelectDrawerSearchContainer theme={theme} className='cl-themed__select__drawer__search'>
            <Input 
                theme={theme} 
                value={search} 
                onBlur={() => setInputFocus(false)}
                onFocus={() => setInputFocus(true)}
                className='full' 
                onChange={(e: any) => {
                    setSearch(e.target.value);
                    
                    if(!manualSearch){
                        onSearch(e.target.value);
                    }   
                }
            }/>

            {isSearching ? (<SelectDrawerSearchActions theme={theme}>
                <Spinner size={20}/>
            </SelectDrawerSearchActions>) : (<SelectDrawerSearchActions theme={theme}>
                {manualSearch ? (<Button type='clean' onClick={() => {
                    onSearch(search);
                }}><Span type='success'><Magnifier theme={theme} size={6} /></Span></Button>) : ('')}

                {search ? (<Button type='clean' onClick={() => {
                    setSearch('')
                    if(manualSearch) onSearch('');
                }}><Span type='danger'>&#10006;</Span></Button>) : ('')}
            </SelectDrawerSearchActions>)}
        </StyledSelectDrawerSearchContainer>
        
        <select name={name} multiple={multiple ? true : undefined}>
            {values.map((v, i) => {
                // Dont use seleted on option tag. Instead use value prop on select tag
                // return <option value={v.key} key={i} selected={v.selected ? true : undefined}>{v.value}</option>
                return <option value={v.key} key={i}>{v.value}</option>
            })}
        </select>
        
        <StyledSelectDrawerContainer className={`cl-themed__select__drawer__itens spacer mt-1 ${inlineDrawer ? 'inline-options' : ''}`}>
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
    return <StyledSelectDrawerItem type='button' onClick={() => handleSelect(item.key)} selected={item.selected} theme={theme}>{item.value}</StyledSelectDrawerItem>
}

export const handleValuesAsync = (props: HandleSelectAsyncProps) => {
    // console.log(props);
    const {oldValues, newValues} = props;

    //only searched or selected (from oldValues)
    const filteredData = oldValues.filter((ov: any) => ov.selected) || [];
    //get the filtered keys
    const filteredKeys = filteredData.map((fk: any) => fk.key);

    //a check - if the current key exists in filteredData
    const exists = (key: any) =>  filteredKeys.some((k: any) => k === key);

    //the new Data
    let newData = newValues.filter((nv: any) => !exists(nv.key)) || [];
    
    return newData.concat(filteredData);  
}

export default SelectAsync;