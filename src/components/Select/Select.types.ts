export interface SelectProps {
    name: '',
    emptyText: string,          //a text to show when none value is selected
    values: Array<object>,     //an array of obj {key: k, value: v, selected: true}
    handleValues: (any) => any, //
    multiple?: boolean,         //if allow to select multiple values
    styles?: object
}

export interface DrawerItemProps {
    theme: object, 
    item: object,
    handleSelect: (any) => any    
}

export interface SelectDrawerProps {
    multiple?: boolean,
    name: string,
    values: Array<object>, 
    onSelect: (any) => any, 
    onSearch: (any) => any, 
    theme: object
}