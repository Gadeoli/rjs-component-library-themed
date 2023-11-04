import React, { FC, useState } from 'react';
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
    SelectBtn as StyledSelectBtn,
    SelectDropSymbol as StyledSelectDropSymbol,
    SelectSelectedOptions as StyledSelectSelectedOptions
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import Input from '../Input';
import CardToggle from '../CardToggle';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Button from '../Button';
import Spinner from '../Spinner';
import { SelectDrawerSearchActions } from '../../styled-components/Common/Common';

const Select: FC<SelectProps> = ({
    name,
    emptyText,      
    values,         
    handleValues,
    handleSelect,
    enableSearch = false,
    isSearching = false,
    multiple,
    className,
    inlineDrawer,
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
                let finded = false;

                if(Array.isArray(i.value)){
                    for (let j = 0; j < i.value.length; j++) {
                        const el = i.value[j];
                        finded = el.indexOf(search) !== -1;

                        if(finded) break;
                    }
                }else{
                    finded = i.value.indexOf(search) !== -1;
                }

                return {...i, hide: search && !finded}
            })
        }
    }

    const renderSelected = () => {
        const selected = [...values].filter(i => i.selected);
        const selections = selected && selected.length ? selected.map(sel => <StyledSelectedResultItem theme={theme} key={sel.key}>
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
            toggleTrigger={(trigger: any) => (<StyledSelectedResult outline={showDrawer} className='cl-themed__select__trigger' onClick={() => trigger()} theme={theme}>{renderSelected()}</StyledSelectedResult>)}
            className={'full'}
            fullToogle={true}
        >
            <SelectDrawer
                name={name}
                multiple={multiple}
                theme={theme} 
                values={values}
                isSearching={isSearching} 
                enableSearch={enableSearch}
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

const SelectDrawer: FC<SelectDrawerProps> = ({
    multiple,
    name,
    values, 
    onSelect, 
    onSearch, 
    isSearching = false,
    enableSearch = false,
    theme,
    inlineDrawer
}) => {
    const [search, setSearch] = useState('');
    const [inputFocus, setInputFocus] = useState(false);

    return (<StyledSelectDrawer className={`cl-themed__select__drawer`} theme={theme}>
        <StyledSelectDrawerSearchContainer theme={theme} className='cl-themed__select__drawer__search'>
            {enableSearch ? (<Input 
                theme={theme} 
                value={search} 
                onBlur={() => setInputFocus(false)}
                onFocus={() => setInputFocus(true)}
                className='full' 
                onChange={(e: any) => {
                    setSearch(e.target.value);
                    onSearch(e.target.value);
                }
            }/>) : ('')}
            
            {isSearching ? (<SelectDrawerSearchActions theme={theme}>
                <Spinner size={20}/>
            </SelectDrawerSearchActions>) : (<SelectDrawerSearchActions theme={theme}>
                {search ? (<Button type='clean' onClick={() => {
                    setSearch('');
                    onSearch('');
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

export default Select;

export const apiDataToSelect = ({
    data=[],
    key,
    value,
    valueHandler,
    selected,
    delimiter='-',
    unseted='NoN'
} : {
    data: any;
    key: string;
    value: any;
    valueHandler?: any;
    selected?: any;
    delimiter?: string;
    unseted?: string;
}) => {
    return data.map((itemData: any) => {
        let aux = {};

        //Set aux key from a custom given key (accept string: myKey, myKey.mySubKey, myKey.mySubKey.mySubSubKey) ...
        //In the same side send a valueHandler function or Object with functions => () => {} or {myKey: () => myKeyHandler()} or {myKey: {mySubKey: () => mySubKeyHandler()}} or ...
        // aux.key = i[key];
        const iKey = key.split('.').reduce((k, ki) => k[ki], itemData);    
        aux.key = iKey;

        if(Array.isArray(value)){
            aux.value = value.map((valueItem, valueIndex) => {
                const hasDelimiter = value.length > 1 && valueIndex + 1 !== value.length;
                
                const valueToHandle = valueItem.split('.').reduce((v, vi) => v[vi], itemData);
                let iValue = "";

                if(valueHandler){
                    try {
                        const actionToHandle = valueItem.split('.').reduce((v, vi) => v[vi], valueHandler);
                        iValue = actionToHandle(valueToHandle);
                    } catch (err) {
                        iValue = valueToHandle;
                    }
                }else{
                    iValue =  valueToHandle !== null ? valueToHandle : unseted;
                }

                return  `${iValue} ${hasDelimiter ? ' ' + delimiter + ' ' : ''}`; 
            })
        }else{
            const valueToHandle = value.split('.').reduce((v, vi) => v[vi], itemData);

            if(valueHandler && typeof valueHandler !== 'undefined'){
                aux.value = valueHandler(valueToHandle);
            }else{
                aux.value = valueToHandle !== null ? valueToHandle : unseted;
            }
        }

        if(selected){
            if(Array.isArray(selected)){
                aux.selected = selected.includes(iKey)
            }else{
                aux.selected = selected === iKey
            }
        }

        return aux;
    });
};