import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { DayPicker } from 'react-day-picker';

type CalendarProps = React.ComponentProps<typeof DayPicker>;
declare function Calendar({ className, classNames, labels, showOutsideDays, ...props }: CalendarProps): react_jsx_runtime.JSX.Element;
declare namespace Calendar {
    var displayName: string;
}

export { Calendar, type CalendarProps };
