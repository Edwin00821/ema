import { useEffect, useState } from 'react';

const DATE_UNITS: Array<['day' | 'hour' | 'minute' | 'second', number]> = [
  ['day', 86400],
  ['hour', 3600],
  ['minute', 60],
  ['second', 1],
];

const getDateDiffs = (timestamp: number) => {
  const now = Date.now();
  const elapsed = (timestamp - now) / 1000;

  for (const [unit, secondsInUnit] of DATE_UNITS) {
    if (Math.abs(elapsed) > secondsInUnit || unit === 'second') {
      const value = Math.round(elapsed / secondsInUnit);
      return { value, unit };
    }
  }
};

const useTimeAgo = (timestamp: number) => {
  const [timeago, setTimeago] = useState(() => getDateDiffs(timestamp));

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimeAgo = getDateDiffs(timestamp);
      setTimeago(newTimeAgo);
    }, 1000);

    return () => clearInterval(interval);
  }, [timestamp]);

  const { value, unit } = timeago;

  const rtf = new Intl.RelativeTimeFormat('es', { style: 'short' });

  return rtf.format(value, unit);
};

export default useTimeAgo;
