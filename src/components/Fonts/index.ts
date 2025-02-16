import { html } from 'htm/preact';
import { useCallback, useEffect, useState } from 'preact/hooks';
import { block } from '../../utils/bem';
import { i18n } from '../../i18n/i18n';
import { Button } from '../Button';
import { Checkbox } from '../Checkbox';
import { Input } from '../Input';
import { WarningMessage } from '../WarningMessage';
import { filterFonts } from './utils';
import { FontList } from '../FontList';
import { FontListGrouped } from '../FontListGrouped';

import './index.css';

const b = block('fonts');

export function Fonts() {
    if (!window.queryLocalFonts) {
        return html`<${WarningMessage}>${i18n('Local Font Access API is not supported.')}<//>`;
    }

    const [fonts, setFonts] = useState<FontData[]>();
    const [filter, setFilter] = useState<string>('');
    const [groupByFamily, setGroupByFamily] = useState(true);

    const handleButtonClick = useCallback(() => {
        if (!window.queryLocalFonts) {
            return;
        }

        window.queryLocalFonts().then(fontData => {
            setFonts(fontData);
        });
    }, []);

    useEffect(() => {
        handleButtonClick();
    }, []);

    const handleCheckboxClick = useCallback((value: boolean) => {
        setGroupByFamily(value);
    }, []);

    const handleChange = useCallback((value: string) => {
        setFilter(value);
    }, []);

    const items = filterFonts(fonts || [], filter);

    return html`
        <div class="${b()}">
            <div class="${b('controls')}">
                ${fonts ? '' : html`<${Button} theme="active" onClick="${handleButtonClick}">${i18n('Request fonts')}<//>`}
                ${fonts ? html`<${Input} class="${b('filter')}" placeholder="${i18n('Filter')}" value="" onChange="${handleChange}" //>` : ''}
                ${fonts ? html`<div class="${b('group-by-family')}"><${Checkbox} onClick="${handleCheckboxClick}" label="${i18n('Group by family')}" checked="${groupByFamily}" //></div>` : ''}
            </div>
            <${groupByFamily ? FontListGrouped : FontList} items="${items}" />
        </div>
    `;
}
