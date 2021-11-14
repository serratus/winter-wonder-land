import React, { FC } from 'react';
import { CalendarDay } from './CalendarDay';

import type { Calendar as CalendarData } from './useWithCalendarData';

type CalendarProps = {
  data: CalendarData;
};

export const Calendar: React.FC<CalendarProps> = ({ data }) => (
  <div>
    {data.days.map((day) => (
      <CalendarDay key={day.id} day={day} />
    ))}
  </div>
);
