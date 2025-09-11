import React, { FC, useMemo, useRef, useState } from 'react';
import { 
    SelectProps, 
    DrawerItemProps,
    SelectDrawerProps,
    SelectValueProps
} from '../Select/Select.types';
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
import { CardToggleHandle } from '../CardToggle/CardToggle.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import Button from '../Button';
import Spinner from '../Spinner';
import { SelectDrawerSearchActions } from '../../styled-components/Common/Common';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { defaultXPM } from '../../styles';
import { SelectCreatableProps } from './SelectCreatable.types';

const SelectCreatable: FC<SelectProps & SelectCreatableProps> = ({
    name,
    emptyText, 
    createText,
    values,         
    handleValues,
    handleSelect,
    enableSearch = false,
    isSearching = false,
    multiple,
    className,
    inlineDrawer,
    closeDrawerOnSelect,
    toggleX=undefined,
    toggleY=undefined
}) => {
    const {theme} = useTheme();
    const [showDrawer, setShowDrawer] = useState(false);    
    const drawerBehaviourOnSelect = useMemo(() => {
        return  closeDrawerOnSelect ? closeDrawerOnSelect : 
                multiple ? 'off' : 
                'on';
    }, [multiple, closeDrawerOnSelect]);
    const classNamesSelectContainer = handleCssClassnames([
        'cl-themed__select',
        className
    ]);
    const cardToggleRef = useRef<CardToggleHandle>(null);
    const creationInputRef = useRef<HTMLInputElement>(null);
    const [creation, setCreation] = useState('');
    const [toggleCounter, setToggleCounter] = useState(1);

    const handleOnSelect = (selected : any) => {
        setToggleCounter(toggleCounter + 1);
        
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
        const hasSel = selected && selected.length;

        const selections = hasSel ? selected.map(sel => <StyledSelectedResultItem theme={theme} key={sel.key}>
            <Span>{sel.value}</Span> 
            
            <StyledSelectBtn width={20} color={theme.danger} $bgcolor={theme.body} onClick={(e) => {
                e.stopPropagation()
                handleValues(handleOnSelect(sel.key))
            }}>&#10006;</StyledSelectBtn>
        </StyledSelectedResultItem>) : '';

        return (<StyledSelectSelectedOptions theme={theme}>
            <div>
                {hasSel ? (<>{selections}</>) : ''}
                {((!selected || !selected.length) && !showDrawer) && (<Span className='empty-txt'>{emptyText}</Span>)}
                {showDrawer && <CreationInput 
                    ref={creationInputRef}
                    type='text'
                    name={`${name}-input-create`}
                    onChange={(e: any) => {
                        setCreation(e.target.value);
                    }}
                    value={creation}
                />}
            </div>
            <StyledSelectDropSymbol theme={theme} className={showDrawer ? 'toggled' : ''}/>
        </StyledSelectSelectedOptions>);
    }

    return (<StyledSelectContainer className={classNamesSelectContainer}>  
        <CardToggle 
            ref={cardToggleRef}
            parentToggleStateControl={(toggleStatus: boolean) => {
                setShowDrawer(toggleStatus);
                setTimeout(() => {
                    setCreation('');
                    creationInputRef.current?.focus();
                }, 200);
            }}
            toggleTrigger={
                (trigger: any) => (<StyledSelectedResult $outline={showDrawer} className='cl-themed__select__trigger' onClick={() => trigger()} theme={theme}>{renderSelected()}</StyledSelectedResult>)
            }
            className={'full'}
            fullToogle={true}
            forceRefresh={toggleCounter}
            xOverride={toggleX}
            yOverride={toggleY}
        >
            <SelectDrawer
                name={name}
                multiple={multiple}
                theme={theme} 
                values={values}
                isSearching={isSearching} 
                enableSearch={enableSearch}
                onSelect={(v) => {
                    handleValues(handleOnSelect(v));
                    if(drawerBehaviourOnSelect === 'on'){
                        cardToggleRef.current?.toggle();
                    }
                }}
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
    const [, setInputFocus] = useState(false);
    const id = uniqid();
    
    return (<StyledSelectDrawer className={`cl-themed__select__drawer`} theme={theme}>
        <StyledSelectDrawerSearchContainer theme={theme} className='cl-themed__select__drawer__search'>
            {enableSearch ? (<Input
                name={id}
                type='text'
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
            {values.map((v: any, i: any) => {
                // Dont use seleted on option tag. Instead use value prop on select tag
                // return <option value={v.key} key={i} selected={v.selected ? true : undefined}>{v.value}</option>
                return <option value={v.key} key={i}>{v.value}</option>
            })}
        </select>
        
        <StyledSelectDrawerContainer className={`cl-themed__select__drawer__itens ${inlineDrawer ? 'inline-options' : ''}`}>
            {values.map((v: any) => {
                return v.selected || !v.hide ? (<DrawerItem 
                    handleSelect={(k) => onSelect(k)} 
                    item={v} 
                    theme={theme} 
                    inlineDrawer={inlineDrawer}
                    key={v.key}/>
                ) : null
            })}
        </StyledSelectDrawerContainer>   
    </StyledSelectDrawer>)
}

const DrawerItem: FC<DrawerItemProps> = ({
    theme, 
    item,
    inlineDrawer,
    handleSelect
}) => {
    return <StyledSelectDrawerItem type='button' className={`${inlineDrawer ? 'inline-options' : ''}`} onClick={() => handleSelect(item.key)} selected={item.selected} theme={theme}>{item.value}</StyledSelectDrawerItem>
}

const CreationInput = styled(Input)`
    border: none;
    min-width: 150px;
    margin-right: ${defaultXPM};
    max-width: 100%;
    padding: 0;
    outline: 0 !important;
`;

export default SelectCreatable;