export interface SelectCreatableProps {
    createText?: string; //a text to show when some value is typed     
    handleCreateKey?: (arg0: any) => any;
    handleCreateValue?: (arg0: any) => any;
    disabled?: boolean;
}

export interface SelectCreatableDrawerProps {
    createText: string;
    customOption: DrawerCustomOptionProps;
    onCreate: (arg0: any) => any;
}

interface DrawerCustomOptionProps {
    ref: React.RefObject<HTMLInputElement | null>,
    value: string,
    handleCreateKey?: (arg0: any) => any;
}

