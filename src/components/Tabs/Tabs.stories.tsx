import React, { useState, useMemo } from "react";
import { StoryFn, Meta } from "@storybook/react";
import Tabs from './Tabs';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";
import Tooltip from "../Tooltip";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Tabs",
} as Meta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof Tabs> = (args) => {
    const [activeTab, setActiveTab] = useState(1); 
    
    const tabs = useMemo(() => {
        return [
            {
                key: 1,
                header: () => (<Span>abc</Span>),
                active: activeTab === 1
            },
            {
                key: 2,
                header: () => (<Span>def</Span>),
                active: activeTab === 2
            },
            {
                key: 3,
                header: () => (<Span>ghi</Span>),
                disabled: true,
                active: activeTab === 3
            },
            {
                key: 4,
                header: () => (<Span>jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl </Span>),
                disabled: true,
                active: activeTab === 4
            },
            {
                key: 5,
                header: () => (<Span>jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl <br />jkl jkl jkl jkl jkl jkl jkl jkl jkl jkl </Span>),
                disabled: true,
                active: activeTab === 5
            }
        ]
    }, [activeTab]);

    const body = useMemo(() => {
        switch (activeTab) {
            case 1: return (<>ABC</>);
            case 2: return (<>DEF</>);
            case 3: return (<>GHI</>);
            default: return (<>JKL</>);
        }
    }, [activeTab]);
    
    return (<Card><CardContent>
        <Tabs 
            {...args}
            tabs={tabs}
            noneText="No content to display"
            onChange={(key: any) => {
                setActiveTab(key);
            }}
            body={body}       
        />
    </CardContent></Card>);
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    className: "",
    style: {}
}   

Default.argTypes = {
    tabs: {
        table: { type: { summary: 'any'} },
        defaultValue: [],
        description: 'A array os objects. This will mount the tabs and the respective body/content. This field is required'
    },
    maxWidth: {
        type: {name: 'string', required: false},
        defaultValue: '150px',
        description: 'tab nav item max width'
    },
    scrollOrWrap: {
        type: {name: 'string', required: false},
        defaultValue: 'wrap',
        control: {
            type: 'select'
        },
        options: ['scroll', 'wrap'],
        description: 'tap nav behaviour on +100% width'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: ''
    },
    emphasisActive: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Make the active tab a little bigger (more padding)'
    },
    spinnerSize: {
        type: {name: 'number', required: false},
        defaultValue: 3,
        description: ''
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: ''
    },
    style: {
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    }
}