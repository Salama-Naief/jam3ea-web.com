import { useState, useEffect, useCallback } from 'react';
import { IResponse } from '../types';

const useHttpClient = <T, R = unknown>() => {
  const [results, setResults] = useState<T | null>(null);
  const [errors, setErrors] = useState<R | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendRequest = useCallback(
    async (request: Promise<IResponse<T, R>>): Promise<boolean> => {
      setIsLoading(true);

      let status = false;

      try {
        const response = await request;
        console.log('the respose: ', response);
        setResults(response.results);
        setErrors(response.errors);
        status = response.success;
      } catch (error) {
        setResults(null);
      } finally {
        setIsLoading(false);
      }

      return status;
    },
    []
  );

  return { results, errors, isLoading, sendRequest };
};

export default useHttpClient;
