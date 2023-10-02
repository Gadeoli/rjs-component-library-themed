import React, {useState, useMemo, useCallback, useEffect} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tabs from './Tabs';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Tabs",
} as ComponentMeta<typeof Tabs>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Tabs> = (args) => {
    const [activeTab, setActiveTab] = useState(1); 
    
    const tabs = useMemo(() => {
        return [
            {
                key: 1,
                header: (<Span>abc</Span>),
                active: activeTab === 1
            },
            {
                key: 2,
                header: (<Span>def</Span>),
                active: activeTab === 2
            },
            {
                key: 3,
                header: (<Span>ghi</Span>),
                disabled: true,
                active: activeTab === 3
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
            loading={false}
            tabs={tabs}
            noneText="No content to display"
            onChange={(key: any) => {
                setActiveTab(key);
            }}
            emphasisActive={false}
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
        type: {name: 'other', required: true},
        defaultValue: [],
        description: 'A array os objects. This will mount the tabs and the respective body/content'
    },
    onSelect: {
        type: {name: 'other', required: true},
        defaultValue: [],
        description: 'The function triggered when the tab is selected'
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
        type: {name: 'other', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}