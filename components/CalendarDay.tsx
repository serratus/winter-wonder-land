import React from 'react';

import type { CalendarDay as CalendarDayData } from './useWithCalendarData';

type CalendarDayProps = {
  day: CalendarDayData;
};

const colorForDay = new Array(24).fill(0).map((_, i) => `#039d03`);

export const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => (
  <div
    style={{
      flex: 1 / 6,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      marginBottom: `${((1 / 20) * 100 * 1) / (2 * Math.cos(Math.PI / 6))}%`,
      marginTop: `${((1 / 20) * 100 * 1) / (2 * Math.cos(Math.PI / 6))}%`,
      marginRight: `${((1 / 80) * 100 * 1) / Math.cos(Math.PI / 6)}%`,
      marginLeft: `${((1 / 80) * 100 * 1) / Math.cos(Math.PI / 6)}%`,
    }}
  >
    <div
      style={{
        backgroundColor: colorForDay[day.dayOfMonth - 1],
        aspectRatio: `${2 * Math.cos(Math.PI / 6)} / 1`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: '2px solid black',
        borderRight: '2px solid black',
      }}
    >
      <div
        style={{
          backgroundColor: colorForDay[day.dayOfMonth - 1],
          position: 'absolute',
          left: 0,
          right: 0,
          aspectRatio: '1 / 1',
          top: '-88%',
          transform: 'rotate(-45deg) skew(15deg, 15deg) scale(0.56)',
          borderTop: '3px solid black',
          borderRight: '3px solid black',
        }}
      ></div>
      <div
        style={{
          backgroundColor: colorForDay[day.dayOfMonth - 1],
          position: 'absolute',
          left: 0,
          right: 0,
          aspectRatio: '1 / 1',
          top: '12%',
          transform: 'rotate(-45deg) skew(15deg, 15deg) scale(0.56)',
          borderBottom: '3px solid black',
          borderLeft: '3px solid black',
        }}
      ></div>
      <div style={{ zIndex: 100 }}>{day.dayOfMonth}</div>
    </div>
  </div>
);
