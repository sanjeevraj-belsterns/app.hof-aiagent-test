'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect, useCallback } from 'react';

const useFetchData = (url: string, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<number | null>(null);

  const { push } = useRouter();

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url, options);
      if (response.status === 401) {
        push('/sign-in');
        return;
      }
      if (!response.ok) {
        setError(response.status);
        return;
      }
      const result = await response.json();
      setData(result);
    } catch (err: any) {
      setError(500);
    } finally {
      setLoading(false);
    }
  }, [url, options]);

  useEffect(() => {
    fetchData();
  }, [fetchData]); // Re-fetch if triggerFetch changes

  return { data, loading, error };
};

export default useFetchData;
