import { useState, ChangeEvent } from 'react';



const useItemSelector = <T>(keyName = 'id', items = []) => {
  const [selectedItems, setSelectedItems] = useState<T[]>(items);

  const handleSelectOne = (event: ChangeEvent<HTMLInputElement>, itemId: T) => {
    const selectedIndex = selectedItems.indexOf(itemId);
    let newSelectedItemsIds: T[] = [];

    if (selectedIndex === -1) {
      newSelectedItemsIds = newSelectedItemsIds.concat(selectedItems, itemId);
    } else if (selectedIndex === 0) {
      newSelectedItemsIds = newSelectedItemsIds.concat(selectedItems.slice(1));
    } else if (selectedIndex === selectedItems.length - 1) {
      newSelectedItemsIds = newSelectedItemsIds.concat(selectedItems.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedItemsIds = newSelectedItemsIds.concat(
        selectedItems.slice(0, selectedIndex),
        selectedItems.slice(selectedIndex + 1)
      );
    }

    setSelectedItems(newSelectedItemsIds);
  };

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    let newSelectedItemsIds: T[];

    if (event.target.checked) {
      newSelectedItemsIds = items.map((item) => item[keyName]);
    } else {
      newSelectedItemsIds = [];
    }

    setSelectedItems(newSelectedItemsIds);
  };

  return {
    selectedItems,
    handleSelectOne,
    handleSelectAll,
  };
};

export default useItemSelector;
