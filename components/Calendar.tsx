import React, { FC } from 'react';
import { CalendarDay } from './CalendarDay';

import type { Calendar as CalendarData } from './useWithCalendarData';
import type { CalendarDay as CalendarDayData } from './useWithCalendarData';

type CalendarProps = {
  data: CalendarData;
};

const rowsPerColumn = [4, 5, 6, 5, 4];

const indexToRowMapping = rowsPerColumn.reduce<number[]>(
  (items, nrOfItemsPerRow, i) => {
    return items.concat(new Array(nrOfItemsPerRow).fill(i));
  },
  []
);

export const Calendar: React.FC<CalendarProps> = ({ data }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    }}
  >
    {data.days
      .reduce<React.ReactNode[][]>((rows, day, i) => {
        if (!rows[indexToRowMapping[i]]) {
          rows[indexToRowMapping[i]] = [];
        }
        rows[indexToRowMapping[i]].push(<CalendarDay key={day.id} day={day} />);
        return rows;
      }, [])
      .map((row, i) => {
        return (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'stretch',
            }}
            key={i}
          >
            {row}
          </div>
        );
      })}
  </div>
);
