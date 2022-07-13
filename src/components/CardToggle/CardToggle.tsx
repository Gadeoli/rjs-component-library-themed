import React, { FC, useEffect, useRef, useState } from 'react';
import { CardToggleProps } from './CardToggle.types';
import { useElementSize, useOnClickOutside, useOnPressKey, useWindowSize } from '@gadeoli/rjs-hooks-library';
import styled from 'styled-components';

const CardToggle : FC<CardToggleProps> = ({toggleTrigger, initialToggle = false, children, className}) => {
    const [toggle, setToggle] = useState(true);

    /** Main control */
    const mainContainerRef = useRef();
    useOnClickOutside(mainContainerRef, (e : any) => clickOutSideAction(e));
    const clickOutSideAction = (e: any) => {
        if(toggle){
            setToggle(false);
        }
    }
    useOnPressKey(mainContainerRef, 27, clickOutSideAction);
    /** Main control */

    /** Toggle Position Control */
    const toggleContainerRef = useRef();
    const toggleSize = useElementSize(toggleContainerRef);
    const windowSize = useWindowSize();
    
    const wWidth = windowSize.width;
    const tPositionX = toggleSize.position.x;
    const tWidth = toggleSize.width;
    
    const wHeight = windowSize.height;
    const tPositionY = toggleSize.position.y; 
    const tHeight = toggleSize.height;
    /** Toggle Position Control */

     /** Trigger Position Control */
    const triggerContainerRef = useRef();
    const triggerSize = useElementSize(triggerContainerRef);
    const gHeight = triggerSize.height; // g of gatilho (trigger in PT_BR)
     /** Trigger Position Control */

    const handleAbsoluteX = () => {
        if(tPositionX + tWidth > wWidth){
            return {
                left: 'unset',
                right: 0
            }
        }else{
            return {
                left: 0,
                right: 'unset'
            }
        }
    }

    const handleAbsoluteY = () => {
        if(tPositionY + tHeight > wHeight){
            return {
                top: 'unset',
                bottom: `${gHeight + 5}px`,
            }
        }else{
            return {
                top: `${gHeight + 5}px`,
                bottom: 'unset'
            }
        }
    }

    const {left, right} = handleAbsoluteX();
    const {top, bottom} = handleAbsoluteY();
    
    useEffect(() => {
        //set toggle false here because if start the component
        //with display hidden cause failure to calc the position sizes
        setToggle(initialToggle || false);
    }, [initialToggle]);

    return (<MainCointainer className="cl-themed__card-toggle" ref={mainContainerRef}>
        <TriggerContainer ref={triggerContainerRef}>
            {toggleTrigger(() => setToggle(!toggle))}
        </TriggerContainer>
        
        <ToggleContainer
            ref={toggleContainerRef} 
            show={toggle} 
            position={{
                top,
                bottom, 
                left,
                right 
            }}
            className={className}
        >
            {children}
        </ToggleContainer>
    </MainCointainer>);
}

export default CardToggle;

const MainCointainer = styled.div`
    position: relative;
`;

const TriggerContainer = styled.div``;

const ToggleContainer = styled.div`
    position: absolute;
    box-sizing: border-box;
    display: ${props => props.show ? 'block' : 'none'};
    top:    ${props => props.position.top};
    bottom: ${props => props.position.bottom};
    left:   ${props => props.position.left};
    right:  ${props => props.position.right};

    &.full{
        width: 100%;
    }
`;