export interface SelectAsyncProps {
    name: string;
    emptyText: string;         //a text to show when none value is selected
    values: Array<SelectValueProps>;     //an array of obj {key: k, value: v, selected: true}
    handleValues:   (arg0: any) => any;//
    handleSelect?:  (arg0: any) => any;//
    isSearching?:   boolean;  
    manualSearch?: boolean;
    searchText?: string; //a text to show in search input
    enableInfiniteScroll?: boolean; //if true so use carefully: handleFinishScroll + isSearching + hasMore
    hasMore?: boolean;
    handleFinishScroll?: () => void; 
    multiple?: boolean;        //if allow to select multiple values
    styles?: object;
    className?: string;
    inlineDrawer?: boolean; 
    closeDrawerOnSelect?: 'on' | 'off';
}

export interface SelectValueProps {
    key: any;
    value: any;
    selected?: boolean;
    selectedAt?: Date;
}

export interface DrawerItemProps {
    theme: object;
    item: SelectValueProps;
    inlineDrawer?: boolean;
    handleSelect: (arg0: any) => any;    
}

export interface SelectAsyncDrawerProps {
    multiple?: boolean;
    name: string;
    values: Array<object>; 
    onSelect: (arg0: any) => any; 
    onSearch: (arg0: any) => any; 
    isSearching?:   boolean;
    manualSearch?: boolean;
    searchText?: string; //a text to show in search input
    enableInfiniteScroll?: boolean;
    hasMore?: boolean;
    onFinishScroll?: () => void;  
    theme: object;
    inlineDrawer?: boolean; 
}

export interface HandleSelectAsyncProps {
    oldValues: Array<object>, 
    newValues: Array<object>
}