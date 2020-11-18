import { DependencyList, useEffect, useState } from 'react';
import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: DependencyList) => {
  const [data, setData] = useState<T | null>(null);
  const [isError, setIsError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const response = await req<T>(endpoint, query);
        setData(response);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, deps);

  return {
    data,
    isError,
    isLoading,
  };
};

export default useData;
