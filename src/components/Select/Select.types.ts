export interface SelectProps {
    name: string;
    emptyText: string;         //a text to show when none value is selected
    values: Array<SelectValueProps>;     //an array of obj {key: k, value: v, selected: true}
    handleValues:   (arg0: any) => any;//
    handleSelect?:  (arg0: any) => any;//
    isSearching?:   boolean;  
    enableSearch?: boolean;
    multiple?: boolean;        //if allow to select multiple values
    styles?: object;
    className?: string;
    inlineDrawer?: boolean; 
    toggleX: "left" | "right";
    toggleY: "top" | "bottom";
}

export interface SelectValueProps {
    key: any,
    value: any,
    selected?: boolean
}

export interface DrawerItemProps {
    theme: object;
    item: SelectValueProps;
    inlineDrawer?: boolean;
    handleSelect: (arg0: any) => any;    
}

export interface SelectDrawerProps {
    multiple?: boolean;
    name: string;
    values: Array<object>; 
    onSelect: (arg0: any) => any; 
    onSearch: (arg0: any) => any; 
    isSearching?:   boolean;  
    enableSearch?: boolean;
    theme: object;
    inlineDrawer?: boolean; 
}