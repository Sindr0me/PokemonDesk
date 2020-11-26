import { useEffect, useState } from 'react';

const useDebounce = (value: string, delay: number): string => {
  const [debouncedValue, setdebouncedValue] = useState<string>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setdebouncedValue(value);
    }, delay);

    return () => clearInterval(handler);
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
