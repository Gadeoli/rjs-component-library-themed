import React from 'react';
import Span from './Span';
import { SpanProps } from './Span.types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/Span",
    component: Span,
    render: ({...args}: SpanProps) => (<Span {...args}>abc</Span>),
    argTypes: {
        id: {
            type: {name: 'string', required: false},
            defaultValue: '',
            description: ''
        },
        type: {
            type: {name: 'string', required: false},
            defaultValue: 'primary',
            description: 'danger | link | primary | secondary | success'
        },
        loading: {
            type: {name: 'boolean', required: false},
            defaultValue: false,
            description: 'Loading effect, if true add a class: loading-effect to component'
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
    },
    args: {
        type: "danger",
        className: "",
        loading: false,
        style: {},
        onClick: () => {console.log('hey')}
    }
}