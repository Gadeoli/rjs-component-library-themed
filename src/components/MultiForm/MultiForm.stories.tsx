import React, {useState, useMemo, createContext, useContext} from "react";
import { StoryFn, Meta } from "@storybook/react";
import MultiForm from './MultiForm';
import Card from "../Card";
import CardContent from "../CardContent";
import Span from "../Span";
import { MultiFormProps, ContextProps } from "./MultiForm.types";
import Button from "../Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/MultiForm",
} as Meta<typeof MultiForm>;

const defaultContextValues = {
    prev: () => {},
    canPrev: false,
    next: () => {},
    canNext: false,
    currentStep: 1
}

const StepFormContext = createContext<ContextProps>(defaultContextValues);
const { Provider } = StepFormContext;

const ABCBody = () => {
    const {next, canNext} = useContext(StepFormContext)

    return <>
        <>ABC</>
        <Button disabled={!canNext} type='secondary' onClick={() => next()}>{'>>'}</Button>
    </>
}

const DEFBody = () => {
    const {next, canNext, prev, canPrev} = useContext(StepFormContext)

    return <>
        <Button disabled={!canPrev} type='secondary' onClick={() => prev()}>{'<<'}</Button>
        <>DEF</>
        <Button disabled={!canNext} type='secondary' onClick={() => next()}>{'>>'}</Button>
    </>
}

const GHIBody = () => {
    const {next, canNext, prev, canPrev} = useContext(StepFormContext)

    return <>
        <Button disabled={!canPrev} type='secondary' onClick={() => prev()}>{'<<'}</Button>
        <>GHI</>
        <Button disabled={!canNext} type='secondary' onClick={() => next()}>{'>>'}</Button>
    </>
}

const JKLBody = () => {
    const {prev, canPrev} = useContext(StepFormContext)

    return <>
        <Button disabled={!canPrev} type='secondary' onClick={() => prev()}>{'<<'}</Button>
        <>JKL</>
    </>
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<MultiFormProps> = (args) => {
    const [currentStep, setCurrentStep] = useState(1);     
    
    const steps = useMemo(() => {
        return [
            {header: () => <Span>abc</Span>},
            {header: () => <Span>def</Span>},
            {header: () => <Span>ghi</Span>},
            {header: () => <Span>jkl</Span>}
        ];
    }, []);

    const body = useMemo(() => {
        switch (currentStep) {
            case 1: return (<ABCBody/>);
            case 2: return (<DEFBody/>);
            case 3: return (<GHIBody/>);
            case 4: return (<JKLBody/>);
            default: return (<>MNO</>);
        }
    }, [currentStep]);

    const next = () => setCurrentStep(currentStep + 1);
    const prev = () => setCurrentStep(currentStep - 1);
    const canNext = currentStep < steps.length;
    const canPrev = currentStep > 1;

    return (<Card><CardContent>
        <Provider value={{
            next,
            prev,
            canNext,
            canPrev,
            currentStep
        }}>
            <MultiForm
                loading={false}
                steps={steps}
                noneText={"No content to display"}
                current={currentStep}
                body={body}
            />
        </Provider>
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
        type: {name: 'string', required: true},
        defaultValue: [],
        description: 'A array os objects. This will mount the steps and the respective body/content'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: ''
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
        type: {name: 'string', required: false},
        defaultValue: null,
        description: 'custom styles'
    }
}