import React, { useState } from 'react';
import Card from '../Card';
import { CardContent } from '../../styled-components/Common';
import Toggle from './Toggle';
import Span from '../Span';

const ToggleStory = (args: any) => {
    const [value, setValue] = useState<boolean | number | null>(null);

    return(<Card><CardContent>
        <Toggle 
            {...args}
            value={value}
            onChange={(cValue: any) => {
                // console.log(cValue);
                setValue(cValue);
            }}
        />    
        <br/> <Span>Card - CardContent - Toggle</Span>
    </CardContent></Card>)
}

export default ToggleStory;