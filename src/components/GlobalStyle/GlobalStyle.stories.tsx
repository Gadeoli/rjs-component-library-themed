import React from 'react';
import GlobalStyle from './GlobalStyle';
import { GlobalStyleProps } from './GlobalStyle.types';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "RjsComponentLibraryThemed/GlobalStyle",
    component: GlobalStyle,
    render: ({...args}: GlobalStyleProps) => (<GlobalStyle {...args}/>),
}