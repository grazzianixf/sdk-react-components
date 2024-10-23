import React from 'react';
import Button from "../Button";

import { TimeCustom, YearMonth } from '@grazzianixf/sdk';

export interface YearMonthSelectorProps {
    year?: number,
    month?: number,
    onChange?: any
}

const YEAR_MONTH_INITIAL_STATE = {
    year: TimeCustom.getCurrentYear(),
    month: TimeCustom.getCurrentMonth()
}

const YearMonthSelector = (props: YearMonthSelectorProps) => {

    const { year, month, onChange } = props;

    const [yearMonth, setYearMonth] = React.useState(YEAR_MONTH_INITIAL_STATE);

    React.useEffect(() => {
        if (year && month) {
            setYearMonth({ year, month });
        }

        return () => undefined
    }, [year, month])

    React.useEffect(() => {
        if (onChange) {
            onChange(new YearMonth(yearMonth.year, yearMonth.month));
        }

        return () => undefined
    }, [yearMonth])

    const handlePreviousNext = (type: string) => {
        let ym = new YearMonth(yearMonth.year, yearMonth.month);

        if (type === 'P') {
            ym.previous();
        } else if (type === 'N') {
            ym.next();
        }

        setYearMonth({ year: ym.year, month: ym.month });
    }

    return (
        <div style={{display: "flex", flexDirection: "row"}}>
            <Button label="<<" onClick={() => handlePreviousNext('P')} />
            <span style={{padding: "2px"}}>
                {yearMonth?.year + ' / ' + yearMonth?.month}
            </span>
            <Button label=">>" onClick={() => handlePreviousNext('N')} />
        </div>
    );
}


export default YearMonthSelector;