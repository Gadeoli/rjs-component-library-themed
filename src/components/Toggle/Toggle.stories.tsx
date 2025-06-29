import React, { useState } from "react";
import { CardContent } from "../../styled-components/Common";
import Card from "../Card";
import { ToggleProps } from "./Toggle.types";
import ToggleStory from "./ToggleStory";
import Toggle from "./Toggle";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Toggle",
    component: ToggleStory,
    render: ({...args}: ToggleProps) => {
        const [value, setValue] = useState<boolean | number | null>(null);

        return (<Card><CardContent>
            <Toggle 
                {...args}
                value={value}
                onChange={(cValue: any) => {
                    console.log(cValue);
                    setValue(cValue);
                }}
            />    
            <br/> <Span>Card - CardContent - Toggle</Span>
        </CardContent></Card>);
    },
    argTypes: {
        name: {
            type: {name: 'string', required: true},
            defaultValue: '',
            description: 'Toggle name'
        },
        checkedValue: {
            type: {name: 'other', required: true},
            defaultValue: '',
            description: '',
        },
        uncheckedValue: {
            type: {name: 'other', required: true},
            defaultValue: '',
            description: '',
        },
        size: {
            type: {name: 'number', required: false},
            defaultValue: 40,
            description: 'Size in number. Dont use unity here. The component inside use px by default',
        },
        disabled: {
            type: {name: 'boolean', required: false},
            defaultValue: false,
            description: '',
            size: { control: 'radio' }
        },
        type: {
            type: {name: 'string', required: false},
            defaultValue: 'primary',
            control: {
                type: 'select'
            },
            options: ['danger', 'primary', 'secondary', '', 'success'],
            description: ''
        },
        className: {
            type: {name: 'string', required: false},
            defaultValue: '',
            description: 'full'
        },
        style: {
            type: {name: 'other', required: false},
            defaultValue: null,
            description: 'custom styles'
        },
        onChange: {
            description: 'function to run on onchange event. this will recieve the value changed'
        },
        fillType: {
            type: {name: 'string', required: false},
            defaultValue: "default",
            description: 'invert the background-color (default = theme body | reverse = theme background)',
        }
    },
    args: {
        name: "",
        checkedValue:true,
        uncheckedValue:false,
        size: 40,
        disabled: false,
        type: '',
        className: '',
        style: {},
    }   
}