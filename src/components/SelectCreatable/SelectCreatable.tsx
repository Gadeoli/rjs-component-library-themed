import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
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
import { SelectDrawerLoadingContainer, SelectDrawerSearchActions } from '../../styled-components/Common/Common';
import uniqid from 'uniqid';
import styled from 'styled-components';
import { defaultXPM, defaultYPM } from '../../styles';
import { SelectCreatableDrawerProps, SelectCreatableProps } from './SelectCreatable.types';
import { cookValuesSelectedSorted } from '../Select/Select';
import { useOnInfiniteScrollTrigger } from '@gadeoli/rjs-hooks-library';

const SelectCreatable: FC<SelectProps & SelectCreatableProps> = ({
    name,
    emptyText='None option to select', 
    createText='Create',
    values,         
    handleValues,
    handleSelect,
    handleCreateKey,
    handleCreateValue,
    isSearching = false, //should be called loading
    enableSearch = false,
    searchText,
    enableInfiniteScroll,
    hasMore,
    onFinishScroll, //trigger function
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
    const customOptionInputRef = useRef<HTMLInputElement>(null);
    const [customOption, setCustomOption] = useState('');
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
                    const newI = {...i};
                    const mode = i.selected ? false : true //dont use !i.selected because selected maybe is not set

                    newI.selected = mode;

                    if(!mode){
                        delete newI.selectedAt;
                    }else{
                        newI.selectedAt = new Date();
                    }

                    return newI;
                }
            })

            return {
                selected: cookValuesSelectedSorted([...aux]).map(el => el.key),
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

    const handleOnCreate = (value : string) => {
        setToggleCounter(toggleCounter + 1);

        const newKey = handleCreateKey ? handleCreateKey(value) : value;
        const newValue = handleCreateValue ? handleCreateValue(value) : value;
        
        const check = values.filter((i: any) => i.key === newKey);

        if(check && check.length) return; //dont include duplicated keys...

        const newOp : SelectValueProps = {
            key: newKey,
            value: newValue,
            selected: true
        };

        if(multiple){
            newOp.selectedAt = new Date();
        }

        if(!multiple){
            return {
                selected: newKey,
                values: [newOp].concat([...values].map(i => ({...i, selected: false})))
            }
        }else{
            const aux = [newOp].concat([...values].map(i => ({...i, selected: i.selected ? true : false}))); //dont use !i.selected because selected maybe is not set

            return {
                selected: [...aux].filter(elF => elF.selected === true).map(elM => { return elM.key }),
                values: aux
            }
        }
    }

    const renderSelected = () => {
        const selected = cookValuesSelectedSorted([...values]);
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
                {showDrawer && <CustomOptionInput 
                    ref={customOptionInputRef}
                    type='text'
                    name={`${name}-input-create`}
                    onChange={(e: any) => {
                        setCustomOption(e.target.value);
                    }}
                    value={customOption}
                />}
            </div>
            <StyledSelectDropSymbol theme={theme} className={showDrawer ? 'toggled' : ''}/>
        </StyledSelectSelectedOptions>);
    }

    const resetCustomOptionInput = () => {
        setTimeout(() => {
            setCustomOption('');
            customOptionInputRef.current?.focus();
        }, 100);
    }

    return (<StyledSelectContainer className={classNamesSelectContainer}>  
        <CardToggle 
            ref={cardToggleRef}
            parentToggleStateControl={(toggleStatus: boolean) => {
                setShowDrawer(toggleStatus);
                resetCustomOptionInput();
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
                searchText={searchText}
                enableInfiniteScroll={enableInfiniteScroll}
                hasMore={hasMore}
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
                onCreate={(v) => {
                    handleValues(handleOnCreate(v));
                    resetCustomOptionInput();
                    if(drawerBehaviourOnSelect === 'on'){
                        cardToggleRef.current?.toggle();
                    }
                }}
                onFinishScroll={onFinishScroll}
                inlineDrawer={inlineDrawer ? inlineDrawer : false}
                createText={createText}
                customOption={{
                    ref: customOptionInputRef,
                    value: customOption,
                    handleCreateKey: handleCreateKey   
                }}
            />
        </CardToggle>
    </StyledSelectContainer>);
}

const SelectDrawer: FC<SelectDrawerProps & SelectCreatableDrawerProps> = ({
    multiple,
    name,
    values, 
    onSelect, 
    onSearch, 
    onCreate,
    isSearching = false,
    enableSearch = false,
    searchText,
    enableInfiniteScroll=false,
    hasMore=false,
    onFinishScroll,
    theme,
    inlineDrawer,
    createText,
    customOption
}) => {
    const [search, setSearch] = useState('');
    const [, setInputFocus] = useState(false);
    const id = uniqid();
    const hasCustomOp = useMemo(() => {
        return customOption.value && customOption.value.length > 0 ? true : false;
    }, [customOption.value]);
    const [invalidateCustomOp, setInvalidateCustomOp] = useState(false); 

    const lastItemDrawerRef = enableInfiniteScroll ? useOnInfiniteScrollTrigger(
        hasMore,
        isSearching,
        onFinishScroll
    ) : null;

    useEffect(() => {
        const key = customOption.handleCreateKey ? customOption.handleCreateKey(customOption.value) : customOption.value
        const aux = values.filter((i: any) => i.key === key);
        setInvalidateCustomOp(aux && aux.length > 0);
    }, [customOption.value]); 

    return (<StyledSelectDrawer className={`cl-themed__select__drawer`} theme={theme}>
        <StyledSelectDrawerSearchContainer theme={theme} className='cl-themed__select__drawer__search'>
            {enableSearch ? (<Input
                name={id}
                type='text'
                value={search} 
                onBlur={() => setInputFocus(false)}
                onFocus={() => setInputFocus(true)}
                className='full'
                placeholder={searchText || ''} 
                onChange={(e: any) => {
                    setSearch(e.target.value);
                    onSearch(e.target.value);
                }
            }/>) : ('')}

            {hasCustomOp ? (<Button 
                className='full' 
                onClick={() => onCreate(customOption.value)} 
                style={{textAlign: 'left', margin: `${defaultYPM} 0`}}
                disabled={invalidateCustomOp}
                type={invalidateCustomOp ? 'danger' : 'primary'}
            >
                {createText}: {customOption.value}
            </Button>) : ''}
            
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
            {values.map((v: any, i: any) => {
                return v.selected || !v.hide ? (<DrawerItem 
                    ref={values.length === i + 1 && lastItemDrawerRef ? lastItemDrawerRef : null}
                    handleSelect={(k) => onSelect(k)} 
                    item={v} 
                    theme={theme} 
                    inlineDrawer={inlineDrawer}
                    key={v.key}/>
                ) : null
            })}
            {isSearching && hasMore && <SelectDrawerLoadingContainer><Spinner size={20} /></SelectDrawerLoadingContainer>}
        </StyledSelectDrawerContainer>   
    </StyledSelectDrawer>)
}

const DrawerItem: FC<DrawerItemProps> = ({
    ref=null,
    theme, 
    item,
    inlineDrawer,
    handleSelect
}) => {
    return <StyledSelectDrawerItem ref={ref} type='button' className={`${inlineDrawer ? 'inline-options' : ''}`} onClick={() => handleSelect(item.key)} selected={item.selected} theme={theme}>{item.value}</StyledSelectDrawerItem>
}

const CustomOptionInput = styled(Input)`
    border: none;
    min-width: 150px;
    margin-right: ${defaultXPM};
    max-width: 100%;
    padding: 0;
    outline: 0 !important;
`;

export default SelectCreatable;