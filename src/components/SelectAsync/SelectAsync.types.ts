export interface SelectAsyncProps {
    name: string;
    emptyText: string;         //a text to show when none value is selected
    values: Array<object>;     //an array of obj {key: k, value: v, selected: true}
    selectedValues: Array<object>;
    handleValues:   (any) => any;//
    handleSelect?:  (any) => any;//
    isSearching?:   boolean;  
    manualSearch?: boolean;
    multiple?: boolean;        //if allow to select multiple values
    styles?: object;
    className?: string;
    inlineDrawer?: boolean; 
}

export interface DrawerItemProps {
    theme: object;
    item: object;
    handleSelect: (any) => any;    
}

export interface SelectAsyncDrawerProps {
    multiple?: boolean;
    name: string;
    values: Array<object>; 
    onSelect: (any) => any; 
    onSearch: (any) => any; 
    manualSearch?: boolean;
    isSearching?:   boolean;  
    theme: object;
    inlineDrawer?: boolean; 
}

export interface HandleSelectAsyncProps {
    oldValues: Array<object>, 
    newValues: Array<object>, 
    search: any
}