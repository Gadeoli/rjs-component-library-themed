import React, { FC, useEffect, useRef, useState } from 'react';
import { CardToggleProps } from './CardToggle.types';
import { useElementSize, useOnClickOutside, useOnPressKey, useWindowSize } from '@gadeoli/rjs-hooks-library';
import styled from 'styled-components';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';

const CardToggle : FC<CardToggleProps> = ({
    toggleTrigger, 
    initialToggle = false, 
    children, 
    className,
    xOverride,
    yOverride
}) => {
    const [toggle, setToggle] = useState(true);
    const classNamesMainContainer = handleCssClassnames([
        'cl-themed__card-toggle',
        className
    ]);

    /** Main control */
    const mainContainerRef = useRef();
    useOnClickOutside(mainContainerRef, (e: any) => clickOutSideAction(e));
    const clickOutSideAction = (e: any) => {
        if(toggle){
            setToggle(false);
        }
    }
    useOnPressKey(mainContainerRef, 27, clickOutSideAction);
    /** Main control */

    /** Toggle Position Control */
    const windowSize = useWindowSize();
    const toggleContainerRef = useRef();
    const toggleSize = useElementSize(toggleContainerRef);
    
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
        if(xOverride){
            return xOverride === 'left' ?
                {left: 0, right: 'unset'} :
                {left: 'unset', right: 0};
        }else{
            return (tPositionX + tWidth) > (wWidth - tWidth) ? 
                    {left: 'unset', right: 0} :
                    {left: 0, right: 'unset'};
        }
    }

    const handleAbsoluteY = () => {
        if(yOverride){
            return yOverride === 'top' ?
                {top: 'unset', bottom: `${gHeight + 5}px`} :
                {top: `${gHeight + 5}px`, bottom: 'unset'};
        }else{
            return (tPositionY + tHeight) < (wHeight - tHeight) ? 
                    {top: `${gHeight + 5}px`, bottom: 'unset'} :
                    {top: 'unset', bottom: `${gHeight + 5}px`}
        }
    }

    const {left, right} = handleAbsoluteX();
    const {top, bottom} = handleAbsoluteY();
    
    useEffect(() => {
        //set toggle false here because if start the component
        //with display hidden cause failure to calc the position sizes
        setToggle(initialToggle || false);
    }, [initialToggle]);

    return (<MainCointainer className={classNamesMainContainer} ref={mainContainerRef}>
        <TriggerContainer className="cl-themed__card-toggle__trigger" ref={triggerContainerRef}>
            {toggleTrigger(() => setToggle(!toggle))}
        </TriggerContainer>
        
        <ToggleContainer
            className={'cl-themed__card-toggle__toggle'}
            ref={toggleContainerRef} 
            show={toggle} 
            position={{
                top,
                bottom, 
                left,
                right 
            }}
        >
            {children}
        </ToggleContainer>
    </MainCointainer>);
}

export default CardToggle;

const MainCointainer = styled.div`
    position: relative;
    z-index: 1;
`;

const TriggerContainer = styled.div``;

const ToggleContainer = styled.div`
    z-index: 2;
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