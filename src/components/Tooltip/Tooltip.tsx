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
    className, 
    style, 
    loading
}) => {
    const {theme} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__tooltip',
        type ? type : 'default',
        loading ? 'loading-effect' : undefined,
        className
    ]);
    const toolRef = useRef(null);
    const contentRef = useRef<HTMLDivElement | null>(null);  
    const {show} = useHover(toolRef);
    const [fixStyleClass, setFixStyleClass] = useState('');

    useEffect(() => {
        if(show && contentRef.current){
            const cPos = contentRef.current.getBoundingClientRect();

            if (cPos.right > window.innerWidth)setFixStyleClass('fix-right');
            else if (cPos.left < 0) setFixStyleClass('fix-left');
        }else{
            setFixStyleClass('');
        }
    }, [show]);

    return (<StyledTooltip
        theme={theme} 
        className={classNames} 
        style={style}
        ref={toolRef}
        $show={show}
    >
        <StyledTooltipContext className="cl-themed__tooltip--context">{!loading && children}</StyledTooltipContext>
        {!loading ? <StyledTooltipContent ref={contentRef} theme={theme} className={`cl-themed__tooltip--content ${position} ${type} ${fixStyleClass}`} $show={show} $position={position} type={type}>
            {tipcontent}
        </StyledTooltipContent> : null}
    </StyledTooltip>);
}

export default Tooltip;