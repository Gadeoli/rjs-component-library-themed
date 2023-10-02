import React, {useState, useMemo, useCallback, useEffect} from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MultiForm from './MultiForm';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/MultiForm",
} as ComponentMeta<typeof MultiForm>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MultiForm> = (args) => {
    const [currentStep, setCurrentStep] = useState(1); 
    
    const steps = useMemo(() => {
        return [
            {
                header: (<Span>abc</Span>)
            },
            {
                header: (<Span>def</Span>)
            },
            {
                header: (<Span>ghi</Span>)
            },
            {
                header: (<Span>jkl</Span>)
            }
        ]
    }, []);

    const body = useMemo(() => {
        switch (currentStep) {
            case 1: return (<>ABC</>);
            case 2: return (<>DEF</>);
            case 3: return (<>GHI</>);
            case 3: return (<>JKL</>);
            default: return (<>MNO</>);
        }
    }, [currentStep]);
    
    return (<Card><CardContent>
        <MultiForm 
            loading={false}
            steps={steps}
            noneText="No content to display"
            // onChange={(key: any) => {
            //     setCurrentStep(key);
            // }}
            current={currentStep}
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
    steps: {
        type: {name: 'other', required: true},
        defaultValue: [],
        description: 'A array os objects. This will mount the steps and the respective body/content'
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