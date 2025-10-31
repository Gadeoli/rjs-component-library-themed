import React, { FC, useMemo } from 'react';
import { Range as StyledRange} from '../../styled-components/Common';
import { useTheme } from '../ThemeHandler';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { RangeProps } from './Range.types';
import { darken, rgba } from 'polished';

const Range: FC<RangeProps> = ({
    name, 
    disabled, 
    className,
    type='primary', 
    style, 
    loading, 
    id, 
    value=0, 
    min=0,
    max=100,
    step=1,
    onChange
}) => {
    const {theme, mode} = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__range',
        loading ? 'loading-effect' : undefined,
        className
    ]);
    const progress = useMemo(() => value ? ((value / max) * 100) : 0, [value, max, min]);
    const colors = useMemo(() => {
        return {
            background: darken(mode === 'light' ? 0.1 : 0.03, theme.background),
            active: theme[type],
            handler1: rgba(theme[type], 0.15),
            handler2: rgba(theme[type], 0.25),
        }        
    }, [type, mode]);

    return (<StyledRange
        name={name}
        id={id}
        type='range' 
        disabled={disabled}
        theme={theme} 
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e: any) => onChange(e)}
        $progress={progress}
        $colors={colors}
        className={classNames}
        style={style}
    />);
}

export default Range;