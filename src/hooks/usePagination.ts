import { useState, useEffect } from 'react';
import { AxiosApi } from 'src/services';

function usePagination<T>(route: string, page?: number, limit?: number) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<T>();
  const [query, setQuery] = useState({
    page: page || 1,
    limit: limit || 10,
  });

  const removeItemById = (id: string) => {
    setData((state: any) => {
      if (Array.isArray(state)) {
        return state.filter((item: any) => item.id !== id);
      }
      return state;
    });
  };

  const changePage = (page?: number, limit?: number) => {
    if (page && page !== query.page) {
      setQuery((state) => ({
        ...state,
        page: page || state.page,
        limit: limit || state.limit,
      }));
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const url = `${route}?page=${query.page}&limit=${query.limit}`;
        const { data } = await AxiosApi.get(url);
        setData(data.forms);
      } catch (error: any) {
        console.error(error);
        setError(error.message);
      }
      setLoading(false);
    })();
  }, [query, route]);

  return {
    loading,
    data,
    changePage,
    error,
    removeItemById,
    page: query.page,
  };
}

export default usePagination;
