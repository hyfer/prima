import debounce from "lodash.debounce";
import { useCallback, useEffect, useState } from "react";

const useFetch = <T>({
  url,
  options,
  wait = 0,
  shouldFetch = true,
}: {
  url: string;
  options?: RequestInit | undefined;
  wait?: number;
  shouldFetch?: boolean;
}): {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
} => {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const request = useCallback(
    debounce(async (url: string, cancelRequest: boolean) => {
      try {
        const response = await fetch(url, options);

        if (!response?.ok) {
          throw response;
        }
        const data: T = await response.json();

        if (!cancelRequest) {
          setData(data);
          setIsLoading(false);
        }
      } catch (error) {
        if (!cancelRequest && error instanceof Error) {
          setError(error);
        }
      }
    }, wait),
    [],
  );

  useEffect(() => {
    let cancelRequest = false;

    if (!url) {
      return;
    }

    if (!shouldFetch) {
      return;
    }

    setIsLoading(true);
    request(url, cancelRequest);

    return () => {
      cancelRequest = true;
    };
  }, [url]);

  return { data, error, isLoading };
};

export { useFetch };
