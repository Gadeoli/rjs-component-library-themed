import React, { useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import ImageEditor from './ImageEditor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ImageEditor",
} as Meta<typeof ImageEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ImageEditor> = (args) => {
    const [file, setFile] = useState();

    return (<div>
        <input type="file" multiple={false} onChange={(e: any) => {
            if (e.target.files && e.target.files.length > 0) {
                setFile(e.target.files[0]);
            }
        }}/>
        <ImageEditor {...{...args, file}} />
    </div>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    onSaveImage: ({src, e}) => console.log({src, e}),
    loading: false,
    className: "",
    style: {},
    /*
    actions: {
        colorEditing: true,
        flip: true,
        rotate: true,
        zoom: true,
        drawing: true,
    },
    labels = {
        ...
    }
    */
}   

Default.argTypes = {
    file: {
        description: 'file img'
    },
    onSaveImage: {
        description: 'function to run on onchange event. this will recieve the event'
    },
    actions: {
        table: { type: { summary: 'any'} },
        defaultValue: {
            colorEditing: true,
            flip: true,
            rotate: true,
            zoom: true,
            drawing: true,
        },
        description: 'Config which actions will be active. All actions are active by default'
    },
    labels: {
        table: { type: { summary: 'any'} },
        defaultValue: {
            brightness: 'Brightness',
            brushColor: 'Brush color',
            brushWidth: 'Brush width',
            contrast: 'Contrast',
            controls: 'Controls',
            draw: 'Draw',
            flip: 'Flip',
            grayscale: 'Grayscale',
            horizontal: 'Horizontally',
            pan: 'Pan', //Mover / Arrastar
            reset: 'Reset',
            rotate: 'Rotate',
            saturate: 'Saturate',
            save: 'Save',
            vertical: 'Vertically',
            zoom: 'Zoom',
        },
        description: 'Labels for buttons, actions'
    },
    loading: {
        type: {name: 'boolean', required: false},
        defaultValue: false,
        description: 'Loading effect, if true add a class: loading-effect to component'
    },
    className: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'full;'
    },
    style: {
        table: { type: { summary: 'any'} },
        defaultValue: null,
        description: 'custom styles. This field is not required'
    }    
}