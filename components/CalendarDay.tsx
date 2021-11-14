import React from 'react';

import type { CalendarDay as CalendarDayData } from './useWithCalendarData';

type CalendarDayProps = {
  day: CalendarDayData;
};

export const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => (
  <div>
    {day.dayOfMonth}: {day.id}
  </div>
);
