import React, { FC } from 'react';
import { TabsProps } from './Tabs.types';
import { handleCssClassnames } from '@gadeoli/js-helpers-library';
import { useTheme } from '../ThemeHandler';
import Span from '../Span';
import Spinner from '../Spinner';
import { TabsContent, TabsNav, TabsNavItem } from '../../styled-components/Common';
import { TabsBody } from '../../styled-components/Common/Common';

/**
 * tabs: [{key: 1, children: <>Tab 1</>}]
 * need to control active by yourself
 */
const Tabs: FC<TabsProps> = ({
    tabs, 
    maxWidth='150px',
    body,
    noneText, 
    onChange, 
    spinnerSize, 
    emphasisActive, 
    loading, 
    className, 
    style = {} 
}) => { 
    const { theme } = useTheme();
    const classNames = handleCssClassnames([
        'cl-themed__tabs',
        className
    ]);

    return <div 
        style={{width: '100%', ...style}}
        className={classNames}
    >
        {loading ? (<Spinner size={spinnerSize || 3} />) : (<>
            {tabs && tabs.length ? (<TabsContent>
                <TabsNav className="nav" theme={theme}>
                    {tabs.map(t => {
                        const classNamesTItem = handleCssClassnames([
                            t.active ? 'active' : '',
                            t.active && emphasisActive ? 'emphasis-active' : '',
                        ]);

                        return (<TabsNavItem $maxWidth={maxWidth} onClick={() => {onChange(t.key)}} className={classNamesTItem} theme={theme} key={t.key}>{t.header()}</TabsNavItem>); 
                    })}
                </TabsNav>
                <TabsBody theme={theme}>
                    {body ? (body) : ('')}
                </TabsBody>
            </TabsContent>) : (<Span>{noneText}</Span>)}
        </>)}
    </div>
}

export default Tabs;

