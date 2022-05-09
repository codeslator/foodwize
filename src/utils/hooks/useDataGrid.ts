import { useState } from 'react';
import { GridSelectionModel } from "@mui/x-data-grid";
import { AxiosConfig } from '../../config/interfaces';

interface UseDataGridCustomHookProps {
  refetch: (config: AxiosConfig) => void; 
  defaultUrl: string;
};

const useDataGrid = ({ refetch, defaultUrl }: UseDataGridCustomHookProps) => {
  const [url] = useState<string>(defaultUrl);
  const [pageSize, setPageSize] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<GridSelectionModel>([]);

  const handlePageSize = (newPageSize: number) => {
    setPageSize(newPageSize);
    refetch({
      url: `${url}?limit=${newPageSize}&offset=${page}`
    });
  };

  const handlePage = (newPage: number) => {
    setPage(newPage);
    refetch({
      url: `${url}?limit=${pageSize}&offset=${newPage * pageSize}`
    });
  };

  const handleSelectedItems = (newSelectedItems: GridSelectionModel) => {
    setSelectedItems(newSelectedItems);
  };

  return {
    handlePageSize,
    handlePage,
    handleSelectedItems,
    pageSize,
    page,
    selectedItems
  };
};

export default useDataGrid;