import { useEffect, useState } from 'react';

/**
 * Update debounced value after delay
 *
 * Usage:
 *
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * @param  value to update after delay has expired
 * @param  delay on ms between debouncings
 * @returns debouncedValue
 */
export const useDebounce = <T>(value: T, delay = 500): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    // This is how we prevent debounced value from updating if value is changed ...
    // .. within the delay period. Timeout gets cleared and restarted.
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
