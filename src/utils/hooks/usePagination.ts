import { useState, MouseEvent } from 'react';
import { AxiosConfig } from '../../config/interfaces';

interface UsePaginationHookParams {
  refetch: (config: AxiosConfig) => void; 
  defaultUrl: string;
}

const usePagination = <T>({ refetch, defaultUrl }: UsePaginationHookParams) => {
  const [items, setItems] = useState<T[]>([]);
  const [count, setCount] = useState<number>(0);
  const [url] = useState<string>(defaultUrl);
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);

  const handlePage = (event: MouseEvent<HTMLButtonElement>, newPage: number) => {
    setPage(newPage);
    refetch({
      url: `${url}?limit=${limit}&offset=${newPage * limit}`
    });
  };

  const handleLimit = (event: MouseEvent<HTMLButtonElement>) => {
    const { value } = event.currentTarget;
    setLimit(parseInt(value, 10));
    refetch({
      url: `${url}?limit=${value}&offset=${page}`
    });
  };

  const rowsPerPageOptions = (array: T[], steps = 5) => {
    const surplus = array.length % Math.floor(steps);
    const lastStep = array.length + (Math.floor(steps) - surplus);
    const stepPages = [];
    for (let index = Math.floor(steps); index <= lastStep; index += Math.floor(steps)) {
      stepPages.push(index);
    }
    return stepPages;
  };

  return {
    items,
    count,
    limit,
    handleLimit,
    handlePage,
    page,
    setItems,
    setCount,
    rowsPerPageOptions,
  };
};

export default usePagination;