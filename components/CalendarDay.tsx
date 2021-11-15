import React, { CSSProperties } from 'react';

import type { CalendarDay as CalendarDayData } from './useWithCalendarData';

type CalendarDayProps = {
  day: CalendarDayData;
};

const colorForDay = new Array(24).fill(0).map((_, i) => `#039d03`);

const outerBorderColor = '#141414';
const innerBorderColor = 'rgb(14 126 14)';
const defaultBackgroundColor = `#039d03`;

// pass in css attributes
type HexagonStyle = Pick<
  CSSProperties,
  | 'backgroundColor'
  | 'color'
  | 'fontSize'
  | 'fontFamily'
  | 'fontStyle'
  | 'fontWeight'
  | 'textDecoration'
  | 'backgroundImage'
  | 'borderStyle'
  | 'borderWidth'
  | 'borderColor'
  | 'position'
  | 'top'
  | 'left'
  | 'justifyContent'
  | 'alignItems'
  | 'cursor'
  | 'padding'
  | 'margin'
  | 'transform'
>;

const stylesForDay: HexagonStyle[] = [
  {
    color: 'white',
  },
  {
    fontSize: '2rem',
  },
  {
    fontWeight: 'bold',
    fontSize: '2rem',
  },
  {
    fontStyle: 'italic',
  },
  {
    textDecoration: 'underline',
    fontSize: '2rem',
  },
  { backgroundColor: 'violet' },
];

export const CalendarDay: React.FC<CalendarDayProps> = ({ day }) => {
  const backgroundColor =
    stylesForDay[day.dayOfMonth - 1]?.backgroundColor ?? defaultBackgroundColor;
  return (
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
          backgroundColor,
          aspectRatio: `${2 * Math.cos(Math.PI / 6)} / 1`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderLeft: `2px solid ${outerBorderColor}`,
          borderRight: `2px solid ${outerBorderColor}`,
        }}
      >
        <div
          style={{
            backgroundColor,
            position: 'absolute',
            left: 0,
            right: 0,
            aspectRatio: '1 / 1',
            top: '-87%',
            transform: 'rotate(-45deg) skew(15deg, 15deg) scale(0.558)',
            borderTop: `3px solid ${outerBorderColor}`,
            borderRight: `3px solid ${outerBorderColor}`,
          }}
        ></div>
        <div
          style={{
            backgroundColor,
            position: 'absolute',
            left: 0,
            right: 0,
            aspectRatio: '1 / 1',
            top: '13%',
            transform: 'rotate(-45deg) skew(15deg, 15deg) scale(0.558)',
            borderBottom: `3px solid ${outerBorderColor}`,
            borderLeft: `3px solid ${outerBorderColor}`,
          }}
        ></div>
        <div
          style={{
            zIndex: 100,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            // backgroundColor: 'white',
            // width: '100%',
            // aspectRatio: '1',
            // margin: '20%',
            borderRadius: '100%',
            // border: `2px solid ${innerBorderColor}`,
          }}
        >
          <span style={stylesForDay[day.dayOfMonth - 1]}>{day.dayOfMonth}</span>
        </div>
      </div>
    </div>
  );
};
