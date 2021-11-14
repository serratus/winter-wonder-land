import { useEffect, useState } from 'react';

export type CalendarDay = {
  id: string;
  dayOfMonth: number;
};

export type Calendar = {
  id: string;
  days: CalendarDay[];
};

export type User = {
  id: string;
  calendar: Calendar;
};

export const useWithCalendarData = (userId: string) => {
  const [data, setData] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!data && !loading && !error) {
      setLoading(true);
      fetch('/api/graphql', {
        method: 'POST',
        headers: new Headers({
          'content-type': 'application/json',
        }),
        body: JSON.stringify({
          query: `
          query ExampleQuery($userId: ID!) {
            user(id: $userId) {
              calendar {
                days {
                  id
                  dayOfMonth
                }
              }
            }
          }
          `,
          variables: {
            userId,
          },
        }),
      })
        .then((response) => {
          return response.json();
        })
        .then((d) => {
          setData(d.data.user);
        })
        .catch((e) => {
          console.error(e);
          setError(e);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId, loading, data, error]);

  useEffect(() => {
    console.log('useWithCalendarData', data);
  }, [data]);

  return {
    data,
    loading,
  };
};
