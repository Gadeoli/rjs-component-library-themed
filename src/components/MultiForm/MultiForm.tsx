import React, { FC } from 'react';
import { MultiFormProps } from './MultiForm.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import Spinner from '../Spinner';
import { MultiFormBody, MultiFormContent, MultiFormNav, MultiFormNavItem, MultiFormNavItemDivisor, MultiFormNavItemKey, MultiFormNavItemLabel } from '../../styled-components/Common/Common';

/**
 * steps: [{children: <>Step 1</>}]
 * need to control current by yourself
 */
const MultiForm: FC<MultiFormProps> = ({
    steps, 
    body,
    noneText, 
    // onChange, 
    spinnerSize, 
    current,
    loading, 
    className, 
    style = {} 
}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__multi-form',
        className
    ]);

    return <div 
        style={{width: '100%', ...style}}
        className={classNames}
    >
        {loading ? (<Spinner size={spinnerSize || 3} />) : (<>
            {steps && steps.length ? (<MultiFormContent>
                <MultiFormNav className="nav" theme={theme}>
                    {steps.map((s, k) => {
                        const tPosition = k+1;
                        const tCurrent = tPosition === current;
                        const tDisabled = tPosition > current;
                        const tCompleted = tPosition < current && !tCurrent;
                        const hasDivisor = tPosition < steps.length;

                        const classNamesTItem = handleCssClassnames([
                            tCurrent ? 'current' : ''
                        ]);

                        const classNamesTItemParts = handleCssClassnames([
                            tDisabled ? 'disabled' : '',
                            tCompleted ? 'completed' : '',
                            tCurrent ? 'current' : '',
                        ]);

                        return (<MultiFormNavItem className={classNamesTItem} theme={theme}>
                            <MultiFormNavItemKey theme={theme} className={classNamesTItemParts}>{!tCompleted ? tPosition : <>&#10004;</>}</MultiFormNavItemKey>
                            <MultiFormNavItemLabel theme={theme} className={classNamesTItemParts}>{s.header}</MultiFormNavItemLabel>
                            {hasDivisor ? (<MultiFormNavItemDivisor theme={theme} className={classNamesTItemParts}/>) : ('')}
                        </MultiFormNavItem>); 
                    })}
                </MultiFormNav>
                <MultiFormBody theme={theme}>
                    {body ? (body) : ('')}
                </MultiFormBody>
            </MultiFormContent>) : (<Span>{noneText}</Span>)}
        </>)}
    </div>
}

export default MultiForm;

