export interface SelectProps {
    name: string;
    emptyText: string;         //a text to show when none value is selected
    values: Array<object>;     //an array of obj {key: k, value: v, selected: true}
    handleValues:   (any) => any;//
    handleSelect?:  (any) => any;//
    isSearching?:   boolean;  
    enableSearch?: boolean;
    multiple?: boolean;        //if allow to select multiple values
    styles?: object;
    className?: string;
    inlineDrawer?: boolean; 
    toggleX: "left" | "right";
    toggleY: "top" | "bottom";
}

export interface DrawerItemProps {
    theme: object;
    item: object;
    handleSelect: (any) => any;    
}

export interface SelectDrawerProps {
    multiple?: boolean;
    name: string;
    values: Array<object>; 
    onSelect: (any) => any; 
    onSearch: (any) => any; 
    isSearching?:   boolean;  
    enableSearch?: boolean;
    theme: object;
    inlineDrawer?: boolean; 
}