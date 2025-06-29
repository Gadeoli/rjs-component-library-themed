import React, { useEffect, useState } from "react";
import { StoryFn, Meta } from "@storybook/react";
import ImageEditor from './ImageEditor';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/ImageEditor",
} as Meta<typeof ImageEditor>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: StoryFn<typeof ImageEditor> = (args) => {
    const [src, setSrc] = useState<string>();
    const [savedSrc, setSavedSrc] = useState(null);

    const handleFetchImage = async (url: string) => {
        try {
            const response = await fetch(url);

            if (!response.ok) throw new Error('Failed to fetch image');

            const blob = await response.blob();
            const imageObjectUrl = URL.createObjectURL(blob);
            
            setSrc(imageObjectUrl);
        } catch (err) {
            console.error(err);
            alert('Error fetching image.');
        }
    };

    useEffect(() => {
        if(args.testSrcUrl){
            handleFetchImage(args.testSrcUrl);
        }
    }, [args.testSrcUrl]);

    return (<div>
        <input  type="file" 
                multiple={false}
                style={{marginBottom: '20px'}} 
                onChange={(e: any) => {
            if (e.target.files && e.target.files.length > 0) {
                const reader = new FileReader();
                reader.onload = () => setSrc(reader.result);
                reader.readAsDataURL(e.target.files[0]);
            }
        }}/>

        <ImageEditor {...{...args, src}} onSaveImage={(props : any) => setSavedSrc(props.src)}/>

        <img src={savedSrc} alt='saved img - preview' style={{width: '300px', marginTop: '40px'}}/>
    </div>)
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Default = Template.bind({});

Default.args = {
    onSaveImage: ({src, e}) => console.log({src, e}),
    loading: false,
    className: "",
    style: {},
    testSrcUrl: '',
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
    src: {
        description: 'img src'
    },
    testSrcUrl: {
        type: {name: 'string', required: false},
        defaultValue: '',
        description: 'initial image for tests;'
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
            brightness: {txt: 'Brightness'},
            brushColor: {txt: 'Brush color'},
            brushWidth: {txt: 'Brush width'},
            contrast: {txt: 'Contrast'},
            controls: {txt: 'Controls'},
            draw: {txt: 'Draw'},
            flip: {txt: 'Flip'},
            grayscale: {txt: 'Grayscale'},
            horizontal: {txt: 'Horizontally'},
            pan: {txt: 'Pan'}, //Mover / Arrastar
            reset: {txt: 'Reset'},
            rotate: {txt: 'Rotate'},
            saturate: {txt: 'Saturate'},
            save: {txt: 'Save'},
            vertical: {txt: 'Vertically'},
            zoom: {txt: 'Zoom'},
            write: {txt: 'Write'}
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