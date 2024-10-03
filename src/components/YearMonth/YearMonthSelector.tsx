import React, { useEffect, useState } from 'react';
import Button from "../Button";

export interface YearMonthSelectorProps {
    year?: number,
    month?: number
}

export default function YearMonthSelector({ year, month }: YearMonthSelectorProps) {
    console.log('React', React)
    useState()
    // const [labelYear, setLabelYear] = useState<number>(1);
    // const [labelMonth, setLabelMonth] = useState<number>(1);

    // useEffect(() => {
    //     setLabelYear(year);
    //     setLabelMonth(month);

    //     console.log('executou sem parametros')

    //     return () => undefined
    // }, [year, month])

    return (
        <>
            <Button label="<<" />
            {/* {labelYear + ' / ' + labelMonth} */}
            <Button label=">>" />
        </>
    );
};

// export default YearMonthSelector;