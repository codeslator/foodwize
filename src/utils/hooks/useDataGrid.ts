import { MouseEvent } from 'react';
import { GridRowId } from "@mui/x-data-grid";

interface UseDataGridCustomHookProps {
  onEdit?: (id: GridRowId) => void;
  onDelete?: (id: GridRowId) => void;
}

const useDataGrid = ({ onEdit, onDelete }: UseDataGridCustomHookProps) => {
  const handleEdit = (id: GridRowId) => (event: MouseEvent) => {
    event.stopPropagation();
    onEdit && onEdit(id);
    console.log('editing ', id);
  };

  const handleDelete = (id: GridRowId) => (event: MouseEvent) => {
    event.stopPropagation();
    onDelete && onDelete(id);
    console.log('deleting', id);
  };

  return {
    handleEdit,
    handleDelete
  };
};

export default useDataGrid;