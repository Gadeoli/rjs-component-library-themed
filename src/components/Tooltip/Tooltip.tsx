import React, { FC, useEffect, useRef, useState } from 'react';
import { TooltipProps } from './Tooltip.types';
import { 
    Tooltip as StyledTooltip,
    TooltipContent as StyledTooltipContent,
    TooltipContext as StyledTooltipContext
} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { useHover } from '@gadeoli/rjs-hooks-library';

const Tooltip: FC<TooltipProps> = ({
    position="bottom",
    type="default",
    children,
    tipcontent,
    parentRef,
    className, 
    style, 
    index=1000,
    loading
}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__tooltip',
        type ? type : 'default',
        loading ? 'loading-effect' : undefined,
        parentRef ? 'absolute' : undefined,
        className
    ]);
    const toolRef = useRef(null);
    const contentRef = useRef<HTMLDivElement | null>(null);  
    const {show} = useHover(toolRef);
    const [fixStyleClass, setFixStyleClass] = useState('');

    useEffect(() => {
        if(show){
            const cPos =    parentRef?.current ?
                            parentRef.current.getBoundingClientRect() :
                            contentRef?.current ?
                            contentRef.current.getBoundingClientRect() :
                            null;

            if(!cPos){
                setFixStyleClass('');
                return;
            };

            if (cPos.right > window.innerWidth)setFixStyleClass('fix-right');
            else if (cPos.left < 0) setFixStyleClass('fix-left');
        }else{
            setFixStyleClass('');
        }
    }, [show, parentRef]);

    return (<StyledTooltip
        theme={theme} 
        className={classNames} 
        style={style}
        ref={toolRef}
        $show={show}
    >
        <StyledTooltipContext className="cl-themed__tooltip--context">{!loading && children}</StyledTooltipContext>
        {!loading ? <StyledTooltipContent $index={index} ref={contentRef} theme={theme} className={`cl-themed__tooltip--content ${position} ${type} ${fixStyleClass}`} $show={show} $position={position} type={type}>
            {tipcontent}
        </StyledTooltipContent> : null}
    </StyledTooltip>);
}

export default Tooltip;